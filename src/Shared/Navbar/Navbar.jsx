import React, { useState } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaMix } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger and close button
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import ThemeToggle from "../../components/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setDropdownOpen(false);
        navigate("/login");
      })
      .catch((error) => console.error("Logout Error:", error.message));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 z-30 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=300&auto=format&fit=crop"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <a href="/" className="text-2xl font-bold text-red-600">
            Blood
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-red-500 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/donation-requests" className="hover:text-red-500 transition-colors duration-200">
              Donation Requests
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-red-500 transition-colors duration-200">
              Blog
            </a>
          </li>

          {user && (
            <li>
              <a href="/funding-links" className="hover:text-red-500 transition-colors duration-200">
                Funding Links
              </a>
            </li>
          )}

          <ThemeToggle></ThemeToggle>

          {/* User Avatar with Dropdown */}
          {user ? (
            <li className="relative">
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-white"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              />

              {isDropdownOpen && (
                <ul
                  className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1 transition-all duration-200 transform origin-top-right"
                  style={{ zIndex: 30 }}
                >
                  <li>
                    <a
                      href="/dashboard"
                      className="block px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-50 hover:text-red-500 transition-colors"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-4 py-2.5 text-red-500 font-medium hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <a href="/login" className="px-5 py-2 md:px-6 md:py-2.5 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Login
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu  size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full left-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
        <ul className="flex flex-col items-center py-6 space-y-5 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/donation-requests" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Donation Requests
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
          </li>
          {user && (
            <li>
              <a href="/funding-links" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                Funding Links
              </a>
            </li>
          )}

          {user ? (
            <>
              <li>
                <a href="/dashboard" className="hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </a>
              </li>
              <li>
                <button onClick={handleLogOut} className="text-red-500 font-semibold hover:text-red-600 transition-colors">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <a href="/login" className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-md" onClick={() => setMenuOpen(false)}>
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
