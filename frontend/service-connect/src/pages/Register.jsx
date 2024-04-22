import { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router-dom';

export default function register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    address: "",
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/", formData);
      console.log(response);
      alert('Registration was successful!');
      navigate('/signin');
      // Handle success (e.g., show a success message or redirect to login page)
    } catch (error) {
      alert('Registration failed. Please try again.');
      // Handle registration error (e.g., show an error message)
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
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="Name"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-80"
            type="text"
            placeholder="Username"
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
