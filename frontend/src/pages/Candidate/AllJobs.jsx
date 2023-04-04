import React from 'react'
import { useGetAllJobQuery } from '../../Service/jobApi';
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const getAllJob = useGetAllJobQuery();
    let jobs = null
    if (getAllJob.data) {
        jobs = getAllJob.data.jobs
        console.log("All Jobs", jobs)
        
    } else {
        console.log("Jobs are not found")
    }
    console.log("All Jobs", jobs)


    return (
        <>
            <div>This is Nepal</div>


            <div className="grid grid-cols-2 gap-x-28 ml-1.5">

                {
                    jobs && jobs.map((job) => (
                        
                        <Link to={`/jobdetails/${job._id}`}>
                            <div>{job._id}</div>
                            <div key={job.id}>
                                <div className="bg-gray-100  mb-10 ">
                                    <div className='bg-zinc-100 w-fit rounded-lg   flex justify-between'>
                                        <img className=" pl-8 p-3 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={job.image} alt="category Pic" />
                                        <div>
                                            <div className='flex justify-center text-gray-600 -ml-3'>
                                                <h2 className='pr-8 p-3 mt-6'>{job.jobTitle}</h2>
                                                <p className='ml-40 mt-10'>< BsFillBookmarkHeartFill /></p>
                                            </div>
                                            <div className='flex pb-4 gap-x-5 py-2 text-xs text-gray-600'>
                                                <BsHandbag /> <p className='-mt-0.5'>{job.category}</p>
                                                <HiOutlineLocationMarker /> <p className='-mt-0.5'>{job.location}</p>
                                                <GiMoneyStack /> <p className='-mt-0.5'>{job.salary}</p>
                                            </div>
                                        </div>
                                        <div>{job.companyName} {job.jobTitle}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>





        </>
    )
}

export default AllJobs