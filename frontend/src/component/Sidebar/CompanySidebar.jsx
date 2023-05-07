import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import Sidebar from '../Sidebar/Sidebar';
const CompanySidebar = () => {

    const Menus = [
        { title: "Dashboard", src: <RiDashboardFill />, link:'/company'},
        { title: "Add Job", src: <RiDashboardFill />, link:'/company/addjob'  },
        { title: "My Job", src: <RiDashboardFill />, link:'/company/job' },
        { title: "Applicants Job", src: <RiDashboardFill />, link:'/company/Applicant' },
        { title: "Shortlist Candidates", src: <RiDashboardFill />, link:'/company/shortlist' },
        { title: "Package", src: <RiDashboardFill />, link:'/company/package' },
      ];
    return (
        <>
            <div className='flex relative '>
                <div>
                    <Sidebar Menus={Menus} />
                </div>

                {/* <div className="fixed overflow-y-scroll top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

                </div> */}



            </div>


        </>
    )
}

export default CompanySidebar