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

            
                <div>
                    <AdminSidebar />
                </div>
                <div className="max-w-6xl mx-auto bg-white p-16 w-11/12">

                    <form onSubmit={handleSubmit}>
                        {/* Feature Image */}
                        <div class="items-center justify-center bg-grey-lighter ">
                            <label class="mb-6 w-full mt-8 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-base leading-normal">Select a Feature  Image</span>
                                <input type='file' class="hidden" />
                            </label>
                        </div>
                        {/* Job Title */}
                        <div className="mb-6">
                            <label htmlFor="jobTitle" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                            <input onChange={handleInputs} type="text" id="jobTitle" name="jobTitle" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                        </div>
                        {/* Job Description */}
                        <div className="mb-6">
                            <label htmlFor="jobDescription" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Description</label>
                            <textarea onChange={handleInputs} rows="8" id="jobDescription" name="jobDescription" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required ></textarea>
                        </div>
                        {/* Key Responsibilities */}
                        <div className="mb-6">
                            <label htmlFor="KeyResponsibilities" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Key Responsibilities</label>
                            <textarea onChange={handleInputs} rows="8" id="KeyResponsibilities" name="KeyResponsibilities" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required ></textarea>
                        </div>

                        <div className="grid gap-6 mb-6 lg:grid-cols-2">
                            {/* Job Category */}
                            <div className="mb-6">
                                <label htmlFor="jobCategory" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                                <select id="jobCategory" class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com">
                                    <option selected>Choose a Job Category</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Temporary">Temporary</option>
                                </select>
                            </div>

                            {/* Job Type */}
                            <div className="mb-6">
                                <label htmlFor="jobType" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                                <select id="jobType" class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com">
                                    <option selected>Choose a Job Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Temporary">Temporary</option>
                                </select>
                            </div>
                            {/* Gender */}
                            <div className="mb-6">
                                <label htmlFor="gender" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                                <select id="gender" class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com">
                                    <option selected>Choose a Gender</option>
                                    <option value="Full Time">Male</option>
                                    <option value="Internship">Female</option>
                                    <option value="Internship">Both</option>

                                </select>
                            </div>
                            {/* Salary Type */}
                            <div className="mb-6">
                                <label htmlFor="salaryType" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                                <select id="salaryType" class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com">
                                    <option selected>Choose a Salary Type</option>
                                    <option value="Full Time">Male</option>
                                    <option value="Internship">Female</option>
                                    <option value="Internship">Both</option>

                                </select>
                            </div>
                            {/* Minimum Salary */}
                            <div className="mb-6">
                                <label htmlFor="minSalary" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"> Minimum Salary</label>
                                <input onChange={handleInputs} type="number" id="minSalary" name="minSalary" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                            </div>

                            {/* Maximum Salaary */}
                            <div className="mb-6">
                                <label htmlFor="maxSalary" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Maximum Salary</label>
                                <input onChange={handleInputs} type="number" id="maxSalary" name="maxSalary" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                            </div>

                            {/* qualification */}
                            <div className="mb-6">
                                <label htmlFor="qualification" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Qualification</label>
                                <input onChange={handleInputs} type="text" id="qualification" name="qualification" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                            </div>

                            {/* experience*/}
                            <div className="mb-6">
                                <label htmlFor="experience" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Experience</label>
                                <input onChange={handleInputs} type="number" id="experience" name="experience" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                            </div>
                            {/* Deadline Date */}
                            <div>
                                <label htmlFor="deadlineDate" className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300' >Deadline Date</label>

                                <input type="date" placeholder="Select a Deadline Date" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {/* location */}
                            <div className="mb-6">
                                <label htmlFor="location" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Location</label>
                                <input onChange={handleInputs} type="text" id="location" name="location" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                            </div>


                            {/* For Images */}
                            <div class="items-center justify-center bg-grey-lighter ">
                                <label class="mb-6 w-full mt-8 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2 text-base leading-normal">Select  Images</span>
                                    <input type='file' class="hidden" />
                                </label>
                            </div>

                            {/* FOr Videos */}
                            <div class="items-center justify-center bg-grey-lighter ">
                                <label class="mb-6 w-full mt-8 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2 text-base leading-normal">Select videos</span>
                                    <input type='file' class="hidden" />
                                </label>
                            </div>

                        </div>
                        {/* FOr More Enquiry */}
                        <div className="mb-6">
                            <label htmlFor="forEnquiry" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">For Enquiry</label>
                            <input onChange={handleInputs} type="text" id="forEnquiry" name="forEnquiry" className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="basnethemant98@gmail.com" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>


                </div>

            </>

            )
}

            export default AddJob