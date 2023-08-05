import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {
  useDeleteJobMutation,
  useGetAllJobQuery,
  useJobAcceptRejectMutation,
} from "../../Service/jobApi";
import { Link } from "react-router-dom";
import AdminSidebar from "../../component/Sidebar/AdminSidebar";
import SweetAlert from "react-bootstrap-sweetalert";
const AllJob = () => {
  const [acceptReject] = useJobAcceptRejectMutation();
  const [deleteJob, { isLoading }] = useDeleteJobMutation();
  const [alertConfig, setAlertConfig] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const jobInfo = useGetAllJobQuery();
  const handleApprove = async (companyId, status) => {
    setAlertConfig({
      title: "Confirmation",
      message: `Are you sure you want to ${status} this Job?`,
      confirmText: "Confirm",
      confirmAction: async () => {
        const formData = new FormData();
        formData.append("companyId", companyId);
        formData.append("status", status);
        const res = await acceptReject({ formData, companyId });
        console.log(res);
        await jobInfo.refetch();
        setAlertConfig(null);
      },
    });
  };

  useEffect(() => {
    if (jobInfo.data) {
      setJobs(jobInfo.data.jobs);
      setFilteredJobs(jobInfo.data.jobs);
    }
  }, [jobInfo.data]);

  const handleDeleteConfirmation = (jobId) => {
    setAlertConfig({
      title: "Confirmation",
      message: "Are you sure you want to delete this user?",
      confirmText: "Confirm",
      confirmAction: () => handleDeleteUser(jobId),
    });
  };

  const handleDeleteUser = async (userId) => {
    await deleteJob(userId);
    await jobInfo.refetch();
    setAlertConfig(null);
  };

  // Column configuration for the DataTable
  const columns = [
    {
      name: "Job Title",
      selector: "jobTitle",
      sortable: true,
      width: "25%",
    },
    {
      name: "Job Category",
      selector: "jobCategory",
      sortable: true,
      width: "30%",
    },

    {
      name: "Expired Date",
      selector: "deadlineDate",
      sortable: true,
      format: (row) => {
        const deadlineDate = new Date(row.deadlineDate);
        const formattedDate = deadlineDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        return formattedDate;
      },
      width: "15%",
    },
    {
      name: "Status",
      cell: (row) => {
        let statusClass = "";

        switch (row.active) {
          case true:
            statusClass = "bg-green-500";
            break;
          case false:
            statusClass = "bg-red-500";
            break;
          default:
            break;
        }

        return (
          <span
            className={`px-6 py-3 rounded-lg text-lg font-medium text-gray-500 ${statusClass} text-white`}
          >
            <div>{row.active ? "Active" : "Blocked"}</div>
          </span>
        );
      },
      width:"15%"
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-5 items-center">
          <button size={30} onClick={() => handleApprove(row._id, "Active")}>
            <div className="w-8 h-8">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685964710/icon/accept-check-good-mark-ok-tick_nhmkxe.svg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
          <button size={30} onClick={() => handleApprove(row._id, "Blocked")}>
            <div className="w-10 h-10">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685965162/icon/1200px-Antu_task-reject.svg_wystlz.png"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
          <button size={30} onClick={() => handleDeleteConfirmation(row._id)}>
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
  const customStyles = {
    table: {
      style: {
        width: "100%",
        height: "100%",
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
      <div className="mt-32">
        <AdminSidebar />
      </div>

      <div className="md:ml-64 mr-8 ml-14 border border-black rounded-lg p-2">
        <div className="relative ">
          <img
            className="w-6 h-6 absolute ml-5 mt-5"
            src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687503132/search_ecvsl7.svg"
            alt=""
          />
          <input
            className="p-4 border-none w-1/2 rounded-lg mb-2 pl-16 "
            type="text"
            placeholder="Search by job title"
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
        <DataTable
          noHeader
          columns={columns}
          data={displayedJobs}
          customStyles={customStyles}
          noDataComponent={
            <div className="bg-white p-4">No data available</div>
          }
        />

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
      {alertConfig && (
        <SweetAlert
          warning
          title={alertConfig.title}
          onConfirm={alertConfig.confirmAction}
          onCancel={() => setAlertConfig(null)}
          confirmBtnText={alertConfig.confirmText}
          confirmBtnBsStyle="warning p-3 bg-red-500 text-white text-lg ml-5"
          cancelBtnBsStyle="default"
          showCancel
        >
          <span className="text-xl font-normal"> {alertConfig.message} </span>
        </SweetAlert>
      )}
    </>
  );
};

export default AllJob;
