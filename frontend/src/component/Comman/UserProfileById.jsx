import React, { useEffect, useState } from "react";
import CandidateNavbar from "../Navbar/CandidateNavbar";
import CandidateSidebar from "../Sidebar/CandidateSidebar";
import { Link } from "react-router-dom";
import { useGetUserProfileByIdQuery } from "../../Service/userAuth";
import { useParams } from "react-router-dom";

const UserProfileById = () => {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetUserProfileByIdQuery(id);
  let ProfileData;
  if (data) {
    ProfileData = data.userProfile;
  }
  useEffect(() => {
    refetch();
  }, [refetch]);
  console.log("this is data", data);
  return (
    <>
      <div className="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
          <CandidateNavbar />
          <CandidateSidebar />
        </div>
        <div className="p-7 flex-1 dark:bg-gray-800 h-screen left-30">
          {/* Profile Picture and Cover Photo */}
          <div>
            <div>
              <div class=" mx-auto h-96 relative  ">
                <img
                  src={
                    ProfileData?.coverPicture?.url ||
                    "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680980170/document/n2kvpkxuvsnw3faxn4mx.jpg"
                  }
                  alt="Cover Photo"
                  class="w-full h-full object-cover mb-12"
                />
              </div>

              <div class=" mx-auto mt-20 ">
                <div class="flex items-end justify-between mb-4">
                  <div class="flex justify-between ">
                    <img
                      src={
                        ProfileData?.profilePicture?.url ||
                        "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample-2.jpg"
                      }
                      alt="Profile Picture"
                      className="rounded-full w-24 h-24 border-4 border-white shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ... */}
            <div className="mx-auto w-2/3">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="text-lg">First Name</label>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.firstName}
                    </h2>
                  </div>
                  <div>
                    <label className="text-lg">Last Name</label>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.lastName}
                    </h2>
                  </div>
                  <div>
                    <label className="text-lg">Email</label>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.email}
                    </h2>
                  </div>
                  <div>
                    <label className="text-lg">Phone Number</label>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.phoneNumber}
                    </h2>
                  </div>
                  <div>
                    <label className="text-lg">Date of Birth</label>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.dateOfBirth}
                    </h2>
                  </div>
                  <div>
                    <label className="text-lg">Address</label>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.address?.city}
                    </h2>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.address?.country}
                    </h2>
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {ProfileData?.address?.state}
                    </h2>
                    <h2 className="w-full px-4 py-2 mt-2  ">
                      {ProfileData?.address?.postalCode}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">About Me</h3>
                <p>{ProfileData?.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Skills</h3>
                {ProfileData?.skills?.map((field, index) => (
                  <div key={index} className="mt-4">
                    <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                      {field}
                    </h2>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Github</h3>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg focus:outline-none focus:border-blue-500">
                  {" "}
                  {ProfileData?.github}
                </h2>
              </div>
            </div>
            {/* <Link
              to={"/edit/profile"}
              className="text-center px-4 py-2 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ml-96"
            >
              Edit
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileById;
