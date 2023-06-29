import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ Menus }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div class=" fixed overflow-auto flex flex-col  left-0 w-14 hover:w-64 md:w-64 bg-gray-50 dark:bg-gray-800  text-white transition-all duration-300 border-none z-10 sidebar h-5/6  ">
        <div class="overflow-y-auto overflow-hidden flex flex-col justify-between flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <div class="  flex flex-col items-center mt-6 -mx-2 ">
              <img
                class="opacity md:block object-cover w-10 h-10 md:w-24 md:h-24 mx-2 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
              <h4 class="hidden md:block mx-2 text-xl mt-2 font-medium text-gray-800 dark:text-gray-200">
                Hemant Basnet
              </h4>
              <p class="hidden md:block mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                hemantbasnet61@gmail.com
              </p>
            </div>
            <hr />
            {Menus.map((Menu, index) => (
              <li key={index}>
                <Link
                  to={Menu.link}
                  className="mt-14 py-8 relative flex flex-row text-black items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 border-l-4 border-transparent dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4 mr-3">
                    <img className="h-8 w-8" src={Menu.src} alt="" />
                  </span>
                  <span className="ml-2 font-normal text-xl leading-5 text-gray-500 ">
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
