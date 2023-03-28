import React from 'react'
import DataTable from 'react-data-table-component'
import AdminSidebar from '../../component/Admin/AdminSidebar';
import { useGetAllJobQuery } from '../../Service/jobApi';
import { CiSearch } from "react-icons/ci";

const MyJob = () => {
  const jobInfo = useGetAllJobQuery();
  const jobs = jobInfo.data?.jobs ?? [];
  console.log(jobs)



  const columns = [
    {
      name: "Id",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "Title",
      selector: row => row.createData,
      sortable: true,
    },
    {
      name: "Expired Date",
      selector: row => row.expiredData,
      sortable: true
    },
    {
      name: "Status",
      selector: row => row.status
    },
    {
      name: "Action",
      selector: row => row.action
    }
  ];
  const data = jobs.map((job) => ({
    id: job._id,
    title: job.title,
    createData: job.createDate,
    expiredData: job.expiredDate,
    status: job.status,
    action: "delete",
  }));

  return (
    <>
      {/* <Sidebar /> */}
      <>

        <div className='flex relative '>
          <div>
            <AdminSidebar />
          </div>

          <div className="fixed overflow-y-scroll top-28 left-72 right-0 p-7 flex-1 mx-10  bg-zinc-100 h-screen left-30 ">

            <h1 className="text-2xl font-semibold ">Manage Job</h1>

            <div className='bg-white w-11/12 m-10 overflow-y-auto '>

              <div className="relative">
                <input type="text" placeholder="Search" className='w-99 ml-16 bg-zinc-100 mt-4 p-3 mb-3 pl-8 rounded-md focus:bg-white  focus:outline-none focus:ring focus:border-zinc-600' />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <CiSearch size={30} className="text-gray-400 ml-3 " />
                </div>
              </div>

              <div className=" flex justify-end">
                <select name="cars" id="cars" className='bg-green-800 mr-10 mb-10  p-3  rounded-md focus:bg-white  focus:outline-none focus:ring focus:border-zinc-600'>
                  <option value="volvo">Sort By</option>
                  <option value="volvo">Newest</option>
                  <option value="saab">Oldest</option>

                </select>

              </div>

              <DataTable
                columns={columns}
                data={data}
                selectableRows
                fixedHeader
                pagination
              >
              </DataTable>

            </div>


          </div>



        </div>


      </>
    </>


  )
}

export default MyJob