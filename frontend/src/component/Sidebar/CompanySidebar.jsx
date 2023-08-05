import React from "react";
import Sidebar from "../Sidebar/Sidebar";
const CompanySidebar = () => {
  const Menus = [
    {
      title: "Dashboard",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/dashboard-statistics-5495_d41mlq.svg",
      link: "/company",
    },
    {
      title: "Add Job",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/blue-add-button-12025_wzps0d.svg",
      link: "/company/addjob",
    },
    {
      title: "My Job",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/briefcase-1965_ik29a2.svg",
      link: "/company/job",
    },
    {
      title: "Applicants Job",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/resume-9874_epoftf.svg",
      link: "/company/applicant",
    },
    {
      title: " Shortlisted Applicant",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/blue-check-mark-circular-approval-16214_jhwnm9.svg",
      link: "/company/shortlist",
    },
    {
      title: "Rejected Applicants",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687779209/icon/multiplication-13235_lhuca2.svg",
      link: "/company/rejected",
    },
    {
      title: "Profile",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687886208/icon/user-3297_eupj2v.svg",
      link: "/company/rejected",
    },
    {
      title: "Reset Password",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687886209/icon/car-key-5803_h8bmh7.svg",
      link: "/reset/password",
    },
    {
      title: "Logout",
      src: "https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687886209/icon/exit-2860_fxthud.svg",
      link: "/company/rejected",
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

export default CompanySidebar;
