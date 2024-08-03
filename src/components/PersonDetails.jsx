import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPerson, removePerson } from "./store/actions/personActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [category, setcategory] = useState("movie");

  const { info } = useSelector((state) => state.personReducer);
  useEffect(() => {
    dispatch(asyncLoadPerson(id));

    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  return info ? (
    <div className="w-full h-fit pb-10 bg-[#1F1E24] md:px-[5%] px-3 relative">
      {/* part 1 navigation */}
      <nav className="w-full py-6 flex items-center gap-x-10 text-xl text-zinc-100">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6565CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full md:flex gap-10">
        {/* part 2 */}
        <div className="md:w-[20%] w-full">
          <img
            className="md:h-[50vh] h-[70vh] w-full shadow-[8px_17px_38px_2px_rgba(0, 0, 0, 0.5)] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="border-none h-[1px] bg-zinc-400 my-5" />
          {/* social media links */}
          <div className="w-full text-zinc-100 text-xl flex items-center justify-between">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill hover:text-white"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-box-fill hover:text-white"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill hover:text-white"></i>
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill hover:text-white"></i>
            </a>
          </div>

          {/* personal information */}
          <div className="w-full mt-5 text-zinc-300">
            <h1 className="text-2xl font-bold">Personal Details</h1>
            <div className="mt-3">
              <h1 className="text-xl tracking-tight font-semibold">
                Known For Department
              </h1>
              <h2>{info.detail.known_for_department}</h2>
            </div>
            <div className="mt-3">
              <h1 className="text-xl tracking-tight font-semibold">Gender</h1>
              <h2>{info.detail.gender === 2 ? "Male" : "Female"}</h2>
            </div>
            <div className="mt-3">
              <h1 className="text-xl tracking-tight font-semibold">Birthday</h1>
              <h2>{info.detail.birthday}</h2>
            </div>
            <div className="mt-3">
              <h1 className="text-xl tracking-tight font-semibold">Deathday</h1>
              <h2>
                {info.detail.deathday ? info.detail.deathday : "Still Alive"}
              </h2>
            </div>
            <div className="mt-3">
              <h1 className="text-xl tracking-tight font-semibold">
                Place Of Birth
              </h1>
              <h2>{info.detail.place_of_birth}</h2>
            </div>
            <div className="mt-3 hidden md:flex flex-col">
              <h1 className="text-xl tracking-tight font-semibold">
                Also Known As
              </h1>
              {info.detail.also_known_as.map((a, idx) => (
                <h2 key={idx}>{a} ,</h2>
              ))}
            </div>
          </div>
        </div>

        {/* part 3 */}
        <div className="text-zinc-300 md:w-[80%] md:mt-0 mt-5">
          <h1 className="md:text-5xl text-3xl font-black">
            {info.detail.name}
          </h1>
          <div className="mt-3 w-full">
            <h1 className="text-xl tracking-tight font-semibold">Biography</h1>
            <p className="md:text-base text-sm">{info.detail.biography}</p>
          </div>
          <div className="mt-3">
            <h1 className="text-xl tracking-tight font-semibold mb-5">
              Known For
            </h1>
            <HorizontalCards data={info.combinedCredits.cast} />
          </div>
          <div className="w-full flex items-center justify-between mt-5">
            <h1 className="w-2/3 text-xl tracking-tight font-semibold mb-5">
              Acting
            </h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className="w-full h-[50vh] mt-5 p-5 shadow-xl shadow-[rgba(255,255,255,0.1)] border-2 border-zinc-600 overflow-x-hidden overflow-y-auto">
            {info[category + "Credits"].cast.map((c, idx) => (
              <li
                key={idx}
                className="hover:text-white duration-300 mb-5 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span className="text-xl font-semibold">
                    {c.title || c.name || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5">
                    {c.character && `Charecter Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
