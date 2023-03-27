import React, { useState } from 'react';
import { useSendPasswordResetEmailMutation } from '../../Service/userAuth'
const SendPasswordResetEmail = () => {
    const [ sendPasswordResetEmail,{isLoading}] = useSendPasswordResetEmailMutation();
    const [user, setUser] = useState({
        email: ""
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
        if ( user.email) {
            console.log('first')
            const res = await sendPasswordResetEmail(user);
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
        <div className='flex justify-center items-center bg-zinc-100'>
                <div className="  w-fit bg-white my-10	 ">


                    <h1 className="text-2xl font-normal p-7"> Reset</h1>
                    <form action="" method='POSt' onSubmit={handleSubmit} >
                        {/* Email */}
                        <div className="px-7 my-5">
                            <label htmlFor="email" className="block mb-3">Email</label>
                            <input onChange={handleInputs} type="email" id="email" name="email" className=" focus:bg-white rounded-md bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 leading-10 " placeholder="Enter Username..." required />
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

export default SendPasswordResetEmail