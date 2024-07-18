import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState(null);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start gap-x-3 pl-[25%] text-zinc-400">
      <i className="text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] py-3 outline-none border-none bg-transparent text-xl"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i onClick={() => setquery("")} className="text-2xl ri-close-fill"></i>
      )}

      <div className="w-[43%] max-h-[50vh] z-[10] bg-zinc-200 absolute top-[90%] overflow-auto">
        {searches &&
          searches.map((s, index) => (
            <Link to={`/${s.media_type}/details/${s.id}`}
              id={index}
              className="hover:text-black text-lg hover:bg-zinc-300 flex items-center justify-start w-full text-zinc-600 font-semibold border-b-2 border-zinc-100 p-5"
            >
              <div className="w-20 h-20 rounded mr-5 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          s.backdrop_path || s.profile_path
                        }`
                      : noimage
                  }
                  alt=""
                />
              </div>
              <span>
                {s.name || s.original_name || s.title || s.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopNav;
