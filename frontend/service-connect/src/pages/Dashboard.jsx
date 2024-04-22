import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../components/Redux/userSlice";
import axios from "axios";

export default function Dashboard() {
  window.addEventListener('beforeunload', function (e) {
    // Prompt a confirmation message to prevent page refresh
    e.preventDefault();
    e.returnValue = '';  
  });

  const user = useSelector((state) => state.user.user);

  const [newRequests, setNewRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(user);

  //get current user
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/sp/${user.username}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  // get requats from backend
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/request/sp/${user.username}`)
      .then((res) => {
        setNewRequests(res.data.filter((request) => request.status === "new"));
        setAcceptedRequests(
          res.data.filter((request) => request.status === "accepted")
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    axios
      .delete(`http://localhost:8080/api/v1/sp/${user.username}`)
      .then((res) => {
        console.log(res);
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => console.log(err));
    setDeleteModalOpen(false); // Close the modal after confirming
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Service Provider Dashboard
      </h2>

      {/* Edit and Delete Account Buttons */}
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full">
          Edit Account
        </button>
    
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete Account
        </button>
      </div>
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

      {/* New Requests Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">New Requests</h3>
        <ul>
          {newRequests.map((request) => (
            <li key={request.id} className="mb-2">
              <strong>Customer:</strong> {request.customerName}
              <br />
              <strong>Details:</strong> {request.requestDetails}
            </li>
          ))}
        </ul>
      </div>

      {/* Accepted Requests Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Accepted Requests</h3>
        <ul>
          {acceptedRequests.map((request) => (
            <li key={request.id} className="mb-2">
              <strong>Customer:</strong> {request.customerName}
              <br />
              <strong>Details:</strong> {request.requestDetails}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
