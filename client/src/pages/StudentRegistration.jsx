import React, { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/ApiRoutes";

const StudentRegistration = () => {
  const [photo, setPhoto] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [school, setSchool] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const toastOptions = {
    position: "bottom-right",
    autoClose: 7000,
    draggable: true,
    pauseOnHover: true,
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (handeValidation()) {
        const userRole = "student";
        console.log("in Validation", registerRoute)
        const response = await axios.post(
          registerRoute,
          {
            userRole,
            name,
            email,
            bloodGroup,
            school,
            mobileNo,
            address,
            guardianPhone,
            password,
            photo,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
         console.log(response.data.student)
        if (response.data.status === false) {
          toast.error(response.data.msg, toastOptions);
        }
        if (response.data.status === true) {
          toast.success(response.data.msg, toastOptions);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handeValidation = () => {
    if (password !== confirmpassword) {
      toast.error("Password and Confirm Password should be same", toastOptions);
      return false;
    } else if (name.length < 3) {
      toast.error("Username Should be greater than 3 character", toastOptions);
      return false;
    } else if (password.length < 6) {
      toast.error("Password length should be greater than 6", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Please enter a valid email", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4"> Student Registration</h2>
        <form className='overflow-y-auto h-96'
          enctype="multipart/form-data"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 font-bold mb-2"
            >
              Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bloodGroup"
              className="block text-gray-700 font-bold mb-2"
            >
             Email
            </label>
            <input
              type="text"
              id="email"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bloodGroup"
              className="block text-gray-700 font-bold mb-2"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="school"
              className="block text-gray-700 font-bold mb-2"
            >
              School or College
            </label>
            <input
              type="text"
              id="school"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setSchool(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobileNo"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="mobileNo"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guardianPhone"
              className="block text-gray-700 font-bold mb-2"
            >
              Guardian Phone Number
            </label>
            <input
              type="number"
              id="guardianPhone"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setGuardianPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmpassword"
              className="block text-gray-700 font-bold mb-2"
            >
             Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default StudentRegistration;
