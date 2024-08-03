import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Home = () => {
  document.title = "Movie App | Homepage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/movie/day");
      const randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      toast.error(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);

  const [left, setLeft] = useState("50");
  const menuIconHandler = () => {
    setLeft("0");
  };

  const closeIconHandler = () => {
    setLeft("50");
  };

  return wallpaper && trending ? (
    <>
      <i
        onClick={menuIconHandler}
        className="md:hidden text-2xl ri-menu-fill absolute top-3 left-3 text-white"
      ></i>
      <div
        className={`sidebar md:hidden absolute top-0 -left-[${left}%] duration-1000 transition-all z-[100] bg-red-300 w-[50%] h-screen`}
      >
        <SideNav hidden={"flex"} closeIconHandler={closeIconHandler} />
      </div>
      <SideNav hidden={"hidden"} />
      <div className="md:w-[80%] w-full md:h-full overflow-y-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className="px-5">
          <div className="flex justify-between items-center my-5">
            <h1 className="md:text-3xl text-xl w-2/3 font-semibold text-zinc-400">
              Trending
            </h1>
            <Dropdown
              title="Filter"
              options={["tv", "movie", "all"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <HorizontalCards data={trending} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
