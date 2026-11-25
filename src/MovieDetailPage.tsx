import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
    const { id } = useParams();

    return <p>Dettaglio del film {id}</p>;
};

export default MovieDetailPage;