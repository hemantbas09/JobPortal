import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import Sidebar from '../Sidebar/Sidebar';
const AdminSidebar = () => {
    const Menus = [
        { title: "Dashboard", src: <RiDashboardFill />, gap: true,link:'/company'},
        { title: "My Job", src: <RiDashboardFill />, gap: true,link:'/company/job' },
        { title: "Add Job", src: <RiDashboardFill />, gap: true,link:'/company/addjob'  },
        { title: "Applicants Job", src: <RiDashboardFill />, gap: true,link:'/company/Applicant' },
        { title: "Shortlist Candidates", src: <RiDashboardFill />, gap: true,link:'/company/shortlist' },
        { title: "Package", src: <RiDashboardFill />, gap: true,link:'/company/package' },
      ];
  return (
     <>
      <div className='flex relative '>
        <div>
          <Sidebar Menus={Menus} />
        </div>

        <div className="fixed overflow-y-scroll top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

          <h1 className="text-2xl font-semibold ">Applications statistics</h1>
          
          
        </div>



      </div>


    </>
  )
}

export default AdminSidebar