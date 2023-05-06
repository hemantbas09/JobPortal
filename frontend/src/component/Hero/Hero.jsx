import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <>
      <div className="w-full bg-white py-20 ">
        <div className="  md:max-w-[1480px] px-5 m-auto grid grid-cols-1 md:grid-cols-2 max-w-[600px] gap-y-10">
          <div className="flex flex-col justify-start items-start gap-4 gap-y-10">
            <p className=" text-2xl text-indigo-500 font-medium">
              Connecting you to your dream career
            </p>
            <h1 className=" md:text-left md:leading-[72px] md:text-6xl text-5xl font-semibold">
              Welcome to
              <span className="text-indigo-500 "> BURAN job portal</span>
            </h1>
            <p className="py-2 text-lg text-gray-600 text-justify">
              {" "}
              <span className="text-indigo-500">BURAN Jobs</span> dedicated to
              helping job seekers find their dream jobs, and helping employers
              find the perfect candidates for their open positions. Our platform
              offers a wide range of job opportunities across various industries
              and career levels.
            </p>

            <form className=" bg-white border w-fit mt-3 p-4 input-box-shadow rounded-md flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                className="bg-zinc-100 p-3 focus:bg-white"
                type="text"
                placeholder="keyword or job Title"
              />
              <input
                className="bg-zinc-100 p-3 focus:bg-white"
                type="text"
                placeholder="Location"
              />
              <button className=" ">
                <AiOutlineSearch
                  size={30}
                  className="icon"
                  style={{ color: "indigo", hover: "green" }}
                />
              </button>
            </form>
          </div>

          <img
            src="image/heroImage.svg"
            alt=""
            className=" md:h-5/6 md:mx-24 md:order-last  order-first flex justify-center items-center"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
