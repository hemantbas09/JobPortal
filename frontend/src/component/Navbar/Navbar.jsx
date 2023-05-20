import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropright,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";

import { getToken } from "../../Service/localStorageService";
const Navbar = () => {
  const token = getToken("token");
  console.log(token);
  const [dropdown, setDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => setToggle(!toggle);
  const dropdownClick = () => setDropdown((prev) => !prev);
  return (
    <>
      <div className="  bg-white fixed -mt-4 z-50 ">
        <div className="flex justify-end md:gap-x-40 gap-x-4 items-center  ">
          <span className="md:px-36 mr-28 md:mr-0">
            <Link to={"/"}>
              <div>
                <img className="w-52  " src="image/logo.svg" alt="logo" />
              </div>
            </Link>
          </span>

          <div className=" hidden md:flex items-center text-xl md:gap-x-10  ">
            <ul className="flex gap-x-10">
              <Link to={"/"}>
                <li className="hover:text-blue-600/100 text-2xl">Home</li>
              </Link>

              <li className="text-2xl flex flex-col items-center gap-3">
                <button
                  className="relative flex items-center gap-4"
                  onClick={dropdownClick}
                >
                  <span className="active:text-blue-600 ">Find Job</span>
                  {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                </button>

                {dropdown && (
                  <div className="bg-white absolute top-full m-auto  mt-2 w-2/6 border border-gray-300 shadow z-20 ">
                    <ul className="flex flex-col gap-8 py-12">
                      <Link to={"/informationTechnology"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Information Technology
                        </li>
                      </Link>
                      <Link to={"/engineering"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Engineering
                        </li>
                      </Link>
                      <Link to={"/healthcare"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Healthcare and Medical{" "}
                        </li>
                      </Link>
                      <Link to={"/finance"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Finance and Accounting
                        </li>
                      </Link>
                      <Link to={"/administrative"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Administrative and Office Support
                        </li>
                      </Link>
                      <Link to={"/education"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Education and Training
                        </li>
                      </Link>
                      <Link to={"/other"}>
                        <li
                          onClick={dropdownClick}
                          className="hover:text-blue-600/100 text-2xl"
                        >
                          Other
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>

              <Link to={"/aboutus"}>
                <li className="hover:text-blue-600/100 text-2xl">About Us</li>
              </Link>
              <Link to={"/contactus"}>
                <li className="hover:text-blue-600/100 text-2xl">Contact Us</li>
              </Link>

              {/* <li className="hover:text-blue-600/100 text-2xl">Pricing</li> */}
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
          <div className="md:hidden md:px-5 ml-4 pr-5 " onClick={toggleClick}>
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
              <li
                onClick={toggleClick}
                className="p-4 text-xl hover:bg-gray-100"
              >
                Home
              </li>
            </Link>
            <li className="  text-xl flex flex-col items-center gap-4 p-4 hover:bg-gray-100 ">
              <button
                className="relative flex items-center "
                onClick={() => setDropdown((prev) => !prev)}
              >
                <span className="hover:bg-gray-100"> Find Job</span>

                {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
              </button>

              {dropdown ? (
                <div className=" bg-zinc-50 relative z-20 flex flex-col gap-8">
                  <Link to={"/informationTechnology"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600/100 text-xl"
                    >
                      Information Technology
                    </li>
                  </Link>
                  <Link to={"/engineering"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600/100 text-xl"
                    >
                      Engineering
                    </li>
                  </Link>
                  <Link to={"/healthcare"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600/100 text-xl"
                    >
                      Healthcare and Medical
                    </li>
                  </Link>
                  <Link to={"/finance"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600/100 text-xl"
                    >
                      Finance and Accounting
                    </li>
                  </Link>
                  <Link to={"/administrative"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600/100 text-xl"
                    >
                      Administrative and Office Support
                    </li>
                  </Link>
                  <Link to={"/education"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600/100 text-xl"
                    >
                      Education and Training
                    </li>
                  </Link>
                  <Link to={"/other"}>
                    <li
                      onClick={toggleClick}
                      className="hover:text-blue-600 text-xl"
                    >
                      Other
                    </li>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </li>
            <Link to={"/aboutus"}>
              <li
                onClick={toggleClick}
                className=" p-4 text-xl hover:bg-gray-100"
              >
                About Us
              </li>
            </Link>
            <Link to={"/contactus"}>
              <li
                onClick={toggleClick}
                className="p-4 text-xl hover:bg-gray-100"
              >
                Contact Us
              </li>
            </Link>

            <div className="flex flex-col my-4 gap-4">
              <Link to={"/login"}>
                <button
                  onClick={toggleClick}
                  className="flex items-center justify-between  text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Log In
                  <IoIosArrowDropright
                    className="  w-5 h-5 rtl:-scale-x-100"
                    size={20}
                  />
                </button>
              </Link>
              <Link to={"/login"}>
                <button
                  onClick={toggleClick}
                  className="flex items-center justify-between  text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
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
