import { Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import MovieListPage from "./MovieListPage";
import MovieDetailPage from "./MovieDetailPage";

const App = () => {
    return (
        <Routes>
            <Route element={<Shell />}>
                <Route path="/" element={<MovieListPage />} />
                <Route path="/movies/:id" element={<MovieDetailPage />} />
            </Route>
        </Routes>
    );
};

export default App;