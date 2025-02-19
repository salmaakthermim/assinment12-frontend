import React from "react";

const bloodRequests = [
  {
    id: 1,
    image: "https://i.ibb.co.com/XWbDrX9/image.jpg",
    title: "Start Your RapidPass",
    description:
      "Donating blood today? Complete your pre-reading and health history questions online before visiting your blood drive location.",
    buttonText: "START NOW",
    buttonLink: "#",
  },
  {
    id: 2,
    image: "	https://i.ibb.co.com/1sKy0jh/image.jpg",
    title: "Am I Eligible to Donate Blood?",
    description:
      "Are you eligible for blood donation? Find out about the eligibility requirements to donate blood.",
    buttonText: "LEARN MORE ABOUT ELIGIBILITY",
    buttonLink: "#",
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/1315395944/photo/experienced-phlebotomist-preparing-a-woman-for-blood-draw.jpg?s=612x612&w=0&k=20&c=MX1sfSztBJIiCW0wOqxDWxLuXWOxrlTvOO6azfF2buY=",
    title: "Help Sickle Cell Patients",
    description:
      "Blood donors who are Black play a critical role in helping sickle cell disease patients who need a better blood match.",
    buttonText: "LEARN MORE ABOUT SICKLE CELL",
    buttonLink: "#",
  },
];

const RecentBloodRequests = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Recent Blood Request</h2>
      <div className="flex overflow-x-auto text-center space-x-6 scrollbar-hide">
        {bloodRequests.map((request) => (
          <div
            key={request.id}
            className="min-w-[300px] bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={request.image}
              alt={request.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{request.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{request.description}</p>
            <a
              href={request.buttonLink}
              className="block bg-red-500 text-white text-center py-2 px-4 mt-3 rounded-md hover:bg-red-600"
            >
              {request.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBloodRequests;
