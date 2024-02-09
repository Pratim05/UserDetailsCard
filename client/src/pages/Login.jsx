import axios from 'axios';
import React, { useState } from 'react';
import { loginRoute } from '../utils/ApiRoutes';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login= () => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 7000,
    draggable: true,
    pauseOnHover: true,
  };

const [email , setEmail ] = useState('')
const [password , setPassword ] = useState('')
const [role , setRole] = useState('')

const handleSubmit = async (event) => {
  try {
    event.preventDefault();
    if (handeValidation()) {
      // console.log("in Validation", loginRoute);
      const response = await axios.post(loginRoute, {
        role, email, password 
      });
      //console.log(response.data.status, response.data.msg)
      if (response.data.status === false) {
        toast.error(response.data.msg, toastOptions);
      }
      if (response.data.status === true) {
        toast.success(response.data.msg, toastOptions);
        console.log(response.data.msg);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const handeValidation = () => {
  if (password === "") {
    toast.error("Password is Required", toastOptions);
    return false;
  
  } else if (email === "") {
    toast.error("email is required", toastOptions);
    return false;
  }

  return true;
};


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit} >
          <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Select Your Role 
              </label>
              <select name="role" id="role" className='w-full px-3 py-2 border' onChange={(e)=>setRole(e.target.value)}>
                <option value="Student">Student</option>
                <option value="BizStudent">Student(Business)</option>
                <option value="Professional">Professional</option>
                <option value="BizProfessional">Professional(Business)</option>
                <option value="Researcher">Researcher</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
