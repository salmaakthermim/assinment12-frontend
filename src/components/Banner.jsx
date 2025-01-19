import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {


  return (
    <div  style={{
        backgroundImage: "url(https://i.ibb.co.com/rbgPvpm/blood-donation-guidelines-hero.jpg)",
      }}  className="relative  text-white py-16 px-6">
    {/* Background */}
    <div className="absolute inset-0 bg-red-300 opacity-30"></div>

    <div className="relative container mx-auto flex flex-col items-center text-center">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-4">
        <img
          src="https://i.ibb.co.com/rbgPvpm/blood-donation-guidelines-hero.jpg" // Replace with your logo URL
          alt="Blood Bank Logo"
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-2xl text-white  font-bold">Blood Bank</h2>
      </div>

      {/* Heading */}
      <h1 className="text-5xl text-red-500  font-extrabold mb-4">
        DONATE <span className="text-red-500 ">YOUR BLOOD</span>
      </h1>

      {/* Event Details */}
      <p className="text-lg text-white  mb-6">
        January 20<sup> Mo</sup>, 2025 - 11:00 PM
      </p>

      <p className="text-base text-white mb-8 max-w-md mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
        lorem eu libero feugiat aliquet volutpat habitant.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="/register"
          className="bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Join as a Donor
        </a>
       <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"><Link to='/search'> Search Donors</Link></button>
      </div>
    </div>

    {/* Illustration */}
    <div className="absolute bottom-0 right-0 w-1/2">
      <img
        src="https://i.ibb.co.com/rbgPvpm/blood-donation-guidelines-hero.jpg" // Replace with a blood bag or hand illustration URL
        alt="Blood Donation Illustration"
        className="w-12 h-12 rounded-full"
      />
    </div>
  </div>
  );
};

export default Banner;
