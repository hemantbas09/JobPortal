import React, { useState } from "react";
import CompanySidebar from "../Sidebar/CompanySidebar";
import { Link } from "react-router-dom";
import CompanyNavbar from "../Navbar/CompanyNavbar";
import { useGetCompanyProfileQuery } from "../../Service/userAuth";
const ViewCompanyProfile = () => {
  const { data, isLoading, isError } = useGetUserProfileQuery();
  console.log(data);
  let ProfileData;
  if (data) {
    ProfileData = data.companyProfile[0];
    console.log(ProfileData);
  }

  return (
    <div className="flex mt-28 space-x-2 md:space-x-24 min-h-screen antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <CompanyNavbar />

      <CompanySidebar />
      <div className="p-7 flex-1 dark:bg-gray-800 h-screen left-30">
        {/* Cover Photo */}
        <div className="mx-auto h-96 relative ">
          <img
            src={
              ProfileData?.coverPicture?.url ||
              "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample-2.jpg"
            }
            alt="Cover Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Picture */}
        <div className="mx-auto ">
          <div className="flex items-end justify-between mb-4">
            <div className="flex justify-between">
              <img
                src={
                  ProfileData?.profilePicture?.url ||
                  "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1680327700/cld-sample.jpg"
                }
                alt="Profile Picture"
                className="rounded-full w-24 h-24 border-4 border-white shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="mx-auto w-2/3 pb-32">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="text-lg">Company Name</label>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.firstName}
                </h2>
              </div>
              <div>
                <label className="text-lg">Email</label>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.email}
                </h2>
              </div>
              <div>
                <label className="text-lg">Phone Number</label>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.phoneNumber}
                </h2>
              </div>
              <div>
                <label className="text-lg">Address</label>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.address?.city}
                </h2>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.address?.country}
                </h2>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.address?.postalCode}
                </h2>
                <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
                  {ProfileData?.address?.state}
                </h2>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">About Company</h3>
            <h2 className="w-full px-4 py-2 mt-2  rounded-lg  focus:border-blue-500">
              {ProfileData?.github}
            </h2>
          </div>

          <Link
            to={"/edit/company/profile"}
            className="mb-96 text-center px-4 py-2 mt-4 bg-green-500 text-white font-semibold rounded-md  ml-96"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCompanyProfile;
