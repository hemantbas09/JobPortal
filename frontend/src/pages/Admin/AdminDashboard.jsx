import React from "react";
import AdminSidebar from "../../component/Sidebar/AdminSidebar";
import Box from "../../component/Admin/Box";
import { useGetallUserQuery } from "../../Service/userAuth";
import { useGetAllJobQuery } from "../../Service/jobApi";

const AdminDashboard = () => {
  const allUser = useGetallUserQuery({ enabled: false });
  const allJob = useGetAllJobQuery({ enabled: false });

  let totalCandidates;
  let totalCompanies;
  if (!allUser.isLoading && !allUser.error) {
    const candidates =
      allUser.data?.user?.filter((user) => user.role === "candidate") || [];
    totalCandidates = candidates.length;

    const companies =
      allUser.data?.user?.filter((user) => user.role === "company") || [];
    totalCompanies = companies.length;
  } else if (allUser.error) {
    console.log("Error:", allUser.error.message);
  } else {
    console.log("Loading...");
  }

  let totalJobPost;
  if (!allJob.isLoading) {
    totalJobPost = allJob?.data?.jobs?.length ?? 0;
  }

  return (
    <>
      <div className="mt-32">
        <AdminSidebar />
      </div>
      <div className="md:ml-64 mr-8">
        <div class="grid grid-cols-1 gap-10   md:grid-cols-2  ">
          <h1 className="text-2xl font-semibold md:col-start-1 md:col-end-7 text-first ">
            Company Statistics
          </h1>
          {/* total job post */}
          <Box title="Total Candidates" number={totalCandidates} />
          {/* total Applicant */}
          <Box title="Total Companies" number={totalCompanies} />
          <Box title="Total Job" number={totalJobPost} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
