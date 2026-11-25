import type { PosterProps } from "../types";

const Poster = ({ poster_path, title, variant }: PosterProps) => {
    const className = variant === "card" ? "card__poster" : "detail__poster";
    
    if (!poster_path) {
        return <div className={className}>Poster</div>;
    }

    return (
        <img
            className={className}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
        />
    );
};

export default Poster;