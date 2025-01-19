import React from 'react';

const VolunteerSection = () => {
  const volunteers = [
    {
      name: "Alexander GARY",
      role: "Co-Founder",
      imageUrl: "	https://templates.bwlthemes.com/blood_donation/v_2/images/team_9.jpg", // Replace with the actual image URL
    },
    {
      name: "Melissa Munoz",
      role: "Founder",
      imageUrl: "	https://templates.bwlthemes.com/blood_donation/v_2/images/team_6.jpg", // Replace with the actual image URL
    },
    {
      name: "John Abraham",
      role: "Manager",
      imageUrl: "https://templates.bwlthemes.com/blood_donation/v_2/images/team_7.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <div style={{
       
        backgroundImage: "url(https://templates.bwlthemes.com/blood_donation/v_2/images/team_feat_bg.jpg)",
      }}  className="py-20 object-cover ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">OUR VOLUNTEERS</h2>
        <p className="mt-4 text-white text-5xl font-bold">The volunteers who give their time and talents help to fulfill our mission.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {volunteers.map((volunteer, index) => (
          <div key={index} className="m-4 p-6 bg-white rounded-lg shadow-md w-80 text-center">
            <img
              className="  object-cover rounded-full mb-4"
              src={volunteer.imageUrl}
              alt={volunteer.name}
            />
            <h3 className="text-xl font-semibold">{volunteer.name}</h3>
            <p className="text-gray-500">{volunteer.role}</p>
            <div className="mt-4 flex justify-center">
              <a href="#" className="mx-2 text-blue-500 hover:underline">
                LinkedIn
              </a>
              <a href="#" className="mx-2 text-blue-500 hover:underline">
                Portfolio
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
        >
          BECOME A VOLUNTEER
        </a>
      </div>
    </div>
  );
};

export default VolunteerSection;