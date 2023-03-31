import { React, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { useRegisterUserMutation } from '../../Service/userAuth'
import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../Service/localStorageService';


const CompanySignUpForm = () => {
    const [showPassword, setshowPassword] = useState(true);
    const navigate = useNavigate();
    const [registerUser, { isLoading }] = useRegisterUserMutation();



    const [user, setUser] = useState({
        fullName: "", email: "", password: "", passwordConfirmation: "", document: "", role: "company"
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log("This is user", user);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // code to submit form data to server or handle form validation goes here
        if (user.fullName && user.email && user.password && user.passwordConfirmation && user.document) {
            console.log('first')
            const res = await registerUser(user);
            console.log('Second', res)
            if (res.data.success === true) {
                console.log("Pitai Khanxas")
                storeToken(res.data.token)
                navigate("/home")
            }
        } else {
            console.log("Please add all input")
        }
    };
    return (
        <>
            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" method='POST' onSubmit={handleSubmit} enctype='multipart/form-data' action="/uploadmultiple" >

                <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Company Name:</label>
                    <input id="fullName" name="fullName" type="text" placeholder="Apple" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

                        onChange={handleInputs}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input email="email" name="email" type="email" placeholder="company@gmail.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={handleInputs}
                        required
                    />
                </div>


                <div className="relative">
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <div className="relative">
                        <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

                            onChange={handleInputs}
                            required
                        />
                        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
                            event.preventDefault();
                            setshowPassword(!showPassword);
                        }}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                </div>


                <div className="relative">
                    <label htmlFor="passwordConfirmation" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                    <div className="relative">
                        <input id="passwordConfirmation" name="passwordConfirmation" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={handleInputs}
                            required
                        />
                        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3   text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" onClick={(event) => {
                            event.preventDefault();
                            setshowPassword(!showPassword);
                        }}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                </div>


                <br />
                <div className='md:-ml-72'>
                    <label htmlFor="document" class="block text-sm text-gray-500 dark:text-gray-300">Company Document</label>

                    <label htmlFor="document" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>

                        <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Upload Document</h2>

                        <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400"> { user.document ?  user.document  : "Upload your compeny Register Document in pdf"} </p>

                        <input id="document" type="file" class="hidden" name="document"
                            onChange={handleInputs}
                            required />
                       
                        <span class="sr-only">Choose file</span>
                    </label>



                </div>

                <button
                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Sign Up </span>


                    <IoIosArrowDropright className="w-5 h-5 rtl:-scale-x-100" size={20} />
                </button>
            </form>

        </>
    )
}

export default CompanySignUpForm