import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiFillEnvironment } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = ({ Menus }) => {
    const [open, setOpen] = useState(true);

    return (
        <>




            <div class="fixed flex flex-col top-10 left-0 w-14 hover:w-64 md:w-64 bg-gray-50 dark:bg-gray-800  text-white transition-all duration-300 border-none z-10 sidebar h-screen">
                <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul class="flex flex-col py-4 space-y-1">
                        <div class="  flex flex-col items-center mt-6 -mx-2 ">
                            <img class="hidden md:block object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
                                <h4 class="hidden md:block mx-2 text-xl mt-2 font-medium text-gray-800 dark:text-gray-200">Hemant Basnet</h4>
                                <p class="hidden md:block mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">hemantbasnet61@gmail.com</p>
                        </div>
                        <hr  />
                        {
                            Menus.map((Menu, index) => (

                                < li key={index}>
                                    <Link to={Menu.link} className=" mt-14 relative flex flex-row text-black bg:text-white items-center h-11 focus:outline-none hover:bg-blue-500 dark:hover:bg-gray-600  border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 hover:text-white">
                                        <span class="inline-flex justify-center items-center ml-4 mr-3  ">
                                            {Menu.src}
                                        </span>
                                        <span class="ml-2 text-xl tracking-wide truncate font-bold ">{Menu.title}</span>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div >



        </>


    )
}

export default Sidebar