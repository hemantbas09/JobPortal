import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Home } from '../../component';
import AddJob from './AddJob';
import AdminSidebar from '../../component/Admin/AdminSidebar';
// import { Home } from '../component/index';
import { RiDashboardFill } from "react-icons/ri";
import { removeToken } from '../../Service/localStorageService';
const CompanyDashboard = () => {

  const handleLogout = () => {
    removeToken('token')
  }

  return (
    <>
      <h1>This is Company Dashboard</h1>
      <div className='flex relative '>
        <div>
          <AdminSidebar />
        </div>
        <button onClick={handleLogout} className='bg-slate-400' > Nepal</button>
        <div className="fixed top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

          <h1 className="text-2xl font-semibold ">Applications statistics</h1>
          <Home />

        </div>



      </div>


    </>

  )
}

export default CompanyDashboard