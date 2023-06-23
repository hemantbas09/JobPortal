import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  // Handle input change for keyword
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  // Handle input change for location
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="">
      <div className="px-5 m-auto grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <div className="flex flex-col justify-start items-start gap-4 gap-y-10">
          <p className="text-2xl text-indigo-500 font-medium">
            Connecting you to your dream career
          </p>
          <h1 className="md:text-left md:leading-[72px] md:text-6xl text-5xl font-semibold">
            Welcome to<span className="text-indigo-500"> BURAN job portal</span>
          </h1>
          <p className="py-2 text-lg text-gray-600 text-justify">
            <span className="text-indigo-500">BURAN Jobs</span> dedicated to
            helping job seekers find their dream jobs, and helping employers
            find the perfect candidates for their open positions. Our platform
            offers a wide range of job opportunities across various industries
            and career levels.
          </p>
        </div>

        <img
          src="image/heroImage.svg"
          alt=""
          className="md:h-5/6 md:mx-24 md:order-last order-first flex justify-center items-center"
        />
      </div>
      {/* Search form */}
      <form className="bg-white xl:-mt-48 mt-8 border xl-mb-48  p-4 input-box-shadow rounded-md flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-[800px] ">
        {/* Keyword input */}
        <input
          className="bg-zinc-100 p-3 focus:bg-white w-full"
          type="text"
          placeholder="Keyword or Job Title"
          onChange={handleKeywordChange}
        />
        {/* Location input */}
        <input
          className="bg-zinc-100 p-3 focus:bg-white w-full"
          type="text"
          placeholder="Location"
          onChange={handleLocationChange}
        />
        {/* Search button */}
        <Link
          to={`/search?jobTitle=${keyword}&location=${location}`}
          className="icon-link"
        >
          <AiOutlineSearch
            size={30}
            className="icon"
            style={{ color: "indigo" }}
          />
        </Link>
      </form>
    </div>
  );
};

export default Hero;
