import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Home } from '../../component';
import AddJob from './AddJob';
import AdminSidebar from '../../component/Admin/AdminSidebar';
// import { Home } from '../component/index';
import { RiDashboardFill } from "react-icons/ri";
const CompanyDashboard = () => {


  return (
    <>
      
      <div className='flex relative '>
        <div>
        <AdminSidebar />
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