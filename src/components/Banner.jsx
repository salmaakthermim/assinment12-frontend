import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {


  return (
    <div  style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=1920&auto=format&fit=crop)",
      }}  className="relative mt-[72px] text-white py-24 px-6 md:py-32 bg-cover bg-center overflow-hidden">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/80"></div>

    <div className="relative container mx-auto flex flex-col items-center text-center z-10">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
        <img
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=300&auto=format&fit=crop"
          alt="Blood Bank Logo"
          className="w-8 h-8 rounded-full border border-white/50"
        />
        <h2 className="text-lg text-white font-medium tracking-wide shadow-sm">DonateLife</h2>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-white">
        DONATE <span className="text-red-400">YOUR BLOOD</span>
      </h1>

      {/* Event Details */}
      <p className="text-xl md:text-2xl text-gray-200 font-medium mb-6 drop-shadow-md">
        January 20<span className="text-sm align-top">th</span>, 2025 - 11:00 AM
      </p>

      <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
        Your single donation can save up to three lives. Join our community of heroes today and make a real difference in the world.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/register"
          className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
        >
          Join as a Donor
        </Link>
       <Link to='/search' className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1">
         Search Donors
       </Link>
      </div>
    </div>
  </div>
  );
};

export default Banner;
