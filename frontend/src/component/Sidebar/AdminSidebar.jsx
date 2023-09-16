import React from "react";
import Sidebar from "./Sidebar";
const AdminSidebar = () => {
  // Inside your logout function
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    window.location.href = "/"; // Replace with your desired redirect URL
  };
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
      link: "/reset/password",
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
