import React, { useState } from "react";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";
import AdminSidebar from "../../component/Admin/AdminSidebar";
import { useAddJobMutation } from "../../Service/jobApi";
const AddJob = () => {
  const [addJob, { isLoading }] = useAddJobMutation();

  // state variabel for the Image and video:
  // let id = "6464a66535a735838eb47a4a";

  const [job, setJob] = useState({
    jobTitle: "",
    jobDescription: "",
    KeyResponsibilities: "",
    requiredSkill: "",
    jobCategory: "",
    jobType: "",
    gender: "",
    salaryType: "",
    minSalary: "",
    maxSalary: "",
    qualification: "",
    experience: "",
    location: "",
    forEnquiry: "",
    deadlineDate: "",
  });

  let name, value;
  const handleInputs = async (e) => {
    name = e.target.name;
    value = e.target.value;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // code to submit form data to server or handle form validation goes here

    const res = await addJob(job);
    // console.log(newJob.jobDetails);
    // if (res.data.success === true) {

    //   navigate("/home");
    // }
  };

  return (
    <>
      <div class="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
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
                  className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="basnethemant98@gmail.com"
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
                  className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="basnethemant98@gmail.com"
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
                  className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="basnethemant98@gmail.com"
                  required
                ></textarea>
              </div>

              {/* Key Responsibilities */}
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
                  className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="basnethemant98@gmail.com"
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
                    class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                  >
                    <option value="Information Technology" selected>
                      Information Technology
                    </option>
                    <option value="Engineering">Engineering </option>
                    <option
                      value="Healthcare and
                    Medical"
                    >
                      Healthcare and Medical{" "}
                    </option>

                    <option value=" Finance and Accounting">
                      {" "}
                      Finance and Accounting
                    </option>
                    <option value="Sales and Marketing ">
                      Sales and Marketing{" "}
                    </option>
                    <option value="Administrative and Office Support">
                      Administrative and Office Support
                    </option>
                    <option value="  Education and Training ">
                      {" "}
                      Education and Training{" "}
                    </option>
                    <option value=" Customer Service"> Customer Service</option>
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
                    class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                  >
                    <option selected>Choose a Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Temporary">Temporary</option>
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
                    class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                  >
                    <option selected>Choose a Gender</option>
                    <option value="Full Time">Male</option>
                    <option value="Internship">Female</option>
                    <option value="Internship">Both</option>
                  </select>
                </div>
                {/* Salary Type */}
                <div className="mb-6">
                  <label
                    htmlFor="salaryType"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Salary Type
                  </label>
                  <select
                    name="salaryType"
                    onChange={handleInputs}
                    id="salaryType"
                    class="shadow-lg  border border-gray-300 bg-white text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                  >
                    <option value="Annual" selected>
                      Annual
                    </option>
                    <option value="Monthly">Monthly</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Commission-based">Commission-based</option>
                  </select>
                </div>
                {/* Minimum Salary */}
                <div className="mb-6">
                  <label
                    htmlFor="minSalary"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Minimum Salary
                  </label>
                  <input
                    onChange={handleInputs}
                    type="number"
                    id="minSalary"
                    name="minSalary"
                    className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                    required
                  />
                </div>

                {/* Maximum Salary */}
                <div className="mb-6">
                  <label
                    htmlFor="maxSalary"
                    className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Maximum Salary
                  </label>
                  <input
                    onChange={handleInputs}
                    type="number"
                    id="maxSalary"
                    name="maxSalary"
                    className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                    required
                  />
                </div>

                {/* qualification */}
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
                    className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                    required
                  />
                </div>

                {/* experience*/}
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
                    className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
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
                    placeholder="Select a Deadline Date"
                    className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {/* location */}
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
                    className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="basnethemant98@gmail.com"
                    required
                  />
                </div>
              </div>
              {/* FOr More Enquiry */}
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
                  className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="basnethemant98@gmail.com"
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

export default AddJob;
