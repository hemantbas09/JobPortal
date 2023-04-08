import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../Service/userAuth';
import Button from '../Comman/Button';

export const Login = ({ onRegisterClick }) => {
    const [loginUser, { isLoading }] = useLoginUserMutation();
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "", password: ""
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // code to submit form data to server or handle form validation goes here
        if (user.email && user.password) {
            const res = await loginUser(user);
            console.log('Second', res)
            if (res.data.success === true) {
                console.log("Pitai Khanxas")
                // storeToken(res.data.token)
                navigate("/home")
            }
        } else {
            console.log("Please add all input")
        }
    };


    return (
        <>
    

               
                <div className='flex justify-evenly bg-zinc-100'>
                    <div>
                        <Button buttonName="Hemant"/>
                        <img src="" alt="" />
                        <h1>Hemant</h1>
                    </div>
                    <div className="  w-fit bg-white my-10	 ">


                        <h1 className="text-2xl font-normal p-7"> Login to Ugi</h1>
                        <form action="" method='POSt' onSubmit={handleSubmit} >
                            {/* Email */}
                            <div className="px-7 my-5">
                                <label htmlFor="email" className="block mb-3">Email</label>
                                <input onChange={handleInputs} type="email" id="email" name="email" className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 " placeholder="Enter Username..." required />
                            </div>

                            {/* Password */}
                            <div className="px-7">
                                <label htmlFor="password" className="block  mb-3">Password</label>
                                <input onChange={handleInputs} type="password" id="password" name='password' className="focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10" placeholder="Enter Password..." required />
                            </div>

                            {/* Remember me and Forget password */}
                            <div className="mt-3 md:flex md:justify-between md:items-center">
                                <div className="px-8">
                                    <input type="checkbox" id='checkbox' />
                                    <label>Remember Me</label>
                                </div>

                                <div>
                                    <a href="#" className="p-5">Forgot Password?</a>
                                </div>
                            </div>

                            {/* Login Button */}
                            <div className="ml-20 py-6">
                                <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-4/5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10">Login</button>
                            </div>
                        </form>
                        {/* horizental lne between login button and login with google */}
                        <div className=" grid grid-cols-3 items-center text-gray-400">
                            <hr className='border-gray-400' />
                            <p className='text-center'>OR</p>
                            <hr className='border-gray-400' />
                        </div>

                        {/* Login with google and link for redirect to register  */}
                        <div className="ml-20 py-6">
                            <button className="  bg-gray-400 border  py-2 w-4/5 rounded-xl hover:bg-transparent leading-10 flex justify-center items-center text-sm gap-3">  <FcGoogle size={25} />Login with google</button>
                            <p className='p-4 mr-20 flex justify-center items-center'>Don't you have an account?<NavLink to="#" onClick={onRegisterClick} >Register</NavLink> </p>
                        </div>
                    </div>
                </div>

          



        </>
    )
}

