
import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import { RiDashboardFill } from "react-icons/ri";
const CandidateDashboard = () => {
  const Menus = [
    { title: "Dashboard", src: <RiDashboardFill />, gap: true },
    { title: "Company", src: <RiDashboardFill />, gap: true },
    { title: "Accounts", src: <RiDashboardFill />, gap: true },
    { title: "Schedule ", src: <RiDashboardFill />, gap: true },
    { title: "Search", src: <RiDashboardFill />, gap: true },
    { title: "Analytics", src: <RiDashboardFill />, gap: true },
    { title: "Files ", src: <RiDashboardFill />, gap: true },
    { title: "Setting", src: <RiDashboardFill />, gap: true },
  ];

  return (
    <>
      <h2>This is Candidate Dashboard</h2>
      <h1>User</h1>
      <Sidebar Menus={Menus} />
    </>

  )
}

export default CandidateDashboard