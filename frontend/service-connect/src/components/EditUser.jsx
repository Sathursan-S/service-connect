import { useState } from "react";
import axios from "axios";

export default function EditUser({ user }) {
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.city,
    address: user.address,
    phoneNumber: user.phoneNumber,
    password: user.password,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
console.log(formData);
    try {
      await axios.put(`http://localhost:8080/api/v1/user/${user.username}`, formData);
      alert("Save successful!");
    } catch (error) {
      alert("Save failed. Please try again.");
      console.error("Error updating user data:", error);
    }
  };
  return (
    <div className="flex flex-col mb-20 items-center bg-cyan-50 rounded">
      <div className="text-2xl font-bold m-5 text-slate-800">Register</div>
      <div className="flex flex-col items-center">
        <form
          className="flex flex-col items-center"
          onSubmit={handleRegistration}
        >
          <div className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80 ">
            Username: {formData.username}
          </div>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="Name"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="Email"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="City"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="Address"
          />
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="Phone Number"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-80"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
