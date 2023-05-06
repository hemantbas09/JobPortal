import React from "react";
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Job = () => {
  return (
    <>
      {/* bg-zinc-100 p-6   w-fit rounded-lg shadow items-center  flex justify-center */}
      <div className="  flex  flex-col items-center md:flex-row  justify-center gap-x-10 gap-y-2 overflow-hidden  ">
        <img
          className="  pl-8 p-3 block mx-auto h-36 rounded-lg  sm:mx-0 sm:shrink-0"
          src="image/heroImage.svg"
          alt="category Pic"
        />

        <div className="flex flex-col gap-y-5 items-center my-4">
          {/* className="flex justify-center  items-center  text-gray-600 ml-5  " */}
          <div className="flex   items-center justify-evenly gap-x-10 ">
            <h2 className="   text-2xl font-bold text-center">
              Junior Graphic Design
            </h2>
            {/* <p className="  ">
              <BsFillBookmarkHeartFill size={25} />
            </p> */}
          </div>
          
          <div className=" flex flex-col md:flex-row md:space-x-5  items-center space-y-2 md:pr-6">
            <div className="flex items-center gap-3">
              <BsHandbag /> <p>Information Technology</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <HiOutlineLocationMarker /> <p>Kathmandu</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <GiMoneyStack /> <p>Rs.25000</p>
            </div>
          </div>
        
          <div className="flex gap-10">
            <p className="bg-white px-3 py-1  rounded-full">Java</p>
            <p className="bg-white px-3 py-1 rounded-full">Html</p>
            <p className="bg-white px-3 py-1 rounded-full">JavaScript</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
