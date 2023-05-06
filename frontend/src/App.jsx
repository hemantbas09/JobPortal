import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginForm,
  ResetPassword,
  Navbar,
  Footer,
  SendPasswordResetEmail,
} from "./component/index.js";
import {
  JobApply,
  CandidateInformation,
  AllUser,
  AllJobs,
  AddQuiz,
  Assestement,
  JobDetails,
  Home,
  AdminDashboard,
  CandidateDashboard,
  CompanyDashboard,
  AddJob,
  ApplicantsJob,
  MyJob,
  Package,
  ShortlistCandidates,
} from "./pages/index.js";
import MyForm from "./component/Authentication/MyForm.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Check from "./pages/Company/check";
const App = () => {
  const Menu = [];
  return (
    <>
      <BrowserRouter>
        <Navbar  />

        <Routes>
          <Route path="/check" element={<Check />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<MyForm />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route
            path="/admin"
            element={<ProtectedRoute Component={AdminDashboard} />}
          />
          <Route
            path="/user"
            element={<ProtectedRoute Component={CandidateDashboard} />}
          />
          <Route path="/forgetpassword" element={<SendPasswordResetEmail />} />
          <Route
            path="api/user/reset-password/:id/:token"
            element={<ResetPassword />}
          />

          {/* -------------------------Admin Route-------------------------- */}
          <Route
            path="/admin/candidateinformation"
            element={<ProtectedRoute Component={CandidateInformation} />}
          />
          <Route
            path="/admin/companyinformation"
            element={<ProtectedRoute Component={AllUser} />}
          />
          {/* Company */}

          <Route
            path="/login"
            element={<ProtectedRoute Component={LoginForm} />}
          />
          {/* <Route
            path="/company"
            element={<ProtectedRoute Component={CompanyDashboard} />}
          /> */}
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/company/addjob" element={<AddJob />} />
          <Route path="/company/Applicant" element={<ApplicantsJob />} />
          <Route path="/company/job" element={<MyJob />} />
          <Route path="/company/package" element={<Package />} />
          <Route path="/company/shortlist" element={<ShortlistCandidates />} />
          <Route path="/alljobs" element={<AllJobs />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
          <Route path="/jobapply/:id" element={<JobApply />} />
          <Route path="/quiz/:id" element={<Assestement />} />
          <Route path="/addquiz/:id" element={<AddQuiz />} />
          <Route path="/alluser" element={<AllUser />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
};

export default App;
