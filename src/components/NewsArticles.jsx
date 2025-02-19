import React from "react";

const articles = [
  {
    id: 1,
    image: "https://www.kauveryhospital.com/wp-content/uploads/2023/12/1-5.jpg",
    category: "News",
    title: "Ensuring Blood Donation Safety During the Pandemic",
    date: "February 15, 2024",
    description:
      "Learn about the safety measures in place to protect blood donors and recipients during the pandemic. Your donation can save lives while keeping you safe.",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "News",
    title: "Blood Supply Shortage: High Demand This Month",
    date: "February 10, 2024",
    description:
      "Hospitals are facing a critical shortage of blood supply this month. If you're eligible, consider donating to help patients in need.",
    link: "#",
  },
  {
    id: 3,
    image: "https://media.gettyimages.com/id/1290652548/photo/nurse-help-patient-to-stop-bleeding-while-donating-blood.jpg?s=612x612&w=gi&k=20&c=9amKQRtZhSau5oMWlErqBAHCZpM6VGvzqIAxQhnDz0o=",
    category: "Tips",
    title: "What to Avoid After Donating Blood",
    date: "February 8, 2024",
    description:
      "After donating blood, it's important to stay hydrated, avoid strenuous exercise, and get enough rest to help your body recover quickly.",
    link: "#",
  },
];

const NewsArticles = () => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <p className="text-red-500 font-medium text-center">Our News</p>
      <h2 className="text-3xl font-bold mb-3 text-center">News & Articles</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-6 text-center">
        Stay updated with the latest blood donation news, health tips, and urgent requests. 
        Your awareness can help save lives.
      </p>

      {/* News Cards Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            
            <div className="p-4">
              <span className="text-xs uppercase font-semibold px-2 py-1 bg-red-100 text-red-500 rounded">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{article.date}</p>
              <p className="text-gray-600 text-sm mt-2">{article.description}</p>
              
              <a href={article.link} className="text-red-500 font-semibold mt-3 block hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
