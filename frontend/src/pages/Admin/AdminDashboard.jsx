import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { RiDashboardFill } from "react-icons/ri";
const AdminDashboard = () => {
  const Menus = [
    { title: "Dashboard", src: <RiDashboardFill />, gap: true },
    { title: "Company", src: <RiDashboardFill />, gap: true },
    { title: "Accounts", src: <RiDashboardFill />, gap: true },
    { title: "Schedule ", src: <RiDashboardFill />, gap: true },
    { title: "Search", src: <RiDashboardFill />, gap: true },

  ];

  return (
    <>
      {/* <Sidebar Menus={Menus} /> */}
      <div>This is Admin Dashboard</div>
    </>

  )
}

export default AdminDashboard