import React, { useState } from 'react';

const BussinesStudentRegistration = () => {
  const [photo, setPhoto] = useState('');
  const [userName, setUserName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your registration logic here, such as sending the data to a backend server
    console.log('Registration Data:', { photo, userName, businessName, bloodGroup, mobileNo, address, emergencyPhone, website });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4"> Student Register</h2>
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
            <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="userName" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">Business Name</label>
            <input 
              type="text" 
              id="businessName" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={businessName} 
              onChange={(e) => setBusinessName(e.target.value)} 
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
              required 
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
            <label htmlFor="emergencyPhone" className="block text-gray-700 font-bold mb-2">Emergency Phone Number</label>
            <input 
              type="number" 
              id="emergencyPhone" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={emergencyPhone} 
              onChange={(e) => setEmergencyPhone(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-bold mb-2">Website Link</label>
            <input 
              type="url" 
              id="website" 
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
              value={website} 
              onChange={(e) => setWebsite(e.target.value)} 
              required 
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

export default BussinesStudentRegistration;
