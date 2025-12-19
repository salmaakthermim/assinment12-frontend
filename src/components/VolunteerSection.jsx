import React from 'react';

const VolunteerSection = () => {
  const volunteers = [
    {
      name: "Nora Khaypsie",
      role: "Co-Founder",
      image: "https://cdn.create.vista.com/api/media/small/80152446/stock-photo-smiling-female-doctor-holding-medical-records", // Replace with actual image URL
    },
    {
      name: "Alex Joshan Deo",
      role: "Co-Founder",
      image: "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=",
    },
    {
      name: "Joshan Khaypsia",
      role: "Co-Founder",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    },
  ];

  return (
    <section className="py-12  ">
     <div className='w-11/12'>
     <div className="text-center">
        <h3 className="text-red-500 uppercase font-bold">Team Members</h3>
        <h2 className="text-3xl font-bold">Meet Volunteers</h2>
      </div>
      <div className="lg:flex justify-center gap-8 mt-8">
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center w-64"
          >
            <img
              src={volunteer.image}
              alt={volunteer.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{volunteer.name}</h3>
            <p className="text-gray-500">{volunteer.role}</p>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default VolunteerSection;