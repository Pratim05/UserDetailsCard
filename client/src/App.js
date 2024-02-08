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
import ResearchRegistration from "./pages/ResearchRegistation"
import Navbar from "./pages/Navbar";

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
      <Route path="/StudentRegistration" element={<StudentRegistration/>}/>
      <Route path="/BusinessStudentReg" element={<BusinessStudentReg/>}/>
      <Route path="/ProfessionalReg" element={<ProfessionalReg/>}/>
      <Route path="/ResearchRegistration" element={<ResearchRegistration/>}/>   
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
