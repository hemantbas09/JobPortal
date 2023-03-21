import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Home } from '../../component';
// import { Home } from '../component/index';
import { RiDashboardFill } from "react-icons/ri";
const CompanyDashboard = () => {
  const Menus = [
    { title: "Dashboard", src: <RiDashboardFill />, gap: true },
    { title: "My Job", src: <RiDashboardFill />, gap: true },
    { title: "Add Job", src: <RiDashboardFill />, gap: true },
    { title: "Applicants Job", src: <RiDashboardFill />, gap: true },
    { title: "Shortlist Candidates", src: <RiDashboardFill />, gap: true },
    { title: "Package", src: <RiDashboardFill />, gap: true },
  ];

  return (
    <>
      <div className='flex relative '>
        <div>
          <Sidebar Menus={Menus} />
        </div>

        <div className="fixed top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

          <h1 className="text-2xl font-semibold ">Applications statistics</h1>
          <Home />
          
          
        </div>



      </div>


    </>

  )
}

export default CompanyDashboard