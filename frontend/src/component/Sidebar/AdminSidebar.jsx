import React from "react";
import Sidebar from "./Sidebar";
const AdminSidebar = () => {
  const Menus = [
    {
      title: "Dashboard",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/dashboard-statistics-5495_d41mlq.svg",
      link: "/admin",
    },
    {
      title: "Company",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/briefcase-1965_ik29a2.svg",
      link: "/admin/companyinformation",
    },
    {
      title: "Candidate",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687886208/icon/user-3297_eupj2v.svg",
      link: "/admin/candidateinformation",
    },
    {
      title: "Reset Password",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687886209/icon/car-key-5803_h8bmh7.svg",
      link: "/admin",
    },
    {
      title: "Logout",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687886209/icon/exit-2860_fxthud.svg",
      link: "/admin",
    },
  ];
  return (
    <>
      <div className="flex relative ">
        <div>
          <Sidebar Menus={Menus} />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
