import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {
  useGetAppliedJobQuery,
  useAcceptJobMutation,
  useRejectJobMutation,
  useDeleteApplicantJobMutation,
} from "../../Service/jobApi";
import { Link } from "react-router-dom";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";
import SweetAlert from "react-bootstrap-sweetalert";

const RejectedApplicant = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [alertConfig, setAlertConfig] = useState(null);
  const itemsPerPage = 2;

  const jobInfo = useGetAppliedJobQuery();
  const [acceptJob] = useAcceptJobMutation();
  const [rejectJob] = useRejectJobMutation();
  const [deleteJob] = useDeleteApplicantJobMutation();
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [rejectJobId, setRejectJobId] = useState(null);
  const [deleteJobId, setDeleteJobId] = useState(null);

  useEffect(() => {
    if (jobInfo.data) {
      setJobs(jobInfo.data.appliedapplicants);
      setFilteredJobs(jobInfo.data.appliedapplicants);
    }
  }, [jobInfo.data]);

  const showAlert = (config) => {
    setAlertConfig(config);
  };

  const handleConfirmation = async () => {
    if (alertConfig) {
      await alertConfig.onConfirm();
      await jobInfo.refetch();
      setAlertConfig(null);
    }
  };

  const handleCancelConfirmation = () => {
    setAlertConfig(null);
  };

  const isJobAccept = async (id) => {
    setSelectedJobId(id);
    showAlert({
      title: "Are you sure?",
      message: "Are you sure you want to Accept this job?",
      confirmBtnText: "Yes, accept it!",
      onConfirm: handleAcceptConfirmation,
    });
  };

  const handleAcceptConfirmation = async () => {
    await acceptJob({ id: selectedJobId });
    await jobInfo.refetch();
    setAlertConfig(null);
  };

  const isJobReject = async (id) => {
    setRejectJobId(id);
    showAlert({
      title: "Are you sure?",
      message: "Are you sure you want to Reject this job?",
      onConfirm: handleRejectConfirmation,
    });
  };

  const handleRejectConfirmation = async () => {
    await rejectJob({ id: rejectJobId });
    await jobInfo.refetch();
    setAlertConfig(null);
  };

  const isJobApplicantDelete = async (id) => {
    setDeleteJobId(id);
    showAlert({
      title: "Are you sure?",
      message:
        "You are about to delete this job application. This action cannot be undone.",
      confirmBtnText: "Delete",
      onConfirm: handleDeleteConfirmation,
    });
  };

  const handleDeleteConfirmation = async () => {
    await deleteJob({ id: deleteJobId });
    await jobInfo.refetch();
    setAlertConfig(null);
  };

  const customStyles = {
    table: {
      style: {
        width: "100%",
        height: "100%",
        border: "2px solid #667085",
        borderRadius: "0.5rem",
      },
    },
    headRow: {
      style: {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "#667085",
        padding: "24px",
        background: "#f7f7fb",
      },
    },
    cells: {
      style: {
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "24px",
        color: "#667085",
        padding: "20px",
      },
    },
  };

  const columns = [
    {
      name: "Job Title",
      selector: "job.jobTitle",
      sortable: true,
      cell: (row) => (
        <Link to={`http://localhost:5173/jobdetails/${row.job._id}`}>
          <div className="truncate   pr-96">{row.job.jobTitle}</div>
        </Link>
      ),
    },
    {
      name: "Applicant",
      selector: "candidate.fullName",
      sortable: true,
      cell: (row) => <div className="w-11/12  ">{row.candidate.fullName}</div>,
    },
    {
      name: "Resume",
      cell: (row) => (
        <div className="">
          <button onClick={() => handleImageDownload(row.resume.url)}>
            <div className="w-8 h-8">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965601/icon/1200px-Circle-icons-download.svg_siifg2.png"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
        </div>
      ),
    },
    {
      name: "Apply Date",
      selector: "applyDate",
      sortable: true,
      format: (row) => {
        const applyDate = new Date(row.applyDate);
        const formattedDate = applyDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        return formattedDate;
      },
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-5 items-center">
          <button size={30} onClick={() => isJobAccept(row._id)}>
            <div className="w-8 h-8">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685964710/icon/accept-check-good-mark-ok-tick_nhmkxe.svg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
          <button size={30} onClick={() => isJobReject(row._id)}>
            <div className="w-10 h-10">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965162/icon/1200px-Antu_task-reject.svg_wystlz.png"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
          <button size={30} onClick={() => isJobApplicantDelete(row._id)}>
            <div className="w-10 h-10">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965342/icon/51-512_wlgrsz.png"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
        </div>
      ),
    },
  ];

  const handleImageDownload = (imageUrl) => {
    const fileName = "resume.png";

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };
  const activeRows = jobs.filter((row) => row.status === "rejected"); 
  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterValue(value);

    const filteredData = activeRows.filter((job) =>
      job.job.jobTitle.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filteredData);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(activeRows.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = activeRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mt-32">
        <CompanySidebar />
      </div>
      <div className="md:ml-64 mr-8">
        <div className="relative ">
          <img
            className="w-6 h-6 absolute ml-5 mt-5"
            src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687503132/search_ecvsl7.svg"
            alt=""
          />
          <input
            className="p-4 border-2 border-black w-1/2 rounded-lg mb-2 pl-16 "
            type="text"
            placeholder="Search by job title"
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
        <div className="">
          {filterValue ? (
            <DataTable
              columns={columns}
              data={filteredJobs}
              customStyles={customStyles}
              noHeader
            />
          ) : (
            <DataTable
              columns={columns}
              data={paginatedData}
              customStyles={customStyles}
              noHeader
            />
          )}
          <div className="flex justify-between items-center px-4 py-3  dark:bg-gray-800">
            <div>
              <button
                className="px-3 font-semibold text-base leading-6 text-[#344054] py-3 border border-gray-300 dark:border-gray-500 rounded-md mr-2"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <button
                className="px-6 font-semibold text-base leading-6 py-3 text-[#344054] border border-gray-300 dark:border-gray-500 rounded-md"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
            <div>
              <span className="font-semibold text-base leading-6 text-[#344054]">
                {" "}
                Page {currentPage} of {totalPages}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {alertConfig && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, I'm sure"
          confirmBtnBsStyle="warning p-3 bg-red-500 text-white text-lg ml-5"
          title={alertConfig.title}
          onConfirm={handleConfirmation}
          onCancel={handleCancelConfirmation}
          focusCancelBtn
        >
          <span className="text-xl font-normal"> {alertConfig.message} </span>
        </SweetAlert>
      )}
    </>
  );
};

export default RejectedApplicant;
