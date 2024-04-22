import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import ProviderRegister from "./pages/ProviderRegister.jsx";
import Login from "./pages/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "./components/Filter.jsx";
import ServiveRate from "./components/ServiceRate.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/provider-register" element={<ProviderRegister/>} />
          <Route path="/filter" element={<Filter/>} />
          <Route path="/serviceRate" element={<ServiveRate/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/user-dashboard" element={<UserDashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
