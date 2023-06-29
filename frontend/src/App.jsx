import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  LoginForm,
  ResetPassword,
  Navbar,
  Footer,
  SendPasswordResetEmail,
  CandidateSignUpForm,
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
  ShortlistCandidates,
  QuizResult,
  Administrative,
  Education,
  Engineering,
  Finance,
  Healthcare,
  InformationTechnology,
  Other,
  Aboutus,
  Contactus,
  Search,
  EditJob,
  JobQuiz,
  RejectedApplicant,
  AcceptApplicant,
} from "./pages/index.js";
import MyForm from "./component/Authentication/MyForm.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Profile from "./component/Comman/Profile";
import ConfirmBox from "./component/ConfirmBox";
const App = () => {
  const Menu = [];
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Authentication Route */}
          <Route path="/signup" element={<CandidateSignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgetpassword" element={<SendPasswordResetEmail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpassword/:id/:token" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Home />} />
          <Route path="/confirm" element={<ConfirmBox />} />

          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route
            path="/admin"
            element={<ProtectedRoute Component={AdminDashboard} />}
          /> */}
          {/* <Route
            path="/admin"
            element={
              <ProtectedRoute component={AdminDashboard} requiredRole="admin" />
            }
            
          /> */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* <Route
            path="/user"
            element={<ProtectedRoute Component={CandidateDashboard} />}
          /> */}
          <Route path="/user" element={<CandidateDashboard />} />
          <Route path="/forgetpassword" element={<SendPasswordResetEmail />} />
          <Route
            path="api/user/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          {/* -------------------------Admin Route-------------------------- */}
          {/* <Route
            path="/admin/candidateinformation"
            element={
              <ProtectedRoute
                Component={CandidateInformation}
                requiredRole="admin"
              />
            }
          /> */}
          <Route
            path="/admin/candidateinformation"
            element={<CandidateInformation />}
          />

          {/* <Route
            path="/admin/companyinformation"
            element={
              <ProtectedRoute Component={AllUser} requiredRole="admin" />
            }
          /> */}
          {/* <Route
            path="/admin/companyinformation"
            element={
              <ProtectedRoute Component={AllUser} requiredRole="admin" />
            }
          /> */}
          <Route path="/admin/companyinformation" element={<AllUser />} />

          {/*------------------------------- Company Route----------------------------- */}
          <Route
            path="/company"
            element={
              <ProtectedRoute
                component={CompanyDashboard}
                requiredRole="company"
              />
            }
          />
          <Route
            path="/company/addjob"
            element={
              <ProtectedRoute component={AddJob} requiredRole="company" />
            }
          />
          <Route
            path="/updatejob/:id"
            element={
              <ProtectedRoute component={EditJob} requiredRole="company" />
            }
          />
          <Route
            path="/addquiz/:id"
            element={
              <ProtectedRoute component={AddQuiz} requiredRole="company" />
            }
          />
          <Route
            path="/jobquiz/:id"
            element={
              <ProtectedRoute component={JobQuiz} requiredRole="company" />
            }
          />
          <Route path="company/rejected" element={<RejectedApplicant />} />

          <Route path="company/shortlist" element={<AcceptApplicant />} />

          <Route path="/quizresult/:id" element={<QuizResult />} />
          <Route path="/administrative" element={<Administrative />} />
          <Route path="/education" element={<Education />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route
            path="/informationTechnology"
            element={<InformationTechnology />}
          />
          <Route path="/other" element={<Other />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          {/* <Route
            path="/company"
            element={<ProtectedRoute Component={CompanyDashboard} />}
          /> */}
          <Route path="/company/applicant" element={<ApplicantsJob />} />
          <Route path="/company/job" element={<MyJob />} />
          <Route path="/company/shortlist" element={<ShortlistCandidates />} />
          <Route path="/alljobs" element={<AllJobs />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
          <Route path="/jobapply/:id" element={<JobApply />} />
          <Route path="/quiz/:id" element={<Assestement />} />
          <Route path="/alluser" element={<AllUser />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
};

export default App;
