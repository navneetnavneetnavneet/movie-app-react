import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ hidden, closeIconHandler }) => {
  return (
    <div
      className={`md:w-[20%] w-full bg-[#1f1E24] h-full border-r border-zinc-200 md:p-5 p-3 md:flex flex-col ${hidden}`}
    >
      <h1 className="text-2xl font-bold text-white">
        <i className="ri-tv-fill text-[#6565CD] mr-2"></i>
        <span className="md:text-2xl text-xl">Movie App</span>
        <i
          onClick={closeIconHandler}
          className="md:hidden ri-close-fill absolute right-0 mt-2 mr-2"
        ></i>
      </h1>
      <nav className="text-zinc-400 md:text-xl text-lg flex flex-col md:gap-3">
        <h1 className="text-semibold text-white text-xl md:mt-10 mt-5 mb-3">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] mt-5 bg-zinc-400" />
      <nav className="text-zinc-400 md:text-xl text-lg flex flex-col md:gap-3">
        <h1 className="text-semibold text-white text-xl mt-5 mb-3">
          Website Information
        </h1>
        <Link
          to="/about"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-information-2-fill"></i>
          About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6565CD] hover:text-white duration-300 p-3 rounded-lg flex items-center gap-x-2"
        >
          <i className="ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
