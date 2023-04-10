import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Home } from '../../component';
import AddJob from './AddJob';
import Box from '../../component/Admin/Box';
import CompanySidebar from '../../component/Sidebar/CompanySidebar';
// import { Home } from '../component/index';
import { RiDashboardFill } from "react-icons/ri";
import { removeToken } from '../../Service/localStorageService';
const CompanyDashboard = () => {

  const handleLogout = () => {
    removeToken('token')
  }

  return (
    <>


      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <CompanySidebar />

        {/* <Home /> */}
        <div className=" p-7 flex-1 mx-10 bg-red-500   w-full dark:bg-gray-800 h-screen left-30 ">

          <h1 className="text-2xl font-semibold ">Applications statistics</h1>
          <div class="grid grid-cols-1 gap-10   sm:grid-cols-1 lg:grid-cols-4 p-4 ">
            
              <Box />
              <Box />
              <Box />
              <Box />
           
          </div>
          {/* <Home /> */}

        </div>

      </div>


    </>

  )
}

export default CompanyDashboard