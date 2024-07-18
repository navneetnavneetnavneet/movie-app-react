import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let category = pathname.includes("movie") ? "movieReducer" : "tvReducer";
  const youtubevideo = useSelector((state) => state[category].info?.videos);

  return (
    <div className="w-full h-screen z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.8)] fixed top-0 left-0">
      <Link
        onClick={() => navigate(-1)}
        className="hover:text-[#6565CD] ri-close-fill absolute top-[5%] right-[5%] text-white text-xl"
      ></Link>
      <ReactPlayer
        width={1200}
        height={500}
        url={`https://www.youtube.com/watch?v=${youtubevideo.key}`}
      />
    </div>
  );
};

export default Trailer;
