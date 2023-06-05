import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useGetJobByCompanyIdQuery, useDeleteJobMutation } from "../../Service/jobApi";
import { Link } from "react-router-dom";
import { RiEditBoxLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";

const MyJob = () => {
  const [deleteJob, { isLoading }] = useDeleteJobMutation();

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const jobInfo = useGetJobByCompanyIdQuery();

  useEffect(() => {
    if (jobInfo.data) {
      setJobs(jobInfo.data.jobs);
      setFilteredJobs(jobInfo.data.jobs);
    }
  }, [jobInfo.data]);

  // Column configuration for the DataTable
  const columns = [
    {
      name: 'Job Title',
      selector: 'jobTitle',
      sortable: true,
      width: '25%',
    },
    {
      name: 'Job Category',
      selector: 'jobCategory',
      sortable: true,
      width:"30%"
    },
    {
      name: 'Quiz',
      cell: (row) => (
       
          <Link to={`/jobquiz/${row.quizId}`} className="bg-blue-500 px-4 py-2 rounded-lg text-white text-bold   ">
            <div>Quiz</div>
          </Link>
        
      ),
    },
    {
      name: 'Expired Date',
      selector: 'deadlineDate',
      sortable: true,
      format: (row) => {

        const deadlineDate = new Date(row.deadlineDate);
        const formattedDate = deadlineDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
        return formattedDate;
      },
      width: '20%',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-5">
          <Link to={`/updatejob/${row._id}`} >
            <RiEditBoxLine size={30} />
          </Link>
          <button onClick={() => deleteJob(row._id)}>
            <AiOutlineDelete size={30} />
          </button>
        </div>
      ),
    },
  ];

  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterValue(value);

    const filteredData = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filteredData);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedJobs = filteredJobs.slice(start, end);

  return (
    <>
      <div className="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="">
          <CompanySidebar />
        </div>

        <div className="p-7 flex-1 mx-10 dark:bg-gray-800 h-screen left-30">
          <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <h1 className="text-2xl font-semibold md:col-start-1 md:col-end-7 text-first">
              Applications statistics
            </h1>

            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <input
                className="hover:bg-white bg-zinc-50 border-2 border-blue-500 p-4 rounded-lg w-full"
                type="text"
                value={filterValue}
                onChange={handleFilter}
                placeholder="Search..."
              />
              <DataTable

                noHeader
                columns={columns}
                data={displayedJobs}
                customStyles={{
                  table: {
                    style: {
                      width: '100%',
                      height: '100%',
                      backgroundColor: "red"
                    },
                  },
                  headRow: {
                    style: {
                      fontSize: '16px',
                    },
                  },
                  cells: {
                    style: {
                      fontSize: '14px',
                    },
                  },
                }}
                noDataComponent={<div className="bg-white p-4">No data available</div>}
              />

              <div className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800">
                <div>
                  <button
                    className="px-3 py-1 border border-gray-300 dark:border-gray-500 rounded-md mr-2"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                  <button
                    className="px-3 py-1 border border-gray-300 dark:border-gray-500 rounded-md"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
                <div>Page {currentPage} of {totalPages}</div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default MyJob;
