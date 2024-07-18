import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const HorizontalCards = ({ data }) => {
  return (
    data && (
      <div className="w-full whitespace-nowrap flex gap-x-10 overflow-y-hidden px-5 mb-5">
        {data.length > 0 ? (
          data.map((d, index) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={index}
              className="min-w-[18%] bg-zinc-900 text-white"
            >
              <div className="w-full h-1/2 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={
                    d.backdrop_path || d.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          d.backdrop_path || d.profile_path
                        }`
                      : noimage
                  }
                  alt=""
                />
              </div>
              <div className="textdiv p-3 h-1/2 overflow-y-auto">
                <h1 className="w-full leading-tight text-wrap text-2xl font-black text-white">
                  {d.name || d.original_name || d.title || d.original_title}
                </h1>
                {d.overview.length != "" && (
                  <p className="w-full text-wrap leading-tight text-white my-3 tracking-tight">
                    {d.overview.slice(0, 100)} . . .
                    <Link className="text-blue-500">more</Link>
                  </p>
                )}
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-3xl font-black text-center mt-10">
            Nothing to show
          </h1>
        )}
      </div>
    )
  );
};

export default HorizontalCards;
