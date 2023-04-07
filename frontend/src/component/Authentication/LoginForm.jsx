import React from 'react'
import loginImage from '../../images/login.jpg'
const LoginForm = () => {
    return (
        <>
            <div class="bg-white dark:bg-gray-900 mt-28 mb-28 ">
                <div class="flex justify-center h-full">
                    <div className=" hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${loginImage})` }}>
                        {/* add any child elements here */}


                        <div class="flex items-center h-full px-20 ">

                        </div>
                    </div>

                    <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div class="flex-1">
                            <div class="text-center">
                                <p class=" text-xl mt-3 text-gray-500 dark:text-gray-300 font-bold">Sign in to access your account</p>
                            </div>

                            <div class="mt-8">
                                <form>
                                    <div>
                                        <label for="email" class="block mb-2 text-xl  text-gray-600 dark:text-gray-200 ">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="example@example.com" className="block  text-xl w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="mt-6">

                                        <label for="password" class="text-xl text-gray-600 dark:text-gray-200">Password</label>



                                        <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 text-xl py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="mt-6 mb-5">
                                        <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>
                                    </div>

                                </form>
                                <a href="#" class="  text-xl text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                <p class="mt-6 text-xl text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default LoginForm