import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col items-start justify-end p-[5%]"
    >
      <h1 className="w-2/3 text-5xl font-black text-white">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="w-2/3 text-white my-3 tracking-tight">
        {data.overview.slice(0, 200)} . . .
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-500">more</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 mr-2 ri-megaphone-fill"></i>
        {data.release_date || "No information"}
        <i className="text-yellow-500 ml-5 mr-2 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="px-4 py-2 mt-3 rounded-md text-white bg-[#6565CD]">
        Watch Triler
      </Link>
    </div>
  );
};

export default Header;
