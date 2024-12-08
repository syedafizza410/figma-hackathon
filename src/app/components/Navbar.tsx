"use client";

import { useState } from "react";
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume, FaChevronDown, FaRegHeart, } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import { GoPerson } from 'react-icons/go';
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* First Navbar (Purple with Contact Info) */}
      <div className="bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2">
            {/* Contact Info */}
            <div className="flex space-x-4 text-white text-sm font-semibold mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <MdOutlineEmail className="text-lg" />
                <span>mhhasanul@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneVolume className="text-lg" />
                <span>(12345)67890</span>
              </div>
            </div>

            {/* Wishlist, Cart, Language, and Currency */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-white">
                <span>English</span>
                <FaChevronDown />
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-white">
                <span>USD</span>
                <FaChevronDown />
              </div>
              <a href="/login" className="flex items-center text-white space-x-2">
                <GoPerson />
                <span>Log in</span>
              </a>
              <a href="/Product" className="flex items-center text-white space-x-2">
                <FaRegHeart />
                <span>Wishlist</span>
              </a>
              <a href="/Cart" className="flex items-center text-white space-x-2">
                <LuShoppingCart />
                <span>Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navbar (White with Navigation and Search) */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <h1 className="text-2xl font-serif">Hekto</h1>

            {/* Links */}
            <div className="hidden sm:flex space-x-6">
              <a href="/" className="text-gray-900 hover:text-purple-600">Home</a>
              <a href="/Product" className="text-gray-900 hover:text-purple-600">Products</a>
              <a href="/Blog" className="text-gray-900 hover:text-purple-600">Blog</a>
              <a href="/Contact" className="text-gray-900 hover:text-purple-600">Contact</a>
              <a href="/Shop" className="text-gray-900 hover:text-purple-600">Shop</a>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Search..."
              />
              <button className="ml-2 bg-pink-500 text-white p-2 rounded">
                <FaSearch />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-purple-600"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white`}>
          <div className="px-4 py-2 space-y-2">
            <a href="/" className="block text-gray-900 hover:bg-gray-200 py-2">Home</a>
            <a href="/Product" className="block text-gray-900 hover:bg-gray-200 py-2">Products</a>
            <a href="/Blog" className="block text-gray-900 hover:bg-gray-200 py-2">Blog</a>
            <a href="/Contact" className="block text-gray-900 hover:bg-gray-200 py-2">Contact</a>
            <a href="/Shop" className="block text-gray-900 hover:bg-gray-200 py-2">Shop</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;