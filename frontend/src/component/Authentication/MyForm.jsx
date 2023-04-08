// import All
import { React, useState } from 'react'
import CompanySignUpForm from './CompanySignUpForm';
import CandidateSignUpForm from './CandidateSignUpForm';
import { Link } from 'react-router-dom';
const MyForm = () => {

    // create Intial state variable using useState Hook:
    const [isUserType, setIsUserType] = useState(false);

    // function to change the state of the user type and to Open the candidate company form:
    const openCompany = () => {
        setIsUserType(true);
    };

    // function to change the state of the user type and to Open the candidate user form:
    const openCandidate = () => {
        setIsUserType(false);
    };

    return (
        <>
            <section className=" dark:bg-gray-900  ">
                <div className="flex justify-evenly min-h-screen mt-4 ">
                    <div className="mt-40 hidden bg-cover object-contain lg:block lg:w-1/2 lg:h-screen" style={{ backgroundImage: "url('work.jpg')", height: 400 }}>

                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>


                            {/* Select the type of the Account */}
                            <div className="mt-6">
                                <h1 className="text-gray-500 text-xl dark:text-gray-300">Select type of account</h1>

                                <div className=" mt-10 md:flex md:items-center md:-mx-2  ">


                                    <button style={{ marginTop: 10 }} onClick={openCandidate} className={`  ${isUserType ? "text-blue-500 border border-blue-500" : "text-white bg-blue-500 "} flex justify-center w-full px-6 py-3   rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none `}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>

                                        <span className="mx-2 text-xl">
                                            JobSeeker
                                        </span>
                                    </button>
                                    <button style={{ marginTop: 10 }} onClick={openCompany} className={` ${isUserType ? "text-white bg-blue-500 " : " text-blue-500 border border-blue-500"} flex justify-center w-full px-6 py-3    rounded-lg md:w-auto md:mx-2  focus:outline-none `}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>

                                        <span className="mx-2 text-xl">
                                            Company
                                        </span>
                                    </button>
                                </div>

                            </div>
                            {/* change the candiadte form and company sign of Form: */}
                            {
                                isUserType ? <CompanySignUpForm /> : <CandidateSignUpForm />
                            }
                            <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-400">or sign up with Google</p>

                            <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>

                                <span className="mx-2 text-xl">Sign up with Google</span>
                            </a>

                            <div className="mt-6 text-center text-xl  ">
                                Already Account ?
                                <div href="#" className="text-xl text-blue-500 hover:underline dark:text-blue-400">
                                    <Link to={'/login'}> Login </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MyForm