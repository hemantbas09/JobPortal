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

            {/* <div classNameName='flex relative '>
                <div>
                    <AdminSidebar />
                </div>

                <div classNameName="fixed overflow-y-scroll top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

                    <h1 classNameName="text-2xl font-semibold ">Post New Job</h1>

                    <div classNameName='bg-white w-11/12 m-10 overflow-y-auto '>
                        <form action="" method='POST' classNameName='m-10' onSubmit={handleSubmit} >

                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="featureImages">Featured Image</label> <br />
                                <input onChange={handleInputs} id="featureImages" name='featureImages' classNameName=' border p-2 m-3 bg-zinc-100' type="file" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="jobTitle">Job Title</label> <br />
                                <input onChange={handleInputs} id="jobTitle" name='jobTitle' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="jobDescription">Job Description</label> <br />
                                <textarea onChange={handleInputs} id='jobDescription' name='jobDescription' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' rows="8" required></textarea>

                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="jobCategory">jobCategory</label> <br />
                                <input onChange={handleInputs} id="jobCategory" name='jobCategory' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="jobType">jobType</label> <br />
                                <input onChange={handleInputs} id="jobType" name='jobType' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>

                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="gender">Gender</label> <br />
                                <input onChange={handleInputs} id="gender" name='gender' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="salaryType">Salary Type</label> <br />
                                <input onChange={handleInputs} id="salaryType" name='salaryType' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="minSalary">Minimum Salary</label> <br />
                                <input onChange={handleInputs} id="minSalary" name='minSalary' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="maxSalary">Maximum Salary</label> <br />
                                <input onChange={handleInputs} id="maxSalary" name='maxSalary' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="qualification">Qualification</label> <br />
                                <input onChange={handleInputs} id="qualification" name='qualification' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="experience">Experience</label> <br />
                                <input onChange={handleInputs} id="experience" name='experience' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="location">Location</label> <br />
                                <input onChange={handleInputs} id="location" name='location' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="deadlineDate">Applications Deadline Date</label> <br />
                                <input onChange={handleInputs} id="deadlineDate" name='deadlineDate' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="images">images</label> <br />
                                <input onChange={handleInputs} id="images" name='images' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="file" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="videos">videos</label> <br />
                                <input onChange={handleInputs} id="videos" name='videos' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="file" required />
                            </div>
                            <div classNameName='p-3 '>
                                <label classNameName='p-3' htmlFor="forEnquiry">For forEnquiry</label> <br />
                                <input onChange={handleInputs} id="forEnquiry" name='forEnquiry' classNameName='border p-4 m-3 w-11/12 bg-zinc-100 focus:bg-white focus:border-indigo-700' type="text" required />
                            </div>

                            <div classNameName="ml-20 py-6">
                                <button type="submit" classNameName="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-4/5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold leading-10">Login</button>
                            </div>


                        </form>

                    </div>


                </div>



            </div> */}

           
            <div className="max-w-6xl mx-auto bg-white p-16 w-11/12">

                <form>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label for="first_name" className=" block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                        </div>
                        <div>
                            <label for="last_name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                        </div>
                        <div>
                            <label for="company" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Company</label>
                            <input type="text" id="company" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
                        </div>
                        <div>
                            <label for="phone" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                        </div>
                        <div>
                            <label for="website" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Website URL</label>
                            <input type="url" id="website" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
                        </div>
                        <div>
                            <label for="visitors" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
                            <input type="number" id="visitors" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <input type="email" id="email" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div className="mb-6">
                        <label for="confirm_password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                        <input type="password" id="confirm_password" className="bg-gray-50  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50  focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-4y-800" required/>
                        </div>
                        <label for="remember" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

                <p className="mt-5">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
                    more by going to the official <a className="text-blue-600 hover:underline"
                        href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite
                        Documentation</a>.
                </p>
            </div>

        </>

    )
}

export default AddJob