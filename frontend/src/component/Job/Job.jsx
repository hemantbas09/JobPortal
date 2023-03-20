import React from 'react'
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Job = () => {
  return (
    <>
      <div className='bg-zinc-100 w-fit rounded-lg   flex justify-between'>


        <img className=" pl-8 p-3 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="image/heroImage.svg" alt="category Pic" />

        <div>
          <div className='flex justify-center  text-gray-600 -ml-3'>
            <h2 className='pr-8 p-3 mt-6'>Junior Graphic Design</h2>
            <p className='ml-40 mt-10'>< BsFillBookmarkHeartFill /></p>
          </div>
          <div className='flex pb-4 gap-x-5 py-2 text-xs text-gray-600'>
            <BsHandbag  /> <p className='-mt-0.5'>Information Technology</p> 
            <HiOutlineLocationMarker /> <p className='-mt-0.5'>Kathmandu</p>
            <GiMoneyStack /> <p className='-mt-0.5'>Rs.25000</p>

          </div>
        </div>




      </div>



    </>
  )
}

export default Job