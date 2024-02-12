import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { resetpassroute } from '../utils/ApiRoutes'
import { toast } from 'react-toastify'
import axios from 'axios'

function ResetPass() {
const navigate = useNavigate()

const [newPassword, setNewPassword] = useState("")
const [newConfirmPassword, setNewConfirmPassword] = useState("")
const {id ,token,role} = useParams()

const toastOptions = {
position:'bottom-right',
autoClose:7000,
draggable:true,
pauseOnHover:true,

}




const handeValidation = ()=>{
    if(newPassword !== newConfirmPassword){
      toast.error("Password and Confirm Password should be same",toastOptions)
      return false
    }
    else if(newPassword.length<6){
      toast.error("Password length should be greater than 6",toastOptions)
      return false
    }
    return true
  }

const handleSubmit =async (event)=>{
    try {
        event.preventDefault()
        console.log(resetpassroute)
        if(handeValidation()){
            const response = await axios.post(`${resetpassroute}/${role}/${id}/${token}`,{
                newPassword
              })
              // console.log(response)
              if(response.data.status===false){
                toast.error(response.data.msg ,toastOptions)
              }
              if(response.data.status===true){
                toast.success(response.data.msg ,toastOptions)
                navigate("/login")
              }

        }
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">

<form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className="">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Set Your New Password</h2>
        <div className="">
        <label htmlFor="" className="block text-sm font-medium text-gray-700"> Password</label>
          <input
            type='password'
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type='password'
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={(e) => {
              setNewConfirmPassword(e.target.value);
            }}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mid-line">
          <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Reset Password
          </button>
        </div>
    </form>


   </div>
  )
}

export default ResetPass