import React from "react";
import CompanySidebar from "../Sidebar/CompanySidebar";
const Profile = () => {
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
              <fieldset className="mt-20">
                <legend className=" mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                  Work Experience
                </legend>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                    <label
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                      htmlFor=""
                    >
                      Company:
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
                      Job Title:
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
                      Join Date:
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
                      End Date:
                    </label>
                    <input
                      className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
              </fieldset>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                htmlFor=""
              >
                Skill:
              </label>
              <input
                className=" shadow-lg  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
              />
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
