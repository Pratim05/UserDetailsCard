import React, { useState } from 'react'
import DashboardMenu from '../components/DashboardMenu'
import TableView from '../components/TableView'
import { useLocation } from 'react-router-dom'

function Dashboard() {
 const [dataOf,setDataof] = useState(undefined)

 const [userListData, setUserListData] = useState(undefined)
const location = useLocation()

const {user , role} = location.state

  return (
    <div className='flex flex-row gap-x-2.5'>       
        <DashboardMenu user = {user} setDataof = {setDataof} setUserListData={setUserListData}/>
        <TableView dataOf = {dataOf} userListData = {userListData}/>
    </div>
  )
}

export default Dashboard