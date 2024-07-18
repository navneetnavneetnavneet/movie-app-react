import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap bg-[#1F1E24] gap-16 px-10 my-10">
      {data.map((card, idx) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={idx}
          className="relative w-[25vh]"
        >
          <img
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0, 0, 0, 0.5)] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.poster_path || card.backdrop_path || card.profile_path
            }`}
            alt=""
          />
          <h1 className="w-full mt-3 text-xl font-semibold text-zinc-200">
            {card.title ||
              card.name ||
              card.original_name ||
              card.original_title}
          </h1>

          {card.vote_average && (
            <div className="absolute bottom-[35%] -right-5 -rotate-12 text-white font-semibold w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              {(card.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
