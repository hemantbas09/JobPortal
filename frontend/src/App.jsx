import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, AuthenticationForm } from './component/index.js'
import { Home, AdminDashboard, CandidateDashboard, CompanyDashboard, AddJob, ApplicantsJob, MyJob, Package, ShortlistCandidates } from './pages/index.js'

// import workImg from './images/work.jpg'


const App = () => {
  const Menu=[]
  return (
    <>

      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nm" element={<AuthenticationForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<CandidateDashboard />} />


          {/* Company */}

          <Route path="/company" element={< CompanyDashboard />} />
          <Route path="/company/addjob" element={< AddJob />} />
          <Route path="/company/Applicant" element={< ApplicantsJob />} />
          <Route path="/company/job" element={< MyJob />} />
          <Route path="/company/package" element={< Package />} />
          <Route path="/company/shortlist" element={< ShortlistCandidates />} />

        </Routes >
      </BrowserRouter>


      <Footer />
    </>
  )
}

export default App