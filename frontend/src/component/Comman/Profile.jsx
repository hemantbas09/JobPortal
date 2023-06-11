import React, { useState } from "react";
import CompanySidebar from "../Sidebar/CompanySidebar";
const Profile = () => {
  const [skillFields, setSkillFields] = useState([""]);

  const addSkillField = () => {
    setSkillFields([...skillFields, ""]);
  };

  const handleSkillChange = (index, value) => {
    const updatedFields = [...skillFields];
    updatedFields[index] = value;
    setSkillFields(updatedFields);
  };

  const [workExperienceFields, setWorkExperienceFields] = useState([
    {
      company: "",
      jobTitle: "",
      joinDate: "",
      endDate: ""
    }
  ]);

  const addWorkExperienceField = () => {
    setWorkExperienceFields([...workExperienceFields, {
      company: "",
      jobTitle: "",
      joinDate: "",
      endDate: ""
    }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFields = [...workExperienceFields];
    updatedFields[index][field] = value;
    setWorkExperienceFields(updatedFields);
  };


  return (
    <>
      <div class=" mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
          <CompanySidebar />
        </div>

        {/* <Home /> */}
        <div className="  p-7 flex-1      dark:bg-gray-800 h-screen left-30 ">
          {/* Profile Picture with Cover Photo */}
          <div>
            <div class=" mx-auto h-96 ">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt="Cover Photo"
                class="w-full h-full object-cover"
              />
            </div>

            <div class=" mx-auto mt-4 ">
              <div class="flex items-end justify-between mb-4">
                <div class="flex items-center">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                    alt="Profile Picture"
                    class="rounded-full w-24 h-24 border-4 border-white shadow-md"
                  />
                  <div class="ml-4">
                    <h2 class="text-3xl font-bold">John Doe</h2>
                    <p class="text-gray-600 mt-2">Front-end Developer</p>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded mt-5">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto  p-16 bg-white shadow-sm  ">
            <form action="">
              <fieldset className="mt-20">
                <legend className=" mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                  Personal Information:
                </legend>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                    <label
                      className=" mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      First Name:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Middle Name:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Last Name:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Email:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Phone Number:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Date of Birth:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
                <label
                  className=" mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  htmlFor=""
                >
                  Details
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  Details:
                </textarea>
              </fieldset>
              <fieldset className="mt-20">
                <legend className=" mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                  Address
                </legend>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Country:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      State:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      City:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Postal Code:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
              </fieldset>
              <div>
                {workExperienceFields.map((experience, index) => (
                  <fieldset key={index} className="mt-20">
                    <legend className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                      Work Experience {index + 1}
                    </legend>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                      <div>
                        <label
                          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                          htmlFor={`company-${index}`}
                        >
                          Company:
                        </label>
                        <input
                          id={`company-${index}`}
                          className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          value={experience.company}
                          onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                          htmlFor={`jobTitle-${index}`}
                        >
                          Job Title:
                        </label>
                        <input
                          id={`jobTitle-${index}`}
                          className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          value={experience.jobTitle}
                          onChange={(e) => handleInputChange(index, 'jobTitle', e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                          htmlFor={`joinDate-${index}`}
                        >
                          Join Date:
                        </label>
                        <input
                          id={`joinDate-${index}`}
                          className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          value={experience.joinDate}
                          onChange={(e) => handleInputChange(index, 'joinDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                          htmlFor={`endDate-${index}`}
                        >
                          End Date:
                        </label>
                        <input
                          id={`endDate-${index}`}
                          className="shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          value={experience.endDate}
                          onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                  </fieldset>
                ))}
                <button type="button" onClick={addWorkExperienceField}>
                  Add Work Experience
                </button>
              </div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                htmlFor=""
              >
                Skill:
              </label>
              <div className="mt-5">
                {skillFields.map((field, index) => (
                  <input
                    key={index}
                    value={field}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="mt-5 shadow-lg border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                  />
                ))}
                <button type="button" onClick={addSkillField}>
                  Add Skill
                </button>
              </div>
              <fieldset className="mt-20">
                <legend className=" mb-2 text-xl font-medium text-gray-900 dark:text-gray-300 mt-4">
                  Other Information
                </legend>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Github:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Linkedin:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          {/* <Home /> */}
        </div>
      </div>

    </>
  );
};

export default Profile;
