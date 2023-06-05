

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import AdminSidebar from "../../component/Admin/AdminSidebar";
import { useGetJobByCompanyIdQuery } from "../../Service/jobApi";
import { useDeleteJobMutation } from "../../Service/jobApi";
import { CiSearch } from "react-icons/ci";
import CompanySidebar from "../../component/Sidebar/CompanySidebar";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const JobQuiz = () => {
    const [deleteJob, { isLoading }] = useDeleteJobMutation();

    let jobs;
    const jobInfo = useGetJobByCompanyIdQuery();
    if (jobInfo.status === "fulfilled") {
        jobs = jobInfo.data.job;
    }

    console.log(jobs)
    const columns = [
        {
            name: 'Job Title',
            selector: 'jobTitle',
            sortable: true,
        },
        {
            name: 'Job Category',
            selector: 'jobCategory',
            sortable: true,
            width: '30%',

        },
        {
            name: 'Quiz ID',
            selector: 'quizId',
            sortable: true,
        },
        {
            name: 'Created Date',
            selector: 'createDate',
            sortable: true,
            format: (row) => {
                const createDate = new Date(row.createDate);
                const formattedDate = createDate.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                });
                return formattedDate;
            },
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
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="flex gap-5">

                    <Link to={`/updatejob/${row._id}`}>
                        <RiEditBoxLine size={30} />
                    </Link>

                    <button>
                        <AiOutlineDelete
                            size={30}
                            onClick={() => {
                                let deleteres = deleteJob(row._id);
                                console.log('Delete job', deleteres);
                            }}
                        />
                    </button>
                </div>
            ),
        },
    ];
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    function handleFilter(event) {
        const { value } = event.target;
        const filteredData = jobs.filter((job) =>
            job.jobTitle.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredJobs(filteredData);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    const paginatedData = columns.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            {/* <Sidebar /> */}
            <>
                <div class="mt-28 space-x-16 md:space-x-72 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    <div className="">
                        <CompanySidebar />
                    </div>

                    {/* <Home /> */}
                    <div className="  p-7 flex-1 mx-10     dark:bg-gray-800 h-screen left-30 ">
                        <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                            <h1 className="text-2xl font-semibold md:col-start-1 md:col-end-7 text-first">
                                Applications statistics
                            </h1>
                            <div class="mx-auto max-w-screen-xl px-4 lg:px-12 mt-4">
                                {/* <!-- Start coding here --> */}
                                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">

                                    <input className="hover:bg-white bg-zinc-100 border-2 border-blue-500 p-4 rounded-lg w-full" type="text" onChange={handleFilter} placeholder="Search..." />
                                    <DataTable
                                        className="w-full text-3xl md:text-lg text-left text-gray-500 dark:text-gray-400 bg-gray-100 p-4"
                                        noHeader
                                        columns={columns}
                                        data={filteredJobs}
                                        selectableRows
                                        pagination
                                        // paginationServer={false}
                                        // paginationPerPage={itemsPerPage}
                                        // paginationTotalRows={columns.length}
                                        // onChangePage={handlePageChange}
                                        // onChangeRowsPerPage={handleItemsPerPageChange}
                                        customStyles={{
                                            headRow: {
                                                style: {
                                                    fontSize: '20px', // Increase the font size of the table cells
                                                },
                                            },
                                            cells: {
                                                style: {
                                                    fontSize: '16px', // Increase the font size of the table cells
                                                },
                                            },
                                        }}
                                        noDataComponent={<div className="bg-white p-4">No data available</div>}
                                    />







                                </div>
                            </div>
                        </section>

                        {/* <Home /> */}
                    </div>
                </div>
            </>
        </>
    );
};



export default JobQuiz
