import React from 'react'
import axios from 'axios'
import { fetchUserListDataRoute } from '../utils/ApiRoutes'
import admin_profile from '../imgs/admin_profile.png'

function DashboardMenu({user,setDataof,setUserListData}) {

  

  const handleUserListRole = async(role)=>{

try {
  console.log(fetchUserListDataRoute,role)
  setDataof(role)
  const response = await axios.post(fetchUserListDataRoute, {role})
  setUserListData(response.data.UsersListData)
  console.log(response.data)

} catch (error) {
  console.log(error)
  
}

  }

  return (
    <div className='h-screen w-36 border-2 bg-slate-500'>
        <div className='flex flex-col items-center  gap-3 mb-10'>
            <img className='w-16' src={admin_profile} alt="admin_profile" />
            <div className='text-2xl  font-mono font-bold text-slate-700'>ADMIN</div>
            <div className='text-xs font-mono  text-white'>{user.email}</div>

        </div>
        <div>
            <ul className='flex flex-col gap-5 text-lg font-mono font-bold text-slate-300 pl-2'>
                <li tabIndex ={0} className='focus:text-blue-700 focus:border' onClick={()=>handleUserListRole('Student')}>Student</li>
                <li tabIndex ={0} className='focus:text-blue-700 focus:border' onClick={()=>handleUserListRole('BizStudent')}>Business Sudent</li>
                <li tabIndex ={0} className='focus:text-blue-700 focus:border' onClick={()=>handleUserListRole('Professional')}>Professional</li>
                <li tabIndex ={0} className='focus:text-blue-700 focus:border' onClick={()=>handleUserListRole('BizProfessional')}> Business Professional</li>
                <li tabIndex ={0} className='focus:text-blue-700 focus:border' onClick={()=>handleUserListRole('Researcher')}>Researcher</li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardMenu