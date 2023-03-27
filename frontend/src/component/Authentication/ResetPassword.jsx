import React, { useState } from 'react';

import { useNavigate,useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../../Service/userAuth';
const ResetPassword = () => {
    const [resetPassword] = useResetPasswordMutation();
    const{id,token}=useParams();
    const [user, setUser] = useState({
        password: "", passwordConfirmation: ""
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
        if (user.password && user.passwordConfirmation) {
            console.log('first')
            const res = await resetPassword({user,id,token});
            console.log('Second1', res)
          
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

            <div className='flex justify-center items-center bg-zinc-100'>
                <div className="  w-fit bg-white my-10	 ">


                    <h1 className="text-2xl font-normal p-7"> Reset Password</h1>
                    <form action="" method='POSt' onSubmit={handleSubmit} >
                        {/* Email */}
                        <div className="px-7">
                            <label htmlFor="password" className="block  mb-3">New Password</label>
                            <input onChange={handleInputs} type="password" id="password" name='password' className="focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10" placeholder="Enter Password..." required />
                        </div>

                        {/* Password */}
                        <div className="px-7">
                            <label htmlFor="passwordConfirmation" className="block  mb-3">Confirm Password</label>
                            <input onChange={handleInputs} type="passwordConfirmation" id="passwordConfirmation" name='passwordConfirmation' className="focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10" placeholder="Enter Password..." required />
                        </div>



                        {/* Login Button */}
                        <div className="ml-20 py-6">
                            <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-4/5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10">Login</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default ResetPassword
