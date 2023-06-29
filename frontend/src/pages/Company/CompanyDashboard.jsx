import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Home } from "../../component";
import AddJob from "./AddJob";
import Box from "../../component/Admin/Box";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";
// import { Home } from '../component/index';
import { RiDashboardFill } from "react-icons/ri";
import { removeToken } from "../../Service/localStorageService";
import { useGetAllJobQuery } from "../../Service/jobApi";
import { useGetAppliedJobQuery } from "../../Service/jobApi";
const CompanyDashboard = () => {
  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const userId = decodedToken.userID;
  const allAppliedJob = useGetAppliedJobQuery();
  const allJob = useGetAllJobQuery();
  const userJobLength = allJob.currentData.jobs.filter(
    (item) => item.user === userId
  ).length;
  let appliedLength = allAppliedJob.currentData.appliedapplicants.length;

  const handleLogout = () => {
    removeToken("token");
  };

  return (
    <>
      <div class="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
          <CompanySidebar />
        </div>

        {/* <Home /> */}
        <div className="  p-7 flex-1 mx-10     dark:bg-gray-800 h-screen left-30 ">
          <div class="grid grid-cols-1 gap-10   md:grid-cols-2  ">
            <h1 className="text-2xl font-semibold md:col-start-1 md:col-end-7 text-first">
              Statistics
            </h1>
            <Box title="Total Job" number={userJobLength} />
            <Box title="Total Applicant" number={appliedLength} />
          </div>
          {/* <Home /> */}
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
