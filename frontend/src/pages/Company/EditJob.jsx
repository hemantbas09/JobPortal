import React, { useState, useEffect } from "react";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";
import {
  useUpdateJobMutation,
  useGetJobByJobIdQuery,
} from "../../Service/jobApi";
import { useParams, useNavigate } from "react-router-dom";
import CompanyNavbar from "../../component/Navbar/CompanyNavbar";
import { toast } from "react-toastify";

// Component for editing a job
const EditJob = () => {
  const { id } = useParams();
  const jobInfo = useGetJobByJobIdQuery(id);
  const navigate = useNavigate();
  const [addJob, { isLoading }] = useUpdateJobMutation();

  const [job, setJob] = useState({
    jobTitle: "",
    jobDescription: "",
    KeyResponsibilities: "",
    requiredSkill: "",
    jobCategory: "",
    jobType: "",
    gender: "",
    minSalary: "",
    qualification: "",
    experience: "",
    location: "",
    forEnquiry: "",
    deadlineDate: "",
  });

  useEffect(() => {
    // Fetch job information and populate the form fields
    if (jobInfo.status === "fulfilled" && jobInfo.data) {
      const jobs = jobInfo.data.job;
      setJob({
        ...job,
        jobTitle: jobs.jobTitle || "",
        jobDescription: jobs.jobDescription || "",
        KeyResponsibilities: jobs.KeyResponsibilities || "",
        requiredSkill: jobs.requiredSkill || "",
        jobCategory: jobs.jobCategory || "",
        jobType: jobs.jobType || "",
        gender: jobs.gender || "",
        minSalary: jobs.minSalary || "",
        qualification: jobs.qualification || "",
        experience: jobs.experience || "",
        location: jobs.location || "",
        forEnquiry: jobs.forEnquiry || "",
        deadlineDate: jobs.deadlineDate || "",
      });
    }
  }, [jobInfo]);

  const formattedDeadlineDate = job.deadlineDate
    ? new Date(job.deadlineDate).toISOString().split("T")[0]
    : "";

  const handleInputs = (e) => {
    // Update the job state with the input values
    const name = e.target.name;
    const value = e.target.value;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the updated job details
    const res = await addJob({ id, job });
    console.log(res);
    console.log(res);
    if (res.data.success) {
      toast.success("Job Is Update Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: " text-xl",
      });
      jobInfo.refetch();
      navigate("/company/job");
    }
  };

  return (
    <>
      <div class="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        {/* Sidebar */}
        <div className="">
          <CompanyNavbar />

          <CompanySidebar />
        </div>

        {/* <Home /> */}
        <div className="  p-7 flex-1 mx-10  dark:bg-gray-800 h-screen left-30 ">
          <div className="max-w-6xl mx-auto bg-white md:p-16 ">
            <form onSubmit={handleSubmit}>
              {/* Job Title */}
              <div className="mb-6">
                <label
                  htmlFor="jobTitle"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  Job Title
                </label>
                <input
                  onChange={handleInputs}
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={job.jobTitle}
                  required
                />
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <label
                  htmlFor="jobDescription"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  Job Description
                </label>
                <textarea
                  onChange={handleInputs}
                  rows="8"
                  id="jobDescription"
                  name="jobDescription"
                  className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={job.jobDescription}
                  required
                ></textarea>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-6">
                <label
                  htmlFor="KeyResponsibilities"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  Key Responsibilities
                </label>
                <textarea
                  onChange={handleInputs}
                  rows="8"
                  id="KeyResponsibilities"
                  name="KeyResponsibilities"
                  className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={job.KeyResponsibilities}
                  required
                ></textarea>
              </div>

              {/* Required Skill */}
              <div className="mb-6">
                <label
                  htmlFor="requiredSkill"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  Required Skill
                </label>
                <textarea
                  onChange={handleInputs}
                  rows="8"
                  id="requiredSkill"
                  name="requiredSkill"
                  className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={job.requiredSkill}
                  required
                ></textarea>
              </div>

              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                {/* Job Category */}
                <div className="mb-6">
                  <label
                    htmlFor="jobCategory"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Job Category
                  </label>
                  <select
                    id="jobCategory"
                    name="jobCategory"
                    onChange={handleInputs}
                    required
                    className="shadow-lg border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={job.jobCategory} selected>
                      {job.jobCategory}
                    </option>
                    <option value="Information Technology and Engineering">
                      Information Technology and Engineering
                    </option>
                    <option value="Healthcare and Medical">
                      Healthcare and Medical
                    </option>
                    <option value="Finance and Accounting">
                      Finance and Accounting
                    </option>
                    <option value="Administrative and Support">
                      Administrative and Support
                    </option>
                    <option value="Education and Training">
                      Education and Training
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Job Type */}
                <div className="mb-6">
                  <label
                    htmlFor="jobType"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    onChange={handleInputs}
                    required
                    className="shadow-lg border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value="basnethemant98@gmail.com"
                  >
                    <option value={job.jobType} selected>
                      {job.jobType}
                    </option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Part Time">Part Time</option>
                  </select>
                </div>

                {/* Gender */}
                <div className="mb-6">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    onChange={handleInputs}
                    id="gender"
                    required
                    className="shadow-lg border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value="basnethemant98@gmail.com"
                  >
                    <option value={job.gender} selected>
                      {job.gender}
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                {/* Minimum Salary */}
                <div className="mb-6">
                  <label
                    htmlFor="minSalary"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Annual Salary
                  </label>
                  <input
                    onChange={handleInputs}
                    type="text"
                    id="minSalary"
                    name="minSalary"
                    className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={job.minSalary}
                    required
                  />
                </div>

                {/* Qualification */}
                <div className="mb-6">
                  <label
                    htmlFor="qualification"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Qualification
                  </label>
                  <input
                    onChange={handleInputs}
                    type="text"
                    id="qualification"
                    name="qualification"
                    className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={job.qualification}
                    required
                  />
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <label
                    htmlFor="experience"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Experience
                  </label>
                  <input
                    onChange={handleInputs}
                    type="number"
                    id="experience"
                    name="experience"
                    className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={job.experience}
                    required
                  />
                </div>

                {/* Deadline Date */}
                <div>
                  <label
                    htmlFor="deadlineDate"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Deadline Date
                  </label>
                  <input
                    name="deadlineDate"
                    onChange={handleInputs}
                    type="date"
                    value={formattedDeadlineDate}
                    className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label
                    htmlFor="location"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Location
                  </label>
                  <input
                    onChange={handleInputs}
                    type="text"
                    id="location"
                    name="location"
                    className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={job.location}
                    required
                  />
                </div>
              </div>

              {/* For More Enquiry */}
              <div className="mb-6">
                <label
                  htmlFor="forEnquiry"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  For Enquiry
                </label>
                <input
                  onChange={handleInputs}
                  type="text"
                  id="forEnquiry"
                  name="forEnquiry"
                  className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={job.forEnquiry}
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditJob;
