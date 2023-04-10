import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { RiDashboardFill } from "react-icons/ri";
const AdminDashboard = () => {
  const Menus = [
    { title: "Dashboard", src: <RiDashboardFill size={30}/> ,link:'/' },
    { title: "Company", src: <RiDashboardFill size={30}/> ,link:'/' },
    { title: "Accounts", src: <RiDashboardFill size={30}/> ,link:'/' },
    { title: "Schedule ", src: <RiDashboardFill size={30}/> ,link:'/' },
    { title: "Search", src: <RiDashboardFill size={30}/> ,link:'/' },

  ];

  return (
    <>
      <Sidebar Menus={Menus} />
      <div>This is Admin Dashboard</div>
    </>

  )
}

export default AdminDashboard