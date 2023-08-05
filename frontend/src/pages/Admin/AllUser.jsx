import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {
  useGetallUserQuery,
  useAcceptRejectMutation,
  useDeleteUserMutation,
} from "../../Service/userAuth";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import AdminSidebar from "../../component/Sidebar/AdminSidebar";
const AllUser = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [alertConfig, setAlertConfig] = useState(null);
  const itemsPerPage = 2;
  const jobInfo = useGetallUserQuery();
  const [acceptReject] = useAcceptRejectMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleApprove = async (companyId, status) => {
    setAlertConfig({
      title: "Confirmation",
      message: `Are you sure you want to ${status} this user?`,
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
      setJobs(jobInfo.data.user);
      setFilteredJobs(jobInfo.data.user);
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
    await deleteUser(userId);
    await jobInfo.refetch();
    setAlertConfig(null);
  };

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

  const columns = [
    {
      name: "Job Title",
      selector: "fullName",
      sortable: true,
      cell: (row) => (
        <Link to={`http://localhost:5173/jobdetails/${row._id}`}>
          <div className="truncate pr-96">{row.fullName}</div>
        </Link>
      ),
    },
    {
      name: "Email",
      selector: "email",
    },
    {
      name: "Status",
      selector: "status",

      cell: (row) => {
        let statusClass = "";

        switch (row.status) {
          case "active":
            statusClass = "bg-green-500";
            break;
          case "pending":
            statusClass = "bg-yellow-500";
            break;
          case "blocked":
            statusClass = "bg-red-500";
            break;
          default:
            break;
        }

        return (
          <span
            className={`px-6 py-3 rounded-lg text-lg font-medium text-gray-500 ${statusClass} text-white`}
          >
            {row.status}
          </span>
        );
      },
    },

    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-5 items-center">
          <button size={30} onClick={() => handleApprove(row._id, "active")}>
            <div className="w-8 h-8">
              <img
                src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1685964710/icon/accept-check-good-mark-ok-tick_nhmkxe.svg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </button>
          <button size={30} onClick={() => handleApprove(row._id, "blocked")}>
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

  const activeRows = jobs.filter((row) => row.role === "candidate");

  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterValue(value);
    const filteredData = activeRows.filter((job) =>
      job.fullName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filteredData);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(activeRows.length / itemsPerPage);

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
        <AdminSidebar />
      </div>
      <div className="md:ml-64 mr-8 ml-14 border border-black p-2">
        <div className="relative ">
          <img
            className="w-6 h-6 absolute ml-5 mt-5"
            src="https://res.cloudinary.com/finalyearprojectjobportal09/image/upload/v1687503132/search_ecvsl7.svg"
            alt=""
          />
          <input
            className="p-4 border-none  w-1/2 rounded-lg mb-2 pl-16 "
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

export default AllUser;
