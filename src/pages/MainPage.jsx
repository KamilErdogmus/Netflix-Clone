import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { getPopuler } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreActions";
import Loader from "../components/Loader";
import MovieList from "./../components/MovieList";
import Error from "./../components/Error";

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPopuler());
  }, []);
  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default MainPage;
