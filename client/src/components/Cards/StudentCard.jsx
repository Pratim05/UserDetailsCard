import React from 'react'
import QRCode from 'react-qr-code'

function StudentCard({user, role, convertImageUrl}) {

let modifiedUser = structuredClone(user)
delete modifiedUser.image
const userString = JSON.stringify(modifiedUser, null, 2);

  return (
    <div
    className='flex justify-center items-center h-screen bg-gray-200 from-blue-300 to-blueGray-500'>
<div className='w-60 h-96 bg-gradient-to-br rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center mr-8'>
<div className="flex flex-col items-center space-y-2">
          <img className="h-32 w-32 rounded-full object-cover mb-4" src={convertImageUrl(user.image)} alt="Person" />
          <div className="text-center text-black">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-500">Blood Group: {user.bloodGroup}</p>
            <p className="text-gray-500">Phone Number: {user.mobileNo}</p>
            <p className="text-gray-500">School/College: {user.school}</p>
            
          </div>
        </div>

</div>
<div className='w-60 h-96 bg-gradient-to-br rounded-md overflow-hidden shadow-lg flex flex-col justify-center items-center'>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-32 h-32 bg-gray-200">{
            <QRCode
            title="Student Data"
            value={userString}
            bgColor='white'
            size={135}

            />
          }</div>
          <div className="text-center w-40 text-black">
            <p className="text-gray-500 text-wrap">Address: {user.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard