import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-red-600 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50">
        
      </div>
      
      {/* Content container */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Welcome to Blood
          <br />
          <span className="bg-gradient-to-r from-red-200 to-white bg-clip-text text-transparent">
            Donors Organization
          </span>
        </h1>
        
        {/* Optional subtitle */}
        <p className="text-xl md:text-2xl text-red-100 mt-8 mb-12 max-w-2xl mx-auto">
          Connecting life savers with those in need
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300">
            Join Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;