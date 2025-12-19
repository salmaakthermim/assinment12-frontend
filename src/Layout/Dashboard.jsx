
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import useUserRole from "../hook/useUserRole";
import { FaBars, FaTimes, FaHome, FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [userRole] = useUserRole(user?.email);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => navigate("/login")).catch((error) => console.error("Logout Error:", error.message));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-blue-400 text-white w-64 lg:static fixed h-full transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-40`}>
        <div className="p-4 text-2xl font-bold border-b">Dashboard </div>
        <nav className="p-4">
          <ul>
            {userRole === "donor" && (
              <>
                <Link to="/dashboard/dashboard-Home" className="block py-2 px-4 rounded hover:bg-blue-600">Dashboard Home</Link>
                <Link to="/dashboard/my-donation-requests" className="block py-2 px-4 rounded hover:bg-blue-600">My Donation Requests</Link>
                <Link to="/dashboard/Create-Donation-Request" className="block py-2 px-4 rounded hover:bg-blue-600">Create Donation Request</Link>
              </>
            )}
            {userRole === "admin" && (
              <>
                <Link to="/dashboard/admin-Home" className="py-2 px-4 rounded flex items-center gap-1 hover:bg-blue-600"><FaHome /> Admin Home</Link>
                <Link to="/dashboard/all-users" className="py-2 px-4 rounded flex items-center gap-1 hover:bg-blue-600"><FaUsers /> All Users</Link>
                <Link to="/dashboard/all-blood-donation-requests" className="block py-2 px-4 rounded hover:bg-blue-600">All Blood Donation Requests</Link>
              </>
            )}
            {userRole === "volunteer" && (
              <>
                <Link
                  to="/dashboard/volunteer-Home"
                  className="py-2 px-4 rounded flex items-center gap-1 hover:bg-blue-600"
                >
                  <FaHome /> Volunteer Home
                </Link>

                <Link
                  to="/dashboard/volunterr-all-blood-donation-request"
                  className="block py-2 px-4 rounded hover:bg-blue-600"
                >
                  All Blood Donation Requests
                </Link>

                <Link
                  to="/dashboard/volunterr-content-management"
                  className="block py-2 px-4 rounded hover:bg-blue-600"
                >
                  Content Management
                </Link>
              </>
            )}

            <div className="divider"></div>
            <li><Link to="/" className="flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-600"><FaHome /> Home</Link></li>
            <li><Link to="profile" className="flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-600"><FaUser /> Profile</Link></li>
            <li>
              <button onClick={handleLogOut} className="flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-600 w-full text-left">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-4 bg-white border-b flex justify-between items-center">
          <button className="lg:hidden text-gray-600 text-2xl" onClick={() => setSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? <FaTimes /> : <FaBars />}</button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>

        <div className="p-4 overflow-auto flex-1"><Outlet />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

