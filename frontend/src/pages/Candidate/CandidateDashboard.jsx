import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { GrDocument } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import {
  RiDashboardFill,
  RiDeleteBin6Line,
  RiLogoutCircleRLine,
  RiLockPasswordLine,
  RiBookmarkLine,
} from "react-icons/ri";
const CandidateDashboard = () => {
  const Menus = [
    { title: "Dashboard", src: <RiDashboardFill size={20} />, gap: true },
    { title: "Profile", src: <CgProfile size={20} />, gap: true },
    { title: "My Resume", src: <TfiWrite size={20} />, gap: true },
    { title: "Applied Job ", src: <GrDocument size={20} />, gap: true },
    { title: "Bookmark Job", src: <RiBookmarkLine size={20} />, gap: true },
    {
      title: "Change Password",
      src: <RiLockPasswordLine size={20} />,
      gap: true,
    },
    { title: "Delete Account", src: <RiDeleteBin6Line size={20} />, gap: true },
    { title: "Logout", src: <RiLogoutCircleRLine size={20} />, gap: true },
  ];

  return (
    <>
      <h2>This is Candidate Dashboard</h2>
      <h1>User</h1>

      <div class="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
          <Sidebar Menus={Menus} />
        </div>

        {/* <Home /> */}
        <div className="  p-7 flex-1 mx-10     dark:bg-gray-800 h-screen left-30 ">
          <div class="grid grid-cols-1 gap-10   md:grid-cols-3  ">
            <h1 className="text-2xl font-semibold md:col-start-1 md:col-end-7 text-first">
              Applications statistics
            </h1>
          </div>
          {/* <Home /> */}
        </div>
      </div>
    </>
  );
};

export default CandidateDashboard;
