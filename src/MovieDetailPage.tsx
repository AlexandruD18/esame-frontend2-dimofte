import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Poster from "./components/Poster";
import type { MovieDetail } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            })
            .then((data: MovieDetail) => {
                setMovie(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Film non trovato.");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (error || !movie) {
        return <div>{error}</div>;
    }

    // Formattazione della data inglese in formato italiano (2001-12-19 to 19/12/2001)
    const data_uscita = movie.release_date ? movie.release_date.split("-").reverse().join("/") : "Data non disponibile";

    // Formattazione del numero di voti
    const numero_voti = movie.vote_count.toLocaleString("it-IT");

    return (
        <>
            <Link className="back-link" to="/">← Torna all’elenco</Link>

            <article className="detail">
                <div>
                    <Poster poster_path={movie.poster_path} title={movie.title} variant="detail" />
                </div>

                <div>
                    <h1 className="detail__title">{movie.title}</h1>
                    {movie.tagline && <p className="detail__tagline">“{movie.tagline}”</p>}

                    <ul className="detail__meta">
                        <li>Uscita: {data_uscita}</li>
                        <li>Durata: {movie.runtime} min</li>
                        <li>Voto: {movie.vote_average.toFixed(1)}</li>
                        <li>Voti: {numero_voti}</li>
                        <li>Stato: {movie.status}</li>
                        <li>Lingua: {movie.spoken_languages[0]?.english_name || "n.d."}</li>
                    </ul>

                    <div className="detail__genres">
                        {movie.genres.map((genre) => (
                            <span key={genre.id} className="genre">{genre.name}</span>
                        ))}
                    </div>

                    <p className="detail__overview-label">Trama</p>
                    <p className="detail__overview">{movie.overview}</p>

                    <p className="card__meta">
                        Produzione: {movie.production_companies.map((company) => company.name).join(" · ") || "n.d."}
                    </p>
                </div>
            </article>
        </>
    );
};

export default MovieDetailPage;