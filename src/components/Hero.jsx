import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImgUrl } from "../constants";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movies);

  const randomIndex = Math.floor(Math.random() * movies.length);

  const randomMovie = movies[randomIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] mb-11">
      {!movies || isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col items-center gap-12 my-4 justify-center">
            <h1 className="text-4xl font-bold">{randomMovie?.title}</h1>
            <p className="text-start mr-6">{randomMovie?.overview}</p>
            <p className="text-2xl">
              <span>IMDB</span>:
              <span className="text-green-500 font-semibold">
                {randomMovie?.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex items-center justify-content-center gap-20 text-xl">
              <button className="bg-red-700 p-2 rounded-lg">Watch</button>
              <button className="bg-blue-700 p-2 rounded-lg">
                Add To List
              </button>
            </div>
          </div>
          <div>
            <img
              src={baseImgUrl + randomMovie?.backdrop_path}
              className="rounded-2xl hero-img my-4 object-contain max-h-[400px]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
