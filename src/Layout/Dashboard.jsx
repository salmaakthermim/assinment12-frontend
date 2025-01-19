import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { useEffect } from "react";
import useAdmin from "../hook/UseAdmin";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  console.log("userInfo",userInfo);
  // const { user } = useAuth();
  // // const [isAdmin] = useAdmin();
  //   console.log("isAdmin",isAdmin);
  // console.log("fetchUser",fetchUser);
      // i want to fetch api for user data with use effect


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-red-500 text-white w-64 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static h-full`}
      >
        <div className="p-4 text-2xl font-bold border-b hover:bg-red-400">
          Dashboard
        </div>
        <nav className="p-4">
          <ul>
            <li>
              <Link
                to="dashboard-Home"
                className="block py-2 px-4 rounded hover:bg-red-400"
              >
                Dashboard Home
              </Link>
              <Link
                to="my-donation-requests"
                className="block py-2 px-4 rounded hover:bg-red-400"
              >
                My-donation-requests
              </Link>
              <Link
                to="Create-Donation-Request"
                className="block py-2 px-4 rounded hover:bg-red-400"
              >
                Create Donation Request
              </Link>
              <Link
                to="all-users"
                className="block py-2 px-4 rounded hover:bg-red-400"
              >
                All Users
              </Link>
            </li>
            <li>
              <Link
                to="profile"
                className="block py-2 px-4 rounded hover:bg-red-400"
              >
                Profile
              </Link>
            </li>

            <div className='divider '></div>
            <li className="block py-2 px-4 rounded hover:bg-red-400"><NavLink to="/">  HOME</NavLink></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>



      {/* Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="p-4 overflow-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
