import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "./store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { info } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(asyncLoadMovie(id));

    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-fit md:px-[5%] px-3 relative"
    >
      {/* part 1 navigation */}
      <nav className="w-full py-6 flex items-center gap-x-10 text-xl text-zinc-100">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6565CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* part 2 poster and details */}
      <div className="w-full md:mt-5 md:flex gap-10">
        <img
          className="md:h-[50vh] md:w-[20%] w-full h-[70vh] shadow-[8px_17px_38px_2px_rgba(0, 0, 0, 0.5)] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="text-zinc-100 flex flex-col gap-5 mt-3 md:mt-0">
          <h1 className="md:text-5xl text-3xl font-black">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="md:text-xl text-xs font-semibold text-zinc-200 ml-1">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="md:flex items-center gap-5">
            <div className="flex gap-3 items-center">
              <span className="text-white font-semibold w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                {(info.detail.vote_average * 10).toFixed()}
                <sup>%</sup>
              </span>
              <h1 className="text-xl leading-none font-semibold">
                User <br /> Score
              </h1>
            </div>
            <div className="flex gap-3 items-center md:mt-0 mt-3">
              <h1 className="text-lg">{info.detail.release_date}</h1>
              <h1 className="text-lg">
                {info.detail.genres.map((g) => g.name).join(", ")}
              </h1>
              <h1 className="text-lg">{info.detail.runtime}min</h1>
            </div>
          </div>

          <div className="">
            <h1 className="text-lg font-semibold italic">
              {info.detail.tagline}
            </h1>
            <h1 className="text-xl mt-2">Overview</h1>
            <p className="md:text-base text-sm">{info.detail.overview}</p>
            <h1 className="md:text-lg font-semibold mt-2">
              Producation Companies -{" "}
              {info.detail.production_companies.map((c) => c.name).join(", ")}
            </h1>
            <h1 className="md:text-lg font-semibold">
              Producation Countries -{" "}
              {info.detail.production_countries.map((c) => c.name).join(", ")}
            </h1>
            <Link
              to={`${pathname}/trailer`}
              className="px-6 py-2 bg-[#6565CD] text-lg font-semibold mt-5 inline-block "
            >
              <i className="text-xl mr-2 ri-play-fill"></i>
              Play Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* part 3 available platforms */}
      <div className="my-10 text-zinc-100 flex flex-col gap-y-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex items-center">
            <h1 className="md:w-[20%] mr-2 text-lg font-semibold">
              Available on Plateform :{" "}
            </h1>
            {info.watchproviders.flatrate.map((w, idx) => (
              <img
                className="w-10 h-10 object-cover rounded-md mr-5"
                key={idx}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex items-center">
            <h1 className="md:w-[20%] mr-2 text-lg font-semibold">
              Available on Rent :{" "}
            </h1>
            {info.watchproviders.rent.map((w, idx) => (
              <img
                className="w-10 h-10 object-cover rounded-md mr-5"
                key={idx}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex items-center">
            <h1 className="md:w-[20%] mr-2 text-lg font-semibold">
              Available on Buy :{" "}
            </h1>
            {info.watchproviders.buy.map((w, idx) => (
              <img
                className="w-10 h-10 object-cover rounded-md mr-5"
                key={idx}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4 reccomendation & similar stuff */}
      <hr className="border-none h-[1px] bg-[#898989] " />
      <div className="text-zinc-100 mt-5">
        <h1 className="md:text-3xl text-xl font-bold mb-5">
          Recommendations & Similar Stuff
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
