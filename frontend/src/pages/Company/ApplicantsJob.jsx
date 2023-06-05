



import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useGetAppliedJobQuery } from "../../Service/jobApi";
import { Link } from "react-router-dom";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";

const ApplicantsJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const jobInfo = useGetAppliedJobQuery();

  useEffect(() => {
    if (jobInfo.data) {
      setJobs(jobInfo.data.appliedapplicants);
      setFilteredJobs(jobInfo.data.appliedapplicants);
    }
  }, [jobInfo.data]);

  // Column configuration for the DataTable
  const columns = [
    {
      name: 'Job Title',
      selector: 'job.jobTitle',
      sortable: true,
      cell: (row) => (
        <div className="truncate w-11/12  pr-96">{row.job.jobTitle}</div>
      ),
    },
    {
      name: 'Applicant',
      selector: 'candidate.fullName',
      sortable: true,
      cell: (row) => (
        <div className="w-11/12  ">{row.candidate.fullName}</div>
      ),
    },
    {
      name: 'Resume',
      cell: (row) => (
        <div className="">
          <button onClick={() => handleImageDownload(row.resume.url)}>
            <div className="w-8 h-8">
              <img src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965601/icon/1200px-Circle-icons-download.svg_siifg2.png" className=" w-full h-full object-cover" alt="" />
            </div>
          </button >
        </div>
      ),
    },
    {
      name: 'Apply Date',
      selector: 'applyDate',
      sortable: true,
      format: (row) => {
        const applyDate = new Date(row.applyDate);
        const formattedDate = applyDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-5 items-center">
          <Link to={`/updatejob/${row._id}`}>
            <div className="w-8 h-8">
              <img src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685964710/icon/accept-check-good-mark-ok-tick_nhmkxe.svg" className=" w-full h-full object-cover" alt="" />
            </div>
          </Link>
          <button size={30} onClick={() => deleteJob(row._id)}>
            <div className="w-8 h-8">
              <img src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965162/icon/1200px-Antu_task-reject.svg_wystlz.png" className=" w-full h-full object-cover" alt="" />
            </div>
          </button>
          <button size={30} onClick={() => deleteJob(row._id)}>
            <div className="w-8 h-8">
              <img src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965342/icon/51-512_wlgrsz.png" className=" w-full h-full object-cover" alt="" />
            </div>
          </button>
        </div>
      ),
    },
  ];

  const handleImageDownload = (imageUrl) => {
    // Create a file name for the downloaded image
    const fileName = 'resume.png';

    // Fetch the image as a blob
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL for the blob
        const blobUrl = URL.createObjectURL(blob);

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;

        // Programmatically click the anchor element to trigger the download
        link.click();

        // Clean up the URL and anchor element
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };


  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterValue(value);

    const filteredData = jobs.filter((job) =>
      job.job.jobTitle.toLowerCase().includes(value.toLowerCase())
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

        <div className="md:p-7  md:mx-10">
          <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <h1 className="text-2xl font-semibold  text-first">
              Applications statistics
            </h1>

            <div>
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
                    },
                    className: 'min-w-full divide-y divide-gray-200',
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
                responsive={true}
                responsiveLayout="scroll"
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
            {/* </div> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default ApplicantsJob;
