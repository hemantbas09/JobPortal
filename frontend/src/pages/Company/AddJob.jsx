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
        location: "", images: "", videos: "", forEnquiry: "",deadlineDate: ""
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

                <div className="fixed overflow-y-scroll top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

                    <h1 className="text-2xl font-semibold ">Post New Job</h1>

                    <div className='bg-white w-11/12 m-10 overflow-y-auto '>
                        <form action="" method='POST' className='m-10' onSubmit={handleSubmit} >

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


        </>

    )
}

export default AddJob