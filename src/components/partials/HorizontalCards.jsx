import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full whitespace-nowrap flex gap-x-10 overflow-y-hidden px-5 mb-5">
      {data.map((d, index) => (
        <div key={index} className="min-w-[20%] bg-zinc-900 text-white">
          <div className="w-full h-fit overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path
              }`}
              alt=""
            />
          </div>
          <div className="p-3 h-1/2">
            <h1 className="w-full leading-tight text-wrap text-2xl font-black text-white">
              {d.name || d.original_name || d.title || d.original_title}
            </h1>
            <p className="w-full text-wrap leading-tight text-white my-3 tracking-tight">
              {d.overview.slice(0, 100)} . . .
              <Link className="text-blue-500">more</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
