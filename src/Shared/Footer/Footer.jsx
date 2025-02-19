import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold ml-96 ">DonateLife</h1>
            <p className="text-gray-400 mt-2 ml-72 ">Together, we make a difference in lives every day. Join the cause and help save lives.</p>
          </div>
        </div>

        <img
            src="https://static.vecteezy.com/system/resources/thumbnails/053/320/428/small/blood-donor-month-a-drop-of-blood-created-with-the-help-of-technology-photo.jpg"
            alt="Logo"
            className="w-10 h-10 ml-32 rounded-full"
          />

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className='ml-28'>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/donate" className="hover:text-blue-500">Donate Now</a></li>
              <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">Email: support@donatelife.org</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400">
          <p>&copy; 2025 DonateLife. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
