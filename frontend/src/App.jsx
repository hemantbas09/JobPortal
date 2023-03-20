import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, AuthenticationForm } from './component/index.js'
import { Home, AdminDashboard, CandidateDashboard, CompanyDashboard } from './pages/index.js'
// import Home from './pages/Home.jsx'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nm" element={<AuthenticationForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<CandidateDashboard />} />
          <Route path="/company" element={< CompanyDashboard />} />
        </Routes >
      </BrowserRouter>


      <Footer />
    </>
  )
}

export default App