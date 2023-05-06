import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import image from "../../images/job.jpg";
import Sidebar from "../../component/Sidebar/Sidebar";
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
const check = () => {
  return (
    <>
      {/* <div class=" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="flex max-w-6xl mx-auto  bg-white shadow-lg px-8">
                    <img src={image} alt="Job Image" class="w-32 h-32  mr-8" />
                    <div className="flex-1">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-3xl font-bold">Junior Graphic Designer (Web)</h2>
                            <BsBookmark size={20} class="fill-current text-gray-500 w-6 h-6" />
                        </div>
                        <div class="flex items-center justify-between gap-10 mb-4">
                            <div>
                                <span class="text-xl">Money</span>
                                <span class="text-xl">Location</span>
                            </div>

                            <span class=" text-xl "><span class=" text-bold text-blue-500">Deadline Date:</span> 2023 Janaury 29</span>
                        </div>
                        <div class="flex items-center justify-start gap-10 mb-4">

                            <span class="text-gray-700 text-sm">Full Time</span>
                            <span class="text-gray-700 ml-10 text-sm">Job Type</span>

                        </div>
                        <div class="flex items-center justify-end">
                            <button class="flex mb-10 items-center justify-between text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Add Job</span>
                                <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

     
    </>
  );
};

export default check;
