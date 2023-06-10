import React, { useState, useEffect } from 'react';
import { useSearchJobQuery } from '../../Service/jobApi';
import { Link } from 'react-router-dom';
import { BsFillBookmarkHeartFill, BsHandbag } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useGetAllJobQuery } from '../../Service/jobApi';

const Search = () => {
    const url = new URL(window.location.href);
    const jobTitle = url.searchParams.get('jobTitle');
    const location = url.searchParams.get('location');
    const searchResponse = useSearchJobQuery({ jobTitle, location });
    let searchJobs;
    if (searchResponse.status === 'fulfilled') {
        searchJobs = searchResponse.data.searchdJobs;
    }

    const [jobType, setJobType] = useState('');
    const [gender, setGender] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(null);

    const jobInfo = useGetAllJobQuery();

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleMinSalaryChange = (event) => {
        setMinSalary(event.target.value);
    };

    const handleMaxSalaryChange = (event) => {
        setMaxSalary(event.target.value);
    };

    useEffect(() => {
        if (jobInfo.status === 'fulfilled' && jobInfo.data && jobInfo.data.jobs) {
            setFilteredJobs(jobInfo.data.jobs);
        }
    }, [jobInfo]);
    console.log(filteredJobs)
    useEffect(() => {
        applyFilter();
    }, [jobType, gender, minSalary, maxSalary]);

    const applyFilter = () => {
        // Filter the job results based on selected values
        let filteredJobs = searchJobs;

        if (jobType !== '') {
            filteredJobs = filteredJobs.filter((job) => job.jobType === jobType);
        }

        if (gender !== '') {
            filteredJobs = filteredJobs.filter((job) => job.gender === gender);
        }

        if (minSalary !== '') {
            filteredJobs = filteredJobs.filter((job) => parseInt(job.minSalary) >= parseInt(minSalary));
        }

        if (maxSalary !== '') {
            filteredJobs = filteredJobs.filter((job) => parseInt(job.minSalary) <= parseInt(maxSalary));
        }

        setFilteredJobs(filteredJobs);
    };


    const handleApplyFilter = () => {
        applyFilter();
    };
    return (
        <>
            <div className='flex mt-32  md:ml-20'>
                <div className='fixed'>
                    <h1 className="text-xl font-bold">Job Filters</h1>

                    {/* Job Type Filter */}
                    <div className="mt-5">
                        <label className="">Job Type:</label>
                        <div className="flex gap-4 my-5">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value=""
                                    checked={jobType === ''}
                                    onChange={handleJobTypeChange}
                                    className="mr-2"
                                />
                                All
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="Internship"
                                    checked={jobType === 'Internship'}
                                    onChange={handleJobTypeChange}
                                    className="mr-2"
                                />
                                Internship
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="Full Time"
                                    checked={jobType === 'Full Time'}
                                    onChange={handleJobTypeChange}
                                    className="mr-2"
                                />
                                Full-Time
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="Part Time"
                                    checked={jobType === 'Part Time'}
                                    onChange={handleJobTypeChange}
                                    className="mr-2"
                                />
                                Part-Time
                            </label>
                        </div>
                    </div>

                    {/* Filter with gender */}
                    <div>
                        <label className="">Gender:</label>
                        <div className="flex gap-4 mt-5">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value=""
                                    checked={gender === ''}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                All
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="both"
                                    checked={gender === 'both'}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                Both
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Salary Range Filter */}
                    <div className="mt-5">
                        <div>
                            <div className='flex flex-col'>
                                <label className="">Minimum Salary:</label>
                                <input
                                    type="text"
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    value={minSalary}
                                    onChange={handleMinSalaryChange}
                                    className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col'>
                                <label className="">Maximum Salary:</label>
                                <input
                                    type="text"
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    value={maxSalary}
                                    onChange={handleMaxSalaryChange}
                                    className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col  absolute right-10">
                    {(filteredJobs || searchJobs) &&
                        (filteredJobs || searchJobs).map((job, index) => (
                            <Link to={`/jobdetails/${job._id}`} key={index}>
                                <div className="flex flex-col  items-center my-7">
                                    <div className="bg-zinc-50  flex flex-col items-center md:flex-row justify-center md:mr-72  p-2 overflow-hidden rounded-lg shadow-lg border-2 border-zinc-100 " style={{ minWidth: '890px' }}>
                                        <img
                                            className="pl-8 p-3 block mx-auto h-48 rounded-lg sm:mx-0 sm:shrink-0"
                                            src="image/heroImage.svg"
                                            alt="category Pic"
                                        />

                                        <div className="flex flex-col gap-y-5 items-center my-4 ">
                                            <div className="flex items-center justify-evenly gap-x-10">
                                                <h2 className="text-2xl  text-center">{job.jobTitle}</h2>
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
        </>
    );
};

export default Search;


