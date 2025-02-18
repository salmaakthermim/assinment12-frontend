import React, { useState } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth(); 
  const [isDropdownOpen, setDropdownOpen] = useState(false); 
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
    <nav   className="navbar bg-red-500 ">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            className="h-16 w-40 border-none"
            src="https://i.ibb.co.com/kKfNLPc/images-1.jpg"
            alt="Logo"
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="/" className="hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="/donation-requests" className="hover:text-gray-800">
              Donation Requests
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-800">
              Blog
            </a>
          </li>

          {user ? (
            <>
              <li>
                <a href="/funding-links" className="hover:text-gray-800">
                  Funding Links
                </a>
              </li>

              {/* User Avatar with Dropdown */}
              <li className="relative dropdown-menu">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown
                  className="flex items-center space-x-2 focus:outline-none"
                >
                 <button>LogOut</button>
                 
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul
                    style={{ zIndex: 30 }}
                    className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md"
                  >
                    <li>
                      <a
                        href="/dashboard"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <li>
              <a href="/login" className="hover:text-gray-800">
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
