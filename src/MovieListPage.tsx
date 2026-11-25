import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import type { MovieListItem, MovieSearchResponse } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const URL = `${API_URL}/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

const MovieListPage = () => {
    const [movies, setMovies] = useState<MovieListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Non è stato possibile caricare i film.");
                }
                return response.json();
            })
            .then((data: MovieSearchResponse) => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    
    return (
        <>
            <h1 className="page-title">The Lord of the Rings</h1>
            <p className="page-sub">
                Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
                items · senza filtri / paginazione
            </p>
            {loading && <p>Caricamento…</p>}
            {error && <p>{error}</p>}
            {!loading && !error && movies.length === 0 && <p>Nessun film trovato.</p>}
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default MovieListPage;