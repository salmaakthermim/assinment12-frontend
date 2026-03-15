import React from "react";
import { FaHeartbeat, FaUserMd, FaTint, FaHandshake } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 md:py-32"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]"></div>

      <div className="relative container mx-auto text-center px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-500 font-bold tracking-widest uppercase mb-2">We Help People</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-md">Stay to Help You</h2>
          <p className="text-lg text-gray-300 mb-16 leading-relaxed">
            We are committed to providing safe and efficient blood donation services. Our expert team ensures a smooth and hassle-free experience for every donor.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300 border border-red-500/30">
              <FaHeartbeat className="text-3xl text-red-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-4xl font-extrabold mb-2">24+</span>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Years Experience</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300 border border-blue-500/30">
              <FaUserMd className="text-3xl text-blue-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-4xl font-extrabold mb-2">98</span>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Expert Staff</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300 border border-red-500/30">
              <FaTint className="text-3xl text-red-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-4xl font-extrabold mb-2">50k+</span>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Blood Pints/Month</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300 border border-green-500/30">
              <FaHandshake className="text-3xl text-green-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-4xl font-extrabold mb-2">33</span>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Cooperations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
