import React, { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiFillEnvironment } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = ({ Menus }) => {
    const [open, setOpen] = useState(true);

    return (
        <>

            
                <div
                    className={` ${open ? "w-72" : "w-20 "
                        }  bg-white h-fit p-5  pt-8 relative duration-300`}
                >
                    <BsArrowLeftShort className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} size={30} />




                    <div className="flex gap-x-4 items-center">
                        <img
                            src="/vite.svg"
                            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                }`}
                        />
                        <h1
                            className={`text-gray-600 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Designer
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                            
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-zinc-100 text-gray-600 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-6" : "mt-2"} ${index === 0 && 'bg-zinc-100'} `}
                            >
                                <Link to={Menu.link}>{Menu.src}</Link>
                                
                                
                                <a href="#">

                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    <Link to={Menu.link}>{Menu.title}</Link>
                                        
                                    </span>
                                </a>

                            </li>
                        ))}
                    </ul>
                </div>
               
           

        </>


    )
}

export default Sidebar