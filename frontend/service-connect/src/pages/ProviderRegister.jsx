import React, { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router-dom';


export default function ProviderRegister() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    service: "",
    city: "", 
    nic: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your server with the form data
    try {
      const response = await axios.post("http://localhost:8080/api/v1/sp/", formData);
      console.log("Form data submitted successfully:", response.data);
      alert(response.data.message);
      navigate('/signin');
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="h-100 white">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Register</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1m">
                          First name
                        </label>
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                          placeholder="Enter first name"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1n">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                          placeholder="Enter last name"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                        <input
                          type="text"
                          id="form3Example97"
                          className="form-control form-control-lg"
                          placeholder="example@gmail.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1n">
                          Contact No
                        </label>
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                          placeholder="07X XXXX XXX"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example9">
                      Create password
                    </label>
                    <input
                      type="password"
                      id="form3Example9"
                      className="form-control form-control-lg"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example8">
                      Address
                    </label>
                    <input
                      type="text"
                      id="form3Example8"
                      className="form-control form-control-lg"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select className="select" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Service</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Carpenter">Carpenter</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select className="select" name="city" value={formData.city} onChange={handleChange}>
                        <option value="">City</option>
                        <option value="Galle">Galle</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Kilinochchi">Kilinochchi</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example90">
                      NIC no
                    </label>
                    <input
                      type="text"
                      id="form3Example90"
                      className="form-control form-control-lg"
                      placeholder="NIC"
                      name="nic"
                      value={formData.nic}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                    <button
                      type="submit"
                      className="btn btn-light btn-lg"
                      style={{ backgroundColor: "#1E2772", color: "white" }}
                    >
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
