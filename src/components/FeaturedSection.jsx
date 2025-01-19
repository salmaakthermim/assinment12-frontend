// import React from 'react';

// const Featured = () => {
//     const cards = [
//         {
//             title: "BLOOD CONNECTS US ALL IN A SOUL",
//             date: "April 4, 2017",
//             comments: 10,
//             description: "In many countries, demand exceeds supply, and blood services face the challenge of making blood available for patients.",
//             imageUrl: "https://templates.bwlthemes.com/blood_donation/v_2/images/blog_thumb_1.jpg" // replace with your image path
//         },
//         {
//             title: "GIVE BLOOD AND SAVE THREE LIVES",
//             date: "April 4, 2017",
//             comments: 10,
//             description: "To save a life, you don't need to use muscle. By donating just one unit of blood, you can save three lives or even several lives.",
//             imageUrl: "https://templates.bwlthemes.com/blood_donation/v_2/images/blog_thumb_2.jpg" // replace with your image path
//         },
//         {
//             title: "WHY SHOULD I DONATE BLOOD?",
//             date: "April 4, 2017",
//             comments: 10,
//             description: "Blood is the most precious gift that anyone can give to another person. Donating blood not only saves the life of another person but also brings joy to the donor.",
//             imageUrl: "https://i.ibb.co.com/1sgHmTT/images-2.jpg" // replace with your image path
//         }
//     ];

//     return (
//         <div className="flex justify-around p-10 mx-auto ">
//             {cards.map((card, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md p-4 m-2 max-w-xs">
//                     <img src={card.imageUrl} alt={card.title} className="rounded-t-lg w-full h-48 object-cover" />
//                     <h2 className="text-xl font-bold mt-2">{card.title}</h2>
//                     <p className="text-gray-600 text-sm">{card.date} | {card.comments} Comments</p>
//                     <p className="mt-2 text-gray-700">{card.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Featured;

import React from 'react';

const FeaturedSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Meet Our Featured Donors</h2>
        <p className="text-center text-gray-600 mb-12">Discover the difference your donation can make!</p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Donor Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://i.ibb.co.com/1sgHmTT/images-2.jpg" alt="Donor Avatar" className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-600">Blood Group: A+</p>
              <p className="text-gray-700 mt-4">John has been a loyal donor for over 5 years, helping save countless lives with his blood donations. His contributions have made a huge impact on local hospitals and emergency services.</p>
              <button className="mt-4 text-white bg-blue-500 p-2 rounded-full">Donate Now</button>
            </div>
          </div>

          {/* Featured Donor Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://templates.bwlthemes.com/blood_donation/v_2/images/blog_thumb_2.jpg" alt="Donor Avatar" className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-sm text-gray-600">Blood Group: O-</p>
              <p className="text-gray-700 mt-4">Jane's generous donations have been lifesaving for many in need. She is dedicated to regularly donating, making a tangible difference in the community.</p>
              <button className="mt-4 text-white bg-blue-500 p-2 rounded-full">Donate Now</button>
            </div>
          </div>

          {/* Featured Donor Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://templates.bwlthemes.com/blood_donation/v_2/images/blog_thumb_1.jpg" alt="Donor Avatar" className="w-full h-32 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Alex Brown</h3>
              <p className="text-sm text-gray-600">Blood Group: AB+</p>
              <p className="text-gray-700 mt-4">Alex’s commitment to regular donations helps improve the overall health of his community, supporting local hospitals and individuals in need.</p>
              <button className="mt-4 text-white bg-blue-500 p-2 rounded-full">Donate Now</button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">See the Impact of Your Donation</h3>
          <p className="text-gray-600 mb-4">These are just some of the lives you've helped change.</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact Story 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800">Saving a Life</h4>
              <p className="text-gray-700 mt-4">“Thanks to the generous blood donations, I was able to receive life-saving treatment during my surgery. I’m forever grateful!”</p>
            </div>

            {/* Impact Story 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800">Helping the Community</h4>
              <p className="text-gray-700 mt-4">“Your donations helped our hospital provide essential care to those in need during an emergency. You truly make a difference!”</p>
            </div>

            {/* Impact Story 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800">Giving Hope</h4>
              <p className="text-gray-700 mt-4">“My family was struggling during a tough time, and your donations allowed us to get the support we needed. Thank you!”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
