import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap bg-[#1F1E24] md:gap-x-16 justify-between px-3 md:px-10 my-5 md:my-10">
      {data.map((card, idx) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={idx}
          className="relative md:w-[25vh] w-[48%] mb-10"
        >
          <img
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0, 0, 0, 0.5)] object-cover"
            src={
              card.poster_path || card.backdrop_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="w-full mt-3 text-xl leading-none font-semibold text-zinc-200">
            {card.title ||
              card.name ||
              card.original_name ||
              card.original_title}
          </h1>

          {card.vote_average && (
            <div className="absolute  hidden bottom-[35%] -right-5 -rotate-12 text-white font-semibold w-10 h-10 bg-yellow-500 rounded-full md:flex items-center justify-center">
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
