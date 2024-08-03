import React from "react";
import { Link } from "react-router-dom";
import about from "/about.png"

const About = () => {
  document.title = "Movie App | Aboutpage";
  const dets = [
    { title: "Movies", value: "955,559" },
    { title: "Tv Shows", value: "177,407" },
    { title: "Tv Seasons", value: "295,762" },
    { title: "Peoples", value: "3,546,038" },
    { title: "Images", value: "6,090,729" },
    { title: "Edits Last Week", value: "516,020" },
  ];

  const details = [
    {
      number: 1,
      detail:
        "Every year since 2008, the number of contributions to our database has increased (check out our last years wrap!) With over 1,500,000 developers and companies using our platform, TMDB has become a premiere source for metadata.",
    },
    {
      number: 2,
      detail:
        "Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.",
    },
    {
      number: 3,
      detail:
        "We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.",
    },
    {
      number: 4,
      detail:
        "Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on TMDB is nothing short of amazing.",
    },
    {
      number: 5,
      detail:
        "Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.",
    },
  ];
  return (
    <div className="w-full min-h-[255vh] bg-[#1F1E24] text-white flex flex-col justify-start items-center px-3">
      <h1 className="md:text-[12vw] text-7xl mt-5 font-black italic">
        Hi there,
      </h1>
      <img
        className="md:w-2/3 object-cover -mt-[5%] z-10"
        src={about}
        alt=""
      />
      <h1 className="md:text-5xl text-3xl font-black md:my-10 my-5">
        Let's talk about TMDB
      </h1>
      <h4 className="md:w-1/2 md:text-lg text-sm font-semibold text-center">
        The Movie Database (TMDB) is a community built movie and TV database.
        Every piece of data has been added by our amazing community dating back
        to 2008. TMDB's strong international focus and breadth of data is
        largely unmatched and something we're incredibly proud of. Put simply,
        we live and breathe community and that's precisely what makes us
        different.
      </h4>
      <div className="md:w-1/2 flex flex-col items-center justify-center mt-10">
        <h1 className="md:text-3xl text-2xl font-bold mb-10">
          The TMDB advantage
        </h1>
        {details.map((d, idx) => (
          <div key={idx} className="flex items-start md:gap-10 gap-5 mb-5">
            <span className="text-7xl font-semibold text-[#98083A] leading-none">
              {d.number}
            </span>
            <h4 className="md:text-lg text-sm">{d.detail}</h4>
          </div>
        ))}
        <Link
          to="/contact"
          className="hover:text-white hover:bg-[#98083A] duration-300 px-6 py-3 rounded-md text-lg mt-5 font-bold bg-white text-[#98083A]"
        >
          CONTACT TMDB
        </Link>
      </div>
      <div className="md:w-2/3 mt-10">
        <h1 className="text-3xl font-semibold">State</h1>
        <p className="text-base">
          We all love them. Here's a few that we find interesting.
        </p>
        <div className="mt-5 flex items-center md:gap-x-20 gap-x-10 gap-y-5 md:gap-y-10 flex-wrap">
          {dets.map((d, idx) => (
            <span key={idx} className="md:w-[15%]">
              <h1 className="text-2xl font-semibold">{d.value}</h1>
              <span className="text-base font-thin">
                {d.title}
                <sup>*</sup>
              </span>
            </span>
          ))}
        </div>
        <p className="text-zinc-400 mt-5 mb-10">
          * These counts do not include adult content.
        </p>
        <Link
          to="/contact"
          className="hover:text-white hover:bg-[#98083A] duration-300 px-6 py-3 rounded-md text-lg mt-5 font-bold bg-white text-[#98083A]"
        >
          CONTACT TMDB
        </Link>
      </div>
    </div>
  );
};

export default About;
