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
  Reset,
  UserProfileById,
  CompanyProfileById,
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
  Appliedjob,
  AllJob,
} from "./pages/index.js";
import MyForm from "./component/Authentication/MyForm.jsx";
import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CompanyProfile from "./component/Comman/companyProfile";
import AdminProfile from "./component/Comman/AdminProfile";
import Profile from "./component/Comman/Profile";
import ViewCompanyProfile from "./component/Comman/viewCompanyProfile";
import ViewUserProfile from "./component/Comman/viewUserProfile";
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
          <Route path="/edit/profile" element={<Profile />} />
          <Route path="/newpassword/:id/:token" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Home />} />
          <Route path="/confirm" element={<ConfirmBox />} />
          <Route path="/edit/company/profile" element={<CompanyProfile />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/company/profile" element={<ViewCompanyProfile />} />
          <Route path="/user/profile/" element={<ViewUserProfile />} />
          <Route path="/profile/:id" element={<ViewUserProfile />} />
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
                Component={CompanyDashboard}
                requiredRole="company"
              />
            }
          />

          {/* <Route
            path="/reset/password"
            element={
              <ProtectedRoute
                Component={Reset}
                requiredRole={["candidate", "admin", "company"]}
              />
            }
          /> */}
          <Route path="/reset/password" element={<Reset />} />

          <Route
            path="/company/addjob"
            element={
              <ProtectedRoute Component={AddJob} requiredRole="company" />
            }
          />
          <Route
            path="/updatejob/:id"
            element={
              <ProtectedRoute Component={EditJob} requiredRole="company" />
            }
          />
          <Route
            path="/addquiz/:id"
            element={
              <ProtectedRoute Component={AddQuiz} requiredRole="company" />
            }
          />

          {/* <Route path="/addquiz/:id" element={<AddQuiz />} /> */}

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

          <Route path="/jobdetails/:id" element={<JobDetails />} />
          <Route
            path="/quiz/:id"
            element={
              <ProtectedRoute
                Component={Assestement}
                requiredRole="candidate"
              />
            }
          />
          <Route path="/company/applicant" element={<ApplicantsJob />} />
          <Route path="/company/job" element={<MyJob />} />
          <Route path="/company/shortlist" element={<ShortlistCandidates />} />
          <Route path="/alljobs" element={<AllJobs />} />
          <Route path="/jobapply/:id" element={<JobApply />} />

          <Route path="/alluser" element={<AllUser />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myappliedjob" element={<Appliedjob />} />
          <Route path="/admin/job/:id" element={<AllJob />} />

          <Route path="/company/profile/:id" element={<CompanyProfileById />} />
          <Route path="/user/profile/:id" element={<UserProfileById />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
};

export default App;
