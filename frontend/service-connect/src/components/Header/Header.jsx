import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";


function Header() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    dispatch(clearUser());
  }


  return (
    <header className="bg-slate-400 shadow-sm h-auto justify-center">
      <div className="flex justify-between items-center max-w-9xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-white">service</span>
            <span className="text-yellow-300">Connect</span>
          </h1>
        </Link>

        <div className="flex items-center">
        {user.username ? ( 
            <>
              
              <Link to={user.role === "PRO"? "/dashboard":"/user-dashboard"}>
                <a className="text-white font-bold text-sm sm:text-xl mr-4">
                  Dashboard
                </a>
              </Link>
          
                <button onClick={handleLogout} className="rounded-full bg-slate-700 hover:bg-slate-200 text-white hover:text-black font-bold py-2 px-4 ">
                  logout
                </button>
              
            </>
          ) : (<>
          <Link to="/provider-register">
            <a className="text-white font-bold text-sm sm:text-xl mr-4">Join as Provider</a>
          </Link>
          <Link to="/signin">
            <button className="rounded-full bg-slate-700 hover:bg-slate-200 text-white hover:text-black font-bold py-2 px-4 ">
              Sign In
            </button>
          </Link>
          </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
