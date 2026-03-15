import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-16 mt-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=300&auto=format&fit=crop"
                alt="DonateLife Logo"
                className="w-12 h-12 rounded-full border-2 border-red-500"
              />
              <span className="text-2xl font-bold text-white tracking-wide">Donate<span className="text-red-500">Life</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Together, we make a difference in lives every day. Join our community of heroes and help save lives through blood donation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 lg:ml-8">
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> Home</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> About Us</Link></li>
              <li><Link to="/donate" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> Donate Now</Link></li>
              <li><Link to="/blog" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> Blog</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:text-red-500 transition-colors duration-300 flex items-center"><span className="mr-2 text-red-500">•</span> FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center">
                <span className="font-semibold text-white mr-2">Phone:</span> +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <span className="font-semibold text-white mr-2">Email:</span> support@donatelife.org
              </p>
              <p className="flex items-center">
                <span className="font-semibold text-white mr-2">Address:</span> 123 Health Ave, NY 10012
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DonateLife. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Made with <FaHeart className="mx-2 text-red-500" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
