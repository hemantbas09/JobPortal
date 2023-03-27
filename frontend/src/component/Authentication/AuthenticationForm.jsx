import React, { useState } from 'react'
// import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import CompnaySignUp from './CompanySignUp';
import CandidateSignUp from './CandidateSignUp';
export const AuthenticationForm = ({ onLoginClick }) => {

    const [isLoginOpen, setIsLoginOpen] = useState(true);

    const openLogin = () => {
        setIsLoginOpen(true);
    };

    const openSignup = () => {
        setIsLoginOpen(false);
    };
    return (
        <>
            <div className="flex justify-center items-center bg-zinc-100   ">
                <div className=" w-fit   rounded-md   ">  {/* overflow-y-auto h-96 */}

                    <div className=" w-fit bg-white my-10 ">
                        <div className="flex justify-center gap-10 rounded-lg mt-6">

                            <button
                                className={`${isLoginOpen ? "bg-blue-500 text-white" : "text-blue-500"
                                    } font-bold py-3 w-1/ px-4 rounded-lg focus:outline-none focus:shadow-outline mt-10`}
                                onClick={openLogin}
                            >
                                Candidate
                                <hr />
                                <p className='font-medium text-xs'>I want to attract the best talent</p>
                            </button>
                            <button
                                className={`${isLoginOpen ? "text-green-500" : "bg-green-500 text-white"
                                    } font-bold py-3 px-4 w-1/3 rounded-lg focus:outline-none focus:shadow-outline mt-10`}
                                onClick={openSignup}
                            >
                                Company
                                <hr />
                                <p className='font-medium text-xs'>I want to attract the best talent</p>
                            </button>
                        </div>

                        {isLoginOpen ?
                            <div>
                                < CandidateSignUp />
                                <p className='p-4 mr-20 flex justify-center items-center'>Already have an account?
                                    <NavLink to="#" onClick={onLoginClick}>Login</NavLink>
                                </p>
                            </div>
                            :
                            <div>
                                <CompnaySignUp />
                                <p className='p-4 mr-20 flex justify-center items-center'>Already have an account?
                                    <NavLink to="#" onClick={onLoginClick}>Login</NavLink>
                                </p>
                            </div>}
                    </div>
                </div>
            </div>

        </>
    )
}