import React, { useState } from 'react';

import AdminSidebar from '../../component/Admin/AdminSidebar';
import { useAddJobMutation } from '../../Service/jobApi';
const AddJob = () => {
    const [addJob, { isLoading }] = useAddJobMutation();

    const [job, setJob] = useState({
        featureImages: "", jobTitle: "",
        jobDescription: "", jobCategory: "",
        jobType: "", gender: "", salaryType: "",
        minSalary: "", maxSalary: "",
        qualification: "", experience: "",
        location: "", images: "", videos: "", forEnquiry: "", deadlineDate: ""
    })

    let name, value;
    const handleInputs = async (e) => {
        name = e.target.name;
        value = e.target.value
        setJob({ ...job, [name]: value })
        console.log('name', job)



    }
    console.log(job)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // code to submit form data to server or handle form validation goes here
        if (featureImages && jobTitle && jobDescription && jobCategory && jobType && gender && salaryType &&
            minSalary && maxSalary && qualification && experience && location && deadlineDate &&
            images && videos && forEnquiry) {
            console.log('first')
            const res = await addJob(job);
            console.log('Second', res)
            if (res.data.success === true) {
                console.log("Pitai Khanxas")
                navigate("/home")
            }
        } else {
            console.log("Please add all input")
        }
    };

    return (
        <>

            <div className='flex relative '>
                <div>
                    <AdminSidebar />
                </div>

                <div className="  right-0 p-7 flex-1 mx-32  bg-gray-50 h-screen left-30 ">

                    <h1 className="text-2xl font-semibold ">Post New Job</h1>

                    <div className='bg-white  m-10 overflow-y-auto '>
                        <form action="" method='POST' className='m-10' onSubmit={handleSubmit} >



                            <div class="grid gap-10 mb-6 lg:grid-cols-2 ">
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl p-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl p-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl p-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl p-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl p-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl p-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                            </div>



                            <div className='p-3 '>
                                <label className='p-3' htmlFor="featureImages">Featured Image</label> <br />
                                <input onChange={handleInputs} id="featureImages" name='featureImages' className=' border p-2 m-3 bg-zinc-100' type="file" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="jobTitle">Job Title</label> <br />
                                <input onChange={handleInputs} id="jobTitle" name='jobTitle' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="jobDescription">Job Description</label> <br />
                                <textarea onChange={handleInputs} id='jobDescription' name='jobDescription' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' rows="8" required></textarea>

                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="jobCategory">jobCategory</label> <br />
                                <input onChange={handleInputs} id="jobCategory" name='jobCategory' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="jobType">jobType</label> <br />
                                <input onChange={handleInputs} id="jobType" name='jobType' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>

                            <div className='p-3 '>
                                <label className='p-3' htmlFor="gender">Gender</label> <br />
                                <input onChange={handleInputs} id="gender" name='gender' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="salaryType">Salary Type</label> <br />
                                <input onChange={handleInputs} id="salaryType" name='salaryType' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="minSalary">Minimum Salary</label> <br />
                                <input onChange={handleInputs} id="minSalary" name='minSalary' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="maxSalary">Maximum Salary</label> <br />
                                <input onChange={handleInputs} id="maxSalary" name='maxSalary' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="qualification">Qualification</label> <br />
                                <input onChange={handleInputs} id="qualification" name='qualification' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="experience">Experience</label> <br />
                                <input onChange={handleInputs} id="experience" name='experience' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="location">Location</label> <br />
                                <input onChange={handleInputs} id="location" name='location' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="deadlineDate">Applications Deadline Date</label> <br />
                                <input onChange={handleInputs} id="deadlineDate" name='deadlineDate' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="images">images</label> <br />
                                <input onChange={handleInputs} id="images" name='images' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="file" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="videos">videos</label> <br />
                                <input onChange={handleInputs} id="videos" name='videos' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="file" required />
                            </div>
                            <div className='p-3 '>
                                <label className='p-3' htmlFor="forEnquiry">For forEnquiry</label> <br />
                                <input onChange={handleInputs} id="forEnquiry" name='forEnquiry' className='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>

                            <div className="ml-20 py-6">
                                <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-4/5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10">Login</button>
                            </div>


                        </form>

                    </div>


                </div>



            </div>


            {/* <div class="max-w-2xl mx-auto bg-white p-16">

                <form>
                    <div class="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                        </div>
                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                        </div>
                        <div>
                            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
                            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
                        </div>
                        <div>
                            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
                            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div class="mb-6">
                        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

                <p class="mt-5">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
                    more by going to the official <a class="text-blue-600 hover:underline"
                        href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite
                        Documentation</a>.
                </p>
            </div> */}

        </>

    )
}

export default AddJob