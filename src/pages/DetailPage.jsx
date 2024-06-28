import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "./../components/Loader";
import Error from "./../components/Error"; // Hata bileşenini import edin
import { baseImgUrl } from "./../constants/index";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ActorCard from "../components/ActorCard";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState(""); // Hata durumu için state ekleyin

  const params = {
    append_to_response: "credits,videos",
  };

  useEffect(() => {
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message)); // Hata durumunu ayarlayın
  }, [id]);

  const watchTrailer = () => {
    const trailer = movie.videos.results.find(
      (video) => video.type === "Trailer"
    );
    if (trailer) {
      setVideoId(trailer.key);
      setModal(true);
    }
  };

  return (
    <div>
      {error ? ( // Hata durumunda Error bileşenini gösterin
        <Error />
      ) : !movie ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {/* Modal Video */}
          <ModalVideo
            channel="youtube"
            isOpen={modal}
            videoId={videoId}
            onClose={() => setModal(false)}
          />
          {/*Üst Alan */}
          <div className="relative h-[75vh] my-6">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />

            <div className="absolute bg-black inset-0 bg-opacity-45 grid place-items-center">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </div>
          {/* Orta Alan */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title={"Categories"} data={movie.genres} />
              <DetailDisplay
                title={"Spoken Language"}
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title={"Companies"}
                data={movie.production_companies}
              />
              <DetailDisplay
                title={"Countries"}
                data={movie.production_countries}
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                <p>{movie.overview}</p>
                <p className="flex gap-5">
                  <span className="border p-2 rounded-lg">
                    Budget:
                    <span className="text-green-500">
                      {movie.budget > 1
                        ? "$" + millify(movie.budget)
                        : "Unknown"}
                    </span>
                  </span>
                  <span className="border p-2 rounded-lg">
                    Revenue:
                    <span className="text-green-500">
                      ${millify(movie.revenue)}
                    </span>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={watchTrailer}
                  className="p-2 bg-blue-500 rounded-full hover:opacity-85 transition duration-500 text-xl font-bold w-[50%] "
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>

          {/* Slider Alanı */}

          <div>
            <h1 className="text-3xl font-bold mb-4">Cast</h1>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: "10px",
              }}
            >
              {movie.credits.cast.map((item, i) => (
                <SplideSlide key={i}>
                  <ActorCard actor={item} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
