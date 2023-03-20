import React, { useState } from 'react'
import { Login } from './Login'
import { NavLink } from 'react-router-dom';
import { AuthenticationForm } from './AuthenticationForm';
import { AiFillCloseCircle } from "react-icons/ai";

export const Mymodel = ({ closeModal }) => {
    const [showSignup, setShowSignup] = useState(false);
    const handleRegisterClick = () => {
    
        setShowSignup(true);
    }
    const handleLoginClick = () => {
    
        setShowSignup(false);
    }
    return (
        <>

            <div className="    opacity-90 fixed inset-0 z-50 overflow-auto 	 ">
                <div className="flex justify-center items-center   bg-white h-70  ">
                    <div className="h-fit w-fit m-3  shadow-lg shadow-cyan-500/50  rounded-md ">
                        <div className="flex justify-end">
                            <button className=' p-3 justify-end' onClick={() => { closeModal(false) }}><AiFillCloseCircle size={25} /></button>
                        </div>
                        {showSignup ? (
                            <AuthenticationForm onLoginClick={handleLoginClick} />
                            
                        ) : (
                            <Login onRegisterClick={handleRegisterClick} />
                        )}
                       



                    </div>
                </div>
            </div>

        </>
    )
}


