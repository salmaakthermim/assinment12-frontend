import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import useUserRole from "../hook/useUserRole";
import { 
  FaBars, FaTimes, FaHome, FaSignOutAlt, FaUser, FaUsers,
  FaHandHoldingHeart, FaPlusCircle, FaListAlt, FaRegHeart,
  FaFileAlt, FaTachometerAlt
} from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [userRole] = useUserRole(user?.email);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((error) => console.error("Logout Error:", error.message));
  };

  const navItemClass = (path) => {
    const isActive = location.pathname.includes(path);
    return `flex items-center gap-3 py-3 px-6 rounded-xl transition-all duration-300 font-medium ${
      isActive
        ? "bg-red-500 text-white shadow-md shadow-red-500/30"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`bg-gray-900 text-white w-72 fixed lg:static h-full transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40 flex flex-col shadow-2xl`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-red-600 to-red-400 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
              <FaRegHeart className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold tracking-wide">Donate<span className="text-red-500">Life</span></span>
          </Link>
          <button 
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          
          <div className="mb-8 px-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Dashboards</p>
            
            {userRole === "donor" && (
              <div className="space-y-2">
                <Link to="/dashboard/dashboard-Home" className={navItemClass("dashboard-Home")}>
                  <FaTachometerAlt /> <span>Donor Dashboard</span>
                </Link>
                <Link to="/dashboard/my-donation-requests" className={navItemClass("my-donation-requests")}>
                  <FaListAlt /> <span>My Requests</span>
                </Link>
                <Link to="/dashboard/Create-Donation-Request" className={navItemClass("Create-Donation-Request")}>
                  <FaPlusCircle /> <span>Create Request</span>
                </Link>
              </div>
            )}

            {userRole === "admin" && (
              <div className="space-y-2">
                <Link to="/dashboard/admin-Home" className={navItemClass("admin-Home")}>
                  <FaTachometerAlt /> <span>Admin Dashboard</span>
                </Link>
                <Link to="/dashboard/all-users" className={navItemClass("all-users")}>
                  <FaUsers /> <span>Manage Users</span>
                </Link>
                <Link to="/dashboard/all-blood-donation-requests" className={navItemClass("all-blood-donation")}>
                  <FaHandHoldingHeart /> <span>All Requests</span>
                </Link>
              </div>
            )}

            {userRole === "volunteer" && (
              <div className="space-y-2">
                <Link to="/dashboard/volunteer-Home" className={navItemClass("volunteer-Home")}>
                  <FaTachometerAlt /> <span>Volunteer Home</span>
                </Link>
                <Link to="/dashboard/volunterr-all-blood-donation-request" className={navItemClass("volunterr-all-blood-donation-request")}>
                  <FaHandHoldingHeart /> <span>All Requests</span>
                </Link>
                <Link to="/dashboard/volunterr-content-management" className={navItemClass("volunterr-content-management")}>
                  <FaFileAlt /> <span>Content Mgmt</span>
                </Link>
              </div>
            )}
          </div>

          <div className="px-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Settings</p>
            <div className="space-y-2">
              <Link to="/" className="flex items-center gap-3 py-3 px-6 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium">
                <FaHome /> <span>Back to Home</span>
              </Link>
              <Link to="profile" className={navItemClass("profile")}>
                <FaUser /> <span>My Profile</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer (Logout) */}
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogOut} 
            className="flex items-center justify-center gap-2 py-3 px-4 w-full rounded-xl bg-gray-800 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold shadow-sm"
          >
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 shadow-sm z-10">
          <div className="flex items-center">
            <button 
              className="lg:hidden text-gray-500 hover:text-red-500 transition-colors mr-6 p-2 rounded-lg hover:bg-gray-100" 
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 capitalize hidden sm:block">
              {userRole ? `${userRole} Portal` : 'Dashboard'}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800">{user?.displayName || "User"}</p>
                <p className="text-xs text-gray-500 font-medium capitalize">{userRole || "Guest"}</p>
             </div>
             <img 
               src={user?.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"} 
               alt="Profile" 
               className="w-11 h-11 rounded-full border-2 border-red-500 shadow-sm object-cover"
             />
          </div>
        </header>

        {/* Dynamic Content Outlet */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

