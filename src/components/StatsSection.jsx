import React from "react";

const StatsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: `url('https://media.gettyimages.com/id/1496758825/photo/nurse-taking-a-patients-blood-sample.jpg?s=612x612&w=gi&k=20&c=kR6Q-35SOKTSpVoKzvQaa-sT_SpcTzsi3kO71bGObGQ=')`, // Replace with your actual image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto text-center px-6">
        <p className="text-red-400 font-semibold uppercase">We Help People</p>
        <h2 className="text-4xl font-bold mt-2">Stay to Help You</h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          We are committed to providing safe and efficient blood donation services. Our expert team ensures a smooth and
          hassle-free experience for every donor.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">24+</span>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">98</span>
            <p className="text-gray-300">Expert Staff</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">50+</span>
            <p className="text-gray-300">Blood Pints/Month</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">33</span>
            <p className="text-gray-300">Cooperations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
