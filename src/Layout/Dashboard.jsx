import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
 



  

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


            <div className='divider '></div>
            <li className="block py-2 px-4 rounded hover:bg-red-400"><NavLink to="/">  HOME</NavLink></li>

            <li>
              <Link
                to="profile"
                className="block py-2 px-4 rounded hover:bg-red-400"
              >
                Profile
              </Link>
            </li>

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
