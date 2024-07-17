import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState(null);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending ? (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="w-full h-[10vh] px-10 flex items-center justify-between">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>
        <TopNav />
        <div className="w-[30%] flex gap-x-5">
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <Cards data={trending} title={category} />
    </div>
  ) : <Loading />
};

export default Trending;
