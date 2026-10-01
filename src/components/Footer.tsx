import React from 'react';
import { Send } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-6 md:px-16 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wide">Exclusive</h2>
          <h3 className="text-xl font-medium">Subscribe</h3>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          <div className="relative w-full max-w-[220px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-white rounded-md py-2 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button 
              type="button" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-80 transition-opacity"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Support</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Account</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Quick Link</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Social</h3>
          <div className="flex items-center space-x-6 text-white">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-900 pt-6 text-center text-sm text-gray-600">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;