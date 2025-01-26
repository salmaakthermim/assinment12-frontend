import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import useUserRole from "../hook/useUserRole";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
// import useUser from "../hook/useUser";

// import useUser from "../hooks/useUser";



const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useAuth()
  const [userRole] = useUserRole(user?.email)

  console.log(userRole)





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


              {userRole === 'donor' && (
                <>
                  <Link
                    to="/dashboard/dashboard-Home"
                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                    Dashboard Home
                  </Link>
                  <Link
                    to="/dashboard/my-donation-requests"
                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                    My-donation-requests
                  </Link>
                  <Link
                    to="/dashboard/Create-Donation-Request"
                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                    Create Donation Request
                  </Link>
                </>
              )}

              {userRole === 'admin' && (
                <>
                  <Link to="/dashboard/admin-Home"

                    className=" py-2 px-4 rounded flex items-center gap-1 hover:bg-red-400"
                  >
                    <FaHome/>
                   Admin Home
                  </Link>
                  <Link to="/dashboard/all-users"

                    className=" py-2 px-4 rounded flex items-center gap-1 hover:bg-red-400"
                  >
                    <FaUsers/>
                    All Users
                  </Link>
                  <Link to="/dashboard/all-blood-donation-requests"

                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                    All Blood Donation Requests
                  </Link>
                  <Link to="/dashboard/content-management"

                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                    Content Management
                  </Link>
                </>
              )}
              {userRole === 'volunteer' && (
                <>
                  <Link to="/dashboard/volunteer-Home"

                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                   Volunteer Home
                  </Link>
                  <Link to="/dashboard/volunterr-all-blood-donation-request"

                    className="block py-2 px-4 rounded hover:bg-red-400"
                  >
                  All Blood Donation Request
                  </Link>
                
                
                
                </>
              )}
            </li>


            <div className='divider '></div>
            <li><NavLink className="flex items-center gap-1 py-2 px-4 rounded hover:bg-red-400" to="/"> <FaHome/>  HOME</NavLink></li>

            <li>
              <Link
                to="profile"
                className="flex items-center gap-1 py-2 px-4 rounded hover:bg-red-400"
              >
                <FaUser/>
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
