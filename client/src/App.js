import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
   
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
