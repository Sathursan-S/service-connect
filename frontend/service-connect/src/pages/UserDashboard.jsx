import React, { useState, useEffect } from "react";
import { setUser } from "../components/Redux/userSlice";
import axios from "axios";
import EditUser from "../components/EditUser";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../components/Redux/userSlice";

function UserDashboard() {
  const [userData, setUserData] = useState({});
  const [bookings, setBookings] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // Fetch user data and bookings when the component mounts
    fetchUserData();
    fetchBookings();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/${user.username}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/request/user/${user.username}`
      );
      setBookings(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  //   const handleUpdateProfile = async () => {
  //     console.log(userData);
  //     // Implement the update profile logic here
  //     try {
  //       await axios.put("http://localhost:8080/api/v1/user/", userData);
  //       setIsEditMode(false);
  //     } catch (error) {
  //       console.error("Error updating user data:", error);
  //     }
  //   };

  const openEditProfileModal = () => {
    setIsEditMode(true);
  };

  const closeEditProfileModal = () => {
    setIsEditMode(false);
  };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    axios
      .delete(`http://localhost:8080/api/v1/user/${user.username}`)
      .then((res) => {
        console.log(res);
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => console.log(err));
    setDeleteModalOpen(false); // Close the modal after confirming
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center p-6 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <button
          onClick={openEditProfileModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4"
        >
          Edit Profile
        </button>
        {isEditMode && (
          <>
            <EditUser user={userData} />

            <button
              onClick={closeEditProfileModal}
              className="justify-self-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </>
        )}
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete Account
        </button>

        {isDeleteModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-md">
              <p>Are you sure you want to delete your account?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={confirmDeleteAccount}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        <h3 className="text-xl font-semibold mt-8">Your Bookings</h3>
        <ul className="list-disc pl-8 mt-2">
          {bookings.map((booking) => (
            <li
              key={booking.reqId}
              className="bg-white shadow-lg p-4 rounded-md"
            >
              <p className="text-lg font-semibold">
                Booking ID: {booking.reqId}
              </p>
              <p className="text-gray-700">Provider: {booking.serviceProvider}</p>
              <p className="text-gray-700">Date: {booking.date}</p>
              <p className="text-gray-700">Status: {booking.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;
