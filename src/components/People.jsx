import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import Cards from "./partials/Cards";
import { toast } from "react-toastify";

const People = () => {
  document.title = "Movie App | People";
  const navigate = useNavigate();

  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setpage(1);
      setperson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-full h-screen">
      <div className="w-full h-[10vh] md:px-10 px-3 flex items-center justify-between">
        <h1 className="md:w-[30%] md:text-2xl text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6565CD] ri-arrow-left-line"
          ></i>{" "}
          People <small className="md:text-sm text-xs text-zinc-500">({category})</small>
        </h1>
        <TopNav />
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title="people" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
