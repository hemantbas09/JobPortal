import React, { useEffect, useState } from 'react'
import axios from "axios"
// import useHistory from 'react-router-dom'
import { FcGoogle } from "react-icons/fc"

const CandidateSignUp = () => {
    const [isChecked, setIsChecked] = useState(true);
    const handleChecked = event => {
        if (event.target.checked) {
            console.log('Checkbox is checked');
            console.log("checked", isChecked);
        } else {
            console.log(' Checkbox is NOT checked');
            console.log("not checked", isChecked);
        }
        setIsChecked(current => !current);
    };

    const [user, setUser] = useState({
        fullName: "", email: "", password: "", passwordConfirmation: "", termCondition: "", role: "user"
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log(user);

    }

    const postData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/api/user/register", user)
            console.log(res.data.message);

        } catch (error) {
            console.log(error)

        }

    }


    return (
        <>
            <form method='POST' className="mt-4 " id='signup-form'>

                {/* name and email of the candidate */}
                <div className='flex'>

                    {/* Full Name of the Candidate */}
                    <div className="px-7 my-5">
                        <label htmlFor="fullName" className="block mb-3">Full Name</label>
                        <input type="text" id="fullName" name='fullName' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 "
                            value={user.fullName}
                            onChange={handleInputs}
                            placeholder="Enter Full Name..." required
                        />
                    </div>

                    {/* Email of the Candidate */}
                    <div className="px-7 my-5">
                        <label htmlFor="email" className="block mb-3">Email</label>
                        <input type="email" id="email" name='email' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 "
                            value={user.email}
                            onChange={handleInputs}
                            placeholder="Enter Email..." required />
                    </div>
                </div>

                {/* password and confrim Password */}
                <div className='flex'>

                    {/* password */}
                    <div className="px-7 my-5">
                        <label htmlFor="password" className="block mb-3">Password</label>
                        <input type="password" id="password" name='password' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 "
                            value={user.password}
                            onChange={handleInputs}
                            placeholder="Enter Password..." required
                        />
                    </div>

                    {/* confirm password */}
                    <div className="px-7 my-5">
                        <label htmlFor="passwordConfirmation" className="block mb-3">Confirm Password</label>
                        <input type="password" id="passwordConfirmation" name='passwordConfirmation' className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 "
                            value={user.confirmPassword}
                            onChange={handleInputs}
                            placeholder="Enter Confirm Password..." required
                        />
                    </div>
                </div>

                {/* term and condition */}
                <div className="mt-3 md:flex md:justify-between md:items-center">
                    <div className="px-8">
                        <input type="checkbox" id='termCondition' name='termCondition'
                            value={isChecked}

                            onChange={(event) => {
                                handleChecked(event);
                                handleInputs(event);

                            }}
                        />
                        <label htmlFor='termCondition' className='ml-4'>You accept our Terms and Conditions and Privacy Policy</label>
                    </div>
                </div>

                {/* sign up button for candidate */}
                <div className="ml-20 py-6">
                    <input type="submit" value='Sign Up' name='signup' id='signup' className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-4/5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10"
                        onClick={postData}
                    />
                </div>
            </form>
            {/* Horizental line seperate Signup and signup with googel  */}
            <div className=" grid grid-cols-3 items-center text-gray-400">
                <hr className='border-gray-400' />
                <p className='text-center'>OR</p>
                <hr className='border-gray-400' />
            </div>

            {/* Sign up with google */}
            <div className="ml-20 py-6">
                <button className="  bg-gray-400 border  py-2 w-4/5 rounded-xl hover:bg-transparent leading-10 flex justify-center items-center text-sm gap-3">  <FcGoogle size={25} />SignUp with google</button>
            </div>


        </>
    )
}

export default CandidateSignUp