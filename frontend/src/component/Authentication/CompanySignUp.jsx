import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
const CompnaySignUp = () => {

    const [isChecked, setIsChecked] = useState(true);
    const handleChecked = event => {
        if (event.target.checked) {
            console.log('Checkbox is checked');
            console.log("checked",isChecked)
        } else {
            console.log(' Checkbox is NOT checked');
            console.log("not checked", isChecked)
        }
        setIsChecked(current => !current);
    };

    const [user, setUser] = useState({
        fullName: "", email: "", password: "", passwordConfirmation: "", document: "", termCondition: "", role: "company"
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log("This is user",user);
    }

    const postData = async (e) => {
        e.preventDefault()
        console.log("hemantbdht", e);
        try {
            await axios.post("http://localhost:3000/api/user/register", user)

        } catch (error) {
            console.log(error);

        }

    }
    return (
        <>
            <form className="mt-4  ">
                {/* login form fields */}
                <div className='flex'>
                    <div className="px-7 my-5">
                        <label htmlFor="fullName" className="block mb-3">Company Name</label>
                        <input onChange={handleInputs} type="text" id="fullName" name="fullName" className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 " placeholder="Enter Oragnization Name..." required />
                    </div>

                    <div className="px-7 my-5">
                        <label htmlFor="email" className="block mb-3">Email</label>
                        <input onChange={handleInputs} type="email" id="email" name='email' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 " placeholder="Enter Email..." required />
                    </div>
                </div>

                <div className='flex'>

                    <div className="px-7 my-5 ">
                        <label htmlFor="password" className="block mb-3">Password</label>
                        <input onChange={handleInputs} type="password" id="password" name='password' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 " placeholder="Enter Password ..." required />
                    </div>

                    <div className="px-7 my-5">
                        <label htmlFor="passwordConfirmation" className="block mb-3">Confirm Password</label>
                        <input onChange={handleInputs} type="password" id="passwordConfirmation" name='passwordConfirmation' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 " placeholder="Enter Confirm Passwor..." required />
                    </div>
                </div>

                <div className="ml-24">
                    <label htmlFor="document" className="block  mb-3">Document</label>
                    <input onChange={handleInputs} type="file" id="document" name='document' className="w-4/5  rounded-md  border  text-base px-2 py-1 leading-10" placeholder="Enter Password..." required />
                </div>

                <div className="mt-3 md:flex md:justify-between md:items-center">
                    <div className="px-8 ">
                        <input type="checkbox" id='termCondition' name='termCondition'

                            value={isChecked}
                            onChange={(event) => {
                                handleInputs(event);
                                handleChecked(event);
                            }}
                        />
                        <label className='ml-4 text-base'>You accept our Terms and Conditions and Privacy Policy</label>
                    </div>
                </div>
                <div className="ml-20 py-6">
                    <input type="submit" value="Sign Up" name='signup' id='signup' className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-4/5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10 " onClick={postData} />
                </div>
            </form>
            <div className=" grid grid-cols-3 items-center text-gray-400">
                <hr className='border-gray-400' />
                <p className='text-center'>OR</p>
                <hr className='border-gray-400' />
            </div>
            <div className="ml-20 py-6">
                <button className="  bg-gray-400 border  py-2 w-4/5 rounded-xl hover:bg-transparent leading-10 flex justify-center items-center text-sm gap-3">  <FcGoogle size={25} />Login with google</button>
            </div>

        </>
    )
}

export default CompnaySignUp