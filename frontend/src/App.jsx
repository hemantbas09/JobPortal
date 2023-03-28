import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ResetPassword,Login, Navbar, Footer, AuthenticationForm,SendPasswordResetEmail } from './component/index.js'
import {Assestement,JobDetails, Home, AdminDashboard, CandidateDashboard, CompanyDashboard, AddJob, ApplicantsJob, MyJob, Package, ShortlistCandidates } from './pages/index.js'

// import workImg from './images/work.jpg'


const App = () => {
  const Menu=[]
  return (
    <>

      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<AuthenticationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<CandidateDashboard />} />
          <Route path="/forgetpassword" element={<SendPasswordResetEmail/>} />
          <Route path="api/user/reset-password/:id/:token" element={< ResetPassword/>} />
          
          {/* Company */}

          <Route path="/company" element={< CompanyDashboard />} />
          <Route path="/company/addjob" element={< AddJob />} />
          <Route path="/company/Applicant" element={< ApplicantsJob />} />
          <Route path="/company/job" element={< MyJob />} />
          <Route path="/company/package" element={< Package />} />
          <Route path="/company/shortlist" element={< ShortlistCandidates />} />
      
          <Route path="/jobdetails" element={<  JobDetails />} />
          <Route path="/quiz" element={<      Assestement />} />


        </Routes >
      </BrowserRouter>


      <Footer />
    </>
  )
}

export default App