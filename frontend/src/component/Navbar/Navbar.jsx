import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

import { getToken } from "../../Service/localStorageService";
const Navbar = () => {
  const token = getToken("token");
  console.log(token);
  const [openModal, setOpenModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <>
      <div className="  bg-white fixed -mt-4 z-50  ">
        <div className="flex justify-end md:gap-x-40 gap-x-4 items-center">
          <span className="md:px-36 mr-28 md:mr-0">
            <Link to={"/"}>
              <div>
                <img className="w-52  " src="image/logo.svg" alt="logo" />
              </div>
            </Link>
          </span>

          <div className="hidden md:flex items-center text-xl md:gap-x-10  ">
            <ul className="flex gap-x-10">
              <li className="hover:text-blue-600/100 text-2xl">Home</li>
              <li className="hover:text-blue-600/100 text-2xl">About</li>
              <li className="hover:text-blue-600/100 text-2xl">Support</li>
              <li className="hover:text-blue-600/100 text-2xl">Platform</li>
              <li className="hover:text-blue-600/100 text-2xl">Pricing</li>
            </ul>
          </div>

          {/*----------------- Icon---------- */}
          <div className="flex items-center gap-x-8">
            <div className="hidden md:flex">
              <Link to={"/login"}>
                <button className="  flex items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Log In
                </button>
              </Link>
            </div>
            <div className="hidden md:flex">
              <Link to={"/login"}>
                {" "}
                <button className="flex items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Add Job
                </button>
              </Link>
            </div>

            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
          </div>

          {/* ---Toogle Button-------- */}
          <div className="md:hidden md:px-5 ml-4 " onClick={handleClick}>
            <span>
              {toggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
                </svg>
              )}
            </span>
          </div>
        </div>

        <div
          className={
            toggle
              ? "absolute z-10 p-4  bg-white w-5/6 px-8 ml-6 md:hidden"
              : "hidden"
          }
        >
          <ul className="flex flex-col items-center">
            <Link to={"/"}>
              <li className="p-4 text-xl hover:bg-gray-100">Home</li>
            </Link>
            <li className="p-4 text-xl hover:bg-gray-100">About</li>
            <li className="p-4 text-xl hover:bg-gray-100">Support</li>
            <li className="p-4 text-xl hover:bg-gray-100">Platform</li>
            <li className="p-4 text-xl hover:bg-gray-100">Pricing</li>
            <div className="flex flex-col my-4 gap-4">
              <Link to={"/login"}>
                <button className="flex items-center justify-between  text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Log In
                  <IoIosArrowDropright
                    className="  w-5 h-5 rtl:-scale-x-100"
                    size={20}
                  />
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="flex items-center justify-between  text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Add Job
                  <IoIosArrowDropright
                    className="w-5 h-5 rtl:-scale-x-100"
                    size={20}
                  />
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
