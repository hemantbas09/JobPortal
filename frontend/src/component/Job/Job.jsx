import { React, useEffect, useState } from "react";
import { BsFillBookmarkHeartFill, BsHandbag } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useGetAllJobQuery } from "../../Service/jobApi";
import { Link } from "react-router-dom";
const Job = () => {
  const [jobs, setJobs] = useState([]);

  const jobInfo = useGetAllJobQuery();
  useEffect(() => {
    if (jobInfo.status === "fulfilled") {
      const fetchedJobs = jobInfo.data.jobs;
      const shuffledJobs = shuffleJobs(fetchedJobs).slice(0, 8);
      setJobs(shuffledJobs);
    }
  }, [jobInfo]);

  const shuffleJobs = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <>
      {/* bg-zinc-100 p-6   w-fit rounded-lg shadow items-center  flex justify-center */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border-red-50 gap-y-10 gap-x-20">
        {jobs &&
          jobs.map((job, index) => (
            <Link to={`/jobdetails/${job._id}`}>
              <div key={index} className="flex flex-col  items-center my-4  ">
                <div className="bg-zinc-50 w-full flex flex-col items-center md:flex-row justify-center  p-2 overflow-hidden rounded-lg shadow-lg border-2 border-zinc-100">

                  <img
                    className="pl-8 p-3 block mx-auto h-36 rounded-lg sm:mx-0 sm:shrink-0"
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
                    <h1 className="bg-blue-300 p-2 rounded-lg mt-4">Feature Job</h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Job;
