import React from "react";

const newsData = [
  {
    id: 1,
    date: "14 Feb, 2025",
    comments: "3 Comments",
    title: "Donation is hope for poor helpless children",
    description:
      "Help support children in need with your generous donations. Your kindness makes a difference.",
    image: "https://media.istockphoto.com/id/1399755101/photo/young-man-donating-blood.jpg?s=612x612&w=0&k=20&c=3VsuWSEnzFDQWImiE59NSere0uctOQsfp2nSOse623s=", // Replace with actual image URL
  },
  {
    id: 2,
    date: "14 Feb, 2025",
    comments: "3 Comments",
    title: "Donation is hope for poor helpless children",
    description:
      "Providing help and care to those in need. Together, we can bring change and hope.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi84c5Dr6OISHcL-T1eOFcMYWonZPbfPyx-A&s", // Replace with actual image URL
  },
  {
    id: 3,
    date: "14 Feb, 2025",
    comments: "3 Comments",
    title: "Donation is hope for poor helpless children",
    description:
      "Small acts of kindness lead to a big impact. Donate today and make a change.",
    image: "https://advinhealthcare.com/wp-content/uploads/2022/10/Blood-Donation-2.jpg", // Replace with actual image URL
  },
];

const NewsSection = () => {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-red-500 uppercase text-center font-semibold">
          Our News
        </h2>
        <h3 className="text-3xl font-bold text-center my-2">
          Checkout News & Updates
        </h3>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className=" shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-red-500">
                  📅 {news.date} • 💬 {news.comments}
                </p>
                <h4 className="text-lg font-bold my-2">{news.title}</h4>
                <p className="">{news.description}</p>
                <a href="#" className="text-red-500 font-semibold mt-4 block">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
