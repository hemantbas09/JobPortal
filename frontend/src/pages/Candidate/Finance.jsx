import React from 'react'
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useGetAllJobQuery } from "../../Service/jobApi";
import { Link } from "react-router-dom";
const Finance = () => {
  let jobs;
  const jobInfo = useGetAllJobQuery();
  if (jobInfo.status === "fulfilled") {
    jobs = jobInfo.data.jobs;
  }
  return (

    <div className="mt-32">

      <h1 className=" py-2 text-3xl text-indigo-500 font-medium">
        Featured Jobs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {jobs &&
          jobs
            .filter((job) => job.jobCategory === "Finance and Accounting")
            .map((job, index) => (
              <Link to={`/jobdetails/${job._id}`}>
                <div key={index} className="flex flex-col  items-center my-7">
                  <div className="bg-zinc-50 w-10/12 flex flex-col items-center md:flex-row justify-center  p-2 overflow-hidden rounded-lg shadow-lg border-2 border-zinc-100 ">
                    <img
                      className="pl-8 p-3 block mx-auto h-48 rounded-lg sm:mx-0 sm:shrink-0"
                      src="image/heroImage.svg"
                      alt="category Pic"
                    />

                    <div className="flex flex-col gap-y-5 items-center my-4 ">
                      <div className="flex items-center justify-evenly gap-x-10">
                        <h2 className="text-2xl font-bold text-center">
                          {job.jobTitle}
                        </h2>
                      </div>

                      <div className="flex flex-col md:flex-row md:space-x-5 items-center space-y-2 md:pr-6">
                        <div className="flex items-center gap-3">
                          <BsHandbag /> <p>{job.jobCategory}</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <HiOutlineLocationMarker /> <p>{job.location}</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <GiMoneyStack /> <p>Rs.{job.minSalary}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  )
}

export default Finance