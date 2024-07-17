import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap gap-16 px-10 my-10">
      {data.map((card, idx) => (
        <Link key={idx} className="w-[25vh]">
          <img
            className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0, 0, 0, 0.5)] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.poster_path || card.backdrop_path
            }`}
            alt=""
          />
          <h1 className="w-full mt-3 text-xl font-semibold text-zinc-200">
            {card.title ||
              card.name ||
              card.original_name ||
              card.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
