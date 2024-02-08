import React, { useState } from 'react';

const StudentRegistration = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [school, setSchool] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Registration Data:', { photo, name, bloodGroup, school, mobileNo, address, guardianPhone });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4"> Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">Photo</label>
            <input 
              type="file" 
              id="photo" 
              accept="image/*" 
              onChange={(e) => setPhoto(e.target.files[0])} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bloodGroup" className="block text-gray-700 font-bold mb-2">Blood Group</label>
            <input 
              type="text" 
              id="bloodGroup" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={bloodGroup} 
              onChange={(e) => setBloodGroup(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="school" className="block text-gray-700 font-bold mb-2">School / College</label>
            <input 
              type="text" 
              id="school" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={school} 
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNo" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
            <input 
              type="number" 
              id="mobileNo" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={mobileNo} 
              onChange={(e) => setMobileNo(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
            <textarea 
              id="address" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guardianPhone" className="block text-gray-700 font-bold mb-2">Guardian Phone Number</label>
            <input 
              type="number" 
              id="guardianPhone" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={guardianPhone} 
              onChange={(e) => setGuardianPhone(e.target.value)} 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
