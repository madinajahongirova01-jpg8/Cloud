import React from 'react';
import {
  CiShop,
  CiDollar,
  CiShoppingCart,
  CiMoneyBill
} from 'react-icons/ci';

import {
  TbTruckDelivery,
  TbHeadphones,
  TbShieldCheck
} from 'react-icons/tb';

import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

import heroImg from '../img/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png';
import person1 from '../img/Frame 875.png';
import person2 from '../img/Frame 875.png';
import person3 from '../img/Frame 875.png';

const About: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
              Our Story
            </h1>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src={heroImg}
              alt="Story Hero"
              className="rounded-md object-cover w-full max-h-[400px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-gray-800 rounded-md p-6 text-center space-y-3 hover:border-white transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mx-auto text-2xl">
              <CiShop size={30} />
            </div>
            <h2 className="text-2xl font-bold">10.5k</h2>
            <p className="text-xs text-gray-400">
              Sellers active our site
            </p>
          </div>
          <div className="bg-[#DB4444] border border-[#DB4444] rounded-md p-6 text-center space-y-3 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto text-2xl text-white">
              <CiDollar size={30} />
            </div>
            <h2 className="text-2xl font-bold">33k</h2>
            <p className="text-xs text-gray-100">
              Monthly Product Sale
            </p>
          </div>
          <div className="border border-gray-800 rounded-md p-6 text-center space-y-3 hover:border-white transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mx-auto text-2xl">
              <CiShoppingCart size={30} />
            </div>
            <h2 className="text-2xl font-bold">45.5k</h2>
            <p className="text-xs text-gray-400">
              Customer active in our site
            </p>
          </div>
          <div className="border border-gray-800 rounded-md p-6 text-center space-y-3 hover:border-white transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mx-auto text-2xl">
              <CiMoneyBill size={30} />
            </div>
            <h2 className="text-2xl font-bold">25k</h2>
            <p className="text-xs text-gray-400">
              Anual gross sale in our site
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-[#F5F5F5] rounded-md pt-8 px-8 flex justify-center h-[380px] overflow-hidden">
                <img
                  src={person1}
                  alt="Tom Cruise"
                  className="object-cover object-top h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Tom Cruise</h3>
                <p className="text-xs text-gray-400">
                  Founder & Chairman
                </p>
              </div>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F5F5F5] rounded-md pt-8 px-8 flex justify-center h-[380px] overflow-hidden">
                <img
                  src={person2}
                  alt="Emma Watson"
                  className="object-cover object-top h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Emma Watson</h3>
                <p className="text-xs text-gray-400">
                  Managing Director
                </p>
              </div>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F5F5F5] rounded-md pt-8 px-8 flex justify-center h-[380px] overflow-hidden">
                <img
                  src={person3}
                  alt="Will Smith"
                  className="object-cover object-top h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Will Smith</h3>
                <p className="text-xs text-gray-400">
                  Product Designer
                </p>
              </div>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-8">
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-[#DB4444] border-2 border-white"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                <TbTruckDelivery size={22} />
              </div>
            </div>
            <h3 className="text-lg font-bold">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-xs text-gray-400">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                <TbHeadphones size={22} />
              </div>
            </div>
            <h3 className="text-lg font-bold">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-xs text-gray-400">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                <TbShieldCheck size={22} />
              </div>
            </div>
            <h3 className="text-lg font-bold">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-xs text-gray-400">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;