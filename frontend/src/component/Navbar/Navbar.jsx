import React, { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Mymodel } from '../Authentication/MyModel';
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  return (
    <>
      <div className=' h-[80px] bg-white border-b   mx-40'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
          <span className='px-3'><img className='w-52 -mt-5' src="image/logo.svg" alt="logo" /> </span>
          <div className='hidden md:flex items-center '>
            <ul className='flex gap-4'>
              <li className='hover:text-blue-600/100'>Home</li>
              <li className='hover:text-blue-600/100'>About</li>
              <li className='hover:text-blue-600/100'>Support</li>
              <li className='hover:text-blue-600/100'>Platform</li>
              <li className='hover:text-blue-600/100'>Pricing</li>

            </ul>
          </div>

          <div className='hidden md:flex'>
            <button onClick={() => { setOpenModal(true) }} className='mx-2.5 flex justify-between items center gap-2 px-5 rounded-lg py-2.5 text-white bg-[rgb(65,88,208)] font-bold '>
              <FiLogIn size={25} />
              Login</button>
            <button className='mx-2.5 px-5 rounded-lg py-2.5 text-white bg-[rgb(65,88,208)] font-bold' onClick={() => { setOpenModal(true) }}>Add Job</button>
            < IoMdNotificationsOutline size={45} />
          </div>

          <div className='md:hidden px-5' onClick={handleClick}>
            <span>{toggle ? <IoMdNotificationsOutline size={25} /> : <FiLogIn size={25} />}</span>

          </div>

        </div>

        <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}  >
          <ul>
            <li className='p-4 hover:bg-gray-100'>Home</li>
            <li className='p-4 hover:bg-gray-100'>About</li>
            <li className='p-4 hover:bg-gray-100'>Support</li>
            <li className='p-4 hover:bg-gray-100'>Platform</li>
            <li className='p-4 hover:bg-gray-100'>Pricing</li>
            <div className="flex flex-col my-4 gap-4">
              < IoMdNotificationsOutline size={45} />
              <button className='mx-2.5 flex justify-center   gap-3 px-5 rounded-lg py-2.5 text-white bg-[rgb(65,88,208)] font-bold ' onClick={() => { setOpenModal(true) }}>
                <FiLogIn size={25} />
                Login</button>
              <button className='mx-2.5 px-5 rounded-lg py-2.5 text-white bg-[rgb(65,88,208)] font-bold' onClick={() => { setOpenModal(true) }}>Add Job</button>

            </div>
          </ul>
        </div>


      </div>
      {openModal && <Mymodel closeModal={setOpenModal} />}
    </>
  )
}

export default Navbar