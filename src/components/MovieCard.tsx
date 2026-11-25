import { Link } from "react-router-dom";
import Poster from "./Poster";
import type { MovieCardProps } from "../types";

const MovieCard = ({ movie }: MovieCardProps) => {
    // Formattazione della data inglese in formato italiano (2001-12-19 to 19/12/2001)
    const data_uscita = movie.release_date ? movie.release_date.split("-").reverse().join("/") : "Data non disponibile";

    return (
        <article className="card">
            <Poster poster_path={movie.poster_path} title={movie.title} variant="card" />
            <div className="card__body">
                <h2 className="card__title">{movie.title}</h2>
                <p className="card__meta">
                    Uscita: {data_uscita} · Voto: {movie.vote_average.toFixed(1)}
                </p>
                <p className="card__overview">{movie.overview}</p>
                <Link className="card__cta" to={`/movies/${movie.id}`}>
                    Dettaglio
                </Link>
            </div>
        </article>
    );
};

export default MovieCard;