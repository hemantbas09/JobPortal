import { useState, useEffect } from "react";

import Hero from "../component/Hero/Hero";
import { Category, Job } from "../component/index";
// import {workImage} from '../images/download.png'

const Home = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = [
    "image/brand.png",
    "image/brand3.jpeg",
    "image/brand4.jpeg",
    "image/brand5.png",
    "image/brand1.png",
    "image/brand.png",
    "image/brand3.jpeg",
    "image/brand4.jpeg",
    "image/brand5.png",
    "image/brand1.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((currentIdx + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIdx]);
  return (
    <>
      <div className="flex flex-col items-center gap-y-10 border-4 border-emerald-50 mt-16">
        <Hero />
        <hr />

        {/* -------------------Start Job Category:---------------------  */}
        <div className="flex flex-col overflow-hidden ">
          <div className="  items-center justify-center text-center mb-10">
            <h1 className=" py-2 text-3xl text-indigo-500 font-medium">
              Job Categories
            </h1>
            <p className=" py-2 text-base text-gray-600">
              Your Career Starts With Us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-red-50 gap-y-10 gap-x-48 w-fit ">
            <div className="bg-gray-50  ">
              <Category />
            </div>
            <div className="bg-gray-50   ">
              <Category />
            </div>
            <div className="bg-gray-50   ">
              <Category />
            </div>

            <div className="bg-gray-50   ">
              <Category />
            </div>
            <div className="bg-gray-50   ">
              <Category />
            </div>
            <div className="bg-gray-50   ">
              <Category />
            </div>
            <div className="bg-gray-50   ">
              <Category />
            </div>
            <div className="bg-gray-50   ">
              {" "}
              <Category />
            </div>
            <div className="bg-gray-50   ">
              {" "}
              <Category />
            </div>
          </div>
        </div>
        <hr />
        {/* -------------------End Job Category:---------------------  */}

        {/*--------------------- Start Feature Job---------------- */}
        <div className="flex flex-col">
          <div className="  items-center justify-center text-center mb-10 ">
            <h1 className=" py-2 text-3xl text-indigo-500 font-medium">
              Featured Jobs
            </h1>
            <p className=" py-2 text-base text-gray-600">
              Know Your Worth And Find The Job That Quality Your Life
            </p>
          </div>
          <Job />
        </div>
        <hr />

        {/*--------------------- End Feature Job---------------- */}

        {/* --------------------Start Totla COmpany and Job-------------- */}
        <div className=" flex flex-col w-9/12 gap-y-8">
          <div className=" flex flex-col md:flex-row items-center justify-start gap-x-16 gap-y-10 mb-5">
            <div className="w-1/2">
              <img
                className=" w-full   rounded-lg sm:mx-0 sm:shrink-0"
                src="image/download.png"
                alt=""
              />
            </div>
            <div className=" flex flex-col items-center gap-y-10  md:w-4/12   text-center ">
              <h1 className=" text-gray-600 mb-2 text-3xl">
                Million of jobs. Find the one that Suits You.
              </h1>
              <p className="mb-5 text-lg text-gray-600 text-center md:text-justify">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over
                600,000companies worldwide.
                <br />{" "}
                <li className="mt-3"> Bring to the table win-win survival</li>
                <br /> <li> Capitalize on low hanging fruit to identify</li>
                <br /> <li> But I must explain to you how all this </li>
              </p>
              <button className="uppercase mx-2.5 px-5 rounded-lg py-4 text-white bg-[rgb(65,88,208)] font-bold w-fit">
                Get Started
              </button>
            </div>
          </div>
          <hr />
          <div className=" p-4  flex flex-col md:flex-row justify-between items-center gap-y-10 ">
            <div className="flex flex-col items-center gap-y-5">
              <span className="uppercase text-gray-600 text-5xl font-bold  ">
                4500
              </span>
              <p className="uppercase text-gray-600 text-3xl  ">job seeker</p>
            </div>

            <div className="flex flex-col items-center gap-y-5">
              <span className="uppercase text-gray-600 text-5xl font-bold  ">
                4M
              </span>
              <p className="uppercase text-gray-600 text-3xl  ">Job</p>
            </div>

            <div className="flex flex-col items-center gap-y-5">
              <span className="uppercase text-gray-600 text-5xl font-bold  ">
                1M
              </span>
              <p className="uppercase text-gray-600 text-3xl ">Company</p>
            </div>
          </div>
        </div>
        <hr />

        {/* --------------------Start Totla COmpany and Job-------------- */}
        <div class=" w-full border-t-2 border-white-300"></div>

        {/*----------------Start  Top COmpany-------------- */}

        <div className=" flex flex-col items-center md:flex-row gap-y-16 gap-x-36 justify-evenly">
          <img
            className={`w-32 h-32 rounded-lg ${
              currentIdx === 0 ? "active" : ""
            }`}
            src="image/brand.png"
            alt=""
          />
          <img
            className={`w-32 h-32 rounded-lg ${
              currentIdx === 1 ? "active" : ""
            }`}
            src="image/brand3.jpeg"
            alt=""
          />
          <img
            className={`w-32 h-32 rounded-lg ${
              currentIdx === 2 ? "active" : ""
            }`}
            src="image/brand4.jpeg"
            alt=""
          />
          <img
            className={`h-32 rounded-lg ${currentIdx === 3 ? "active" : ""}`}
            src="image/brand5.png"
            alt=""
          />
          <img
            className={`h-32 rounded-lg ${currentIdx === 4 ? "active" : ""}`}
            src="image/brand1.png"
            alt=""
          />
        </div>

        {/*----------------End  Top COmpany-------------- */}
        {/* End Top COmpany */}
        <hr />

        <div className="bg-zinc-50 flex flex-col-reverse md:flex-row justify-between items-center md:w-10/12 rounded-lg shadow-lg border-2 border-zinc-100  ">
          <div className=" md:w-6/12 flex flex-col items-center md:items-start justify-start md:pl-3 ">
            <h1 className="  text-gray-600 mb-2 text-4xl font-bold">
              Recruiting?
            </h1>
            <p className="mt-7 w-11/12 mb-5 text-xl text-gray-600 md:text-justify text-center">
              Advertise your jobs to millions of monthly users and search 15.8
              million CVs in our database.
            </p>
            <div className="">
              <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-indigo-700 text-white font-bold text-xl">
                Start Recruting Now
              </button>
            </div>
          </div>
          <div className="mb-3 pt-3 pr-6  ">
            <img
              className=" pl-8 p-3  w-96 h-full l sm:mx-0 sm:shrink-0"
              src="image/employee.png"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="mt-7"></div>
        <hr />
      </div>
    </>
  );
};

export default Home;
