import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import CustomerServiceSection from "./pages/CustomerService";
import Help from "./pages/Help";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
import BusinessStudentReg from "./pages/BusinessStudentReg";
import ProfessionalReg from "./pages/ProfessionalReg";
import ResearcherReg from "./pages/ResearcherReg"
import Navbar from "./pages/Navbar";
import BizProfessionalReg from "./pages/BizProfessionalReg";
import IdCardView from "./pages/IdCardView";
import Dashboard from "./pages/Dashboard";
import ResetPass from "./components/ResetPass";

function App() {
  return (

   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/customerservice" element = {<CustomerServiceSection/>}/>
      <Route path="/Help" element={<Help/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/resetpass/:role/:id/:token" element = {<ResetPass/>}/>

      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path="/StudentRegistration" element={<StudentRegistration/>}/>

      <Route path="/BusinessStudentReg" element={<BusinessStudentReg/>}/>
      <Route path="/ProfessionalReg" element={<ProfessionalReg/>}/>
      <Route path="/BizProfessionalReg" element={<BizProfessionalReg/>}/>
      <Route path="/ResearcherReg" element={<ResearcherReg/>}/>   
      <Route path="/idCardView" element={<IdCardView/>}/>   
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
