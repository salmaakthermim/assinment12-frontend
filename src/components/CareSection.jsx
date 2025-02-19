import React from 'react';

const CareSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 ">
      <div className="flex-1 flex justify-center mb-6 lg:mb-0">
        <img
          className="object-cover rounded-lg w-full h-full"
          src="https://templates.bwlthemes.com/blood_donation/v_2/images/about_feat_bg.jpg" // Replace with the actual image URL
          alt="Hospital Scene"
        />
      </div>
      <div className="flex-1 lg:pl-8">
        <h2 className="text-3xl font-bold ">BE HAPPY & KEEP SMILING!</h2>
        <hr className="my-4 border-red-500 w-16" />
        <p className="">
          Fostering strong relationships with our clients and their families is at the core of everything we do. Our friendly and
          professional team of care coordinators work hard to find the right care giver for each client.
        </p>
      </div>
    </div>
  );
};

export default CareSection;