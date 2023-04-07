import React, { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import { IoIosArrowDropright } from "react-icons/io";

import { IoMdNotificationsOutline } from "react-icons/io";
import { Mymodel } from '../Authentication/MyModel';
import { getToken } from '../../Service/localStorageService';
const Navbar = () => {
  const token = getToken('token');
  console.log(token)
  const [openModal, setOpenModal] = useState(false)
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  return (
    <>
      <div className='  bg-white'>
        <div className='  md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
          <span className='px-3 md:-ml-44'><img className='w-52  -mt-5' src="image/logo.svg" alt="logo" /> </span>
          <div className='hidden md:flex items-center text-xl -ml-16 '>
            <ul className='flex gap-4'>
              <img src="image/work.jpg" className='w-80' alt="" />
              <li className='hover:text-blue-600/100 text-2xl'>Home</li>
              <li className='hover:text-blue-600/100 text-2xl'>About</li>
              <li className='hover:text-blue-600/100 text-2xl'>Support</li>
              <li className='hover:text-blue-600/100 text-2xl'>Platform</li>
              <li className='hover:text-blue-600/100 text-2xl'>Pricing</li>

            </ul>
          </div>
          <div className='hidden md:flex gap-10 lg:-mr-96 ml-96 '>
            <button
              className="  flex items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              <span>Log In </span>
            </button>

            <button
              className="flex items-center justify-between w-fit text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              <span>Add Job </span>
            </button>

          </div>
          <button className='ml-32 lg:ml-96 lg:-mr-32' >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
          </button>
          <div className='md:hidden md:px-5 ' onClick={handleClick}>
            <span>{toggle ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" /></svg>}</span>
          </div>

        </div>

        <div className={toggle ? 'absolute z-10 p-4  bg-white w-5/6 px-8 ml-6 md:hidden' : 'hidden'}  >
          <ul>
            <li className='p-4 text-xl hover:bg-gray-100'>Home</li>
            <li className='p-4 text-xl hover:bg-gray-100'>About</li>
            <li className='p-4 text-xl hover:bg-gray-100'>Support</li>
            <li className='p-4 text-xl hover:bg-gray-100'>Platform</li>
            <li className='p-4 text-xl hover:bg-gray-100'>Pricing</li>
            <div className="flex flex-col my-4 gap-4">
              <button
                className="flex items-center justify-between  text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Log In </span>
                <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
              </button>

              <button
                className="flex items-center justify-between  text-xl px-6 py-3 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Add Job </span>
                <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
              </button>
            
            </div>
          </ul>
        </div>
      </div>
      




    </>
  )
}

export default Navbar