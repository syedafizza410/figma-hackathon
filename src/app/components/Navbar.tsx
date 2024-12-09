"use client";

import { useState, useEffect, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target as Node)) {
        setIsHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2">
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
              <a href="/cart" className="flex items-center text-white space-x-2">
                <LuShoppingCart />
                <span>Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-serif">Hekto</h1>

            <div className="hidden sm:flex space-x-6">
              <div className="relative" ref={homeDropdownRef}>
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center text-pink-600 focus:outline-none"
                >
                  <a href="/"><span>Home</span></a>
                  <FaChevronDown className="ml-1" />
                </button>

                {isHomeDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-pink-600 border rounded-md shadow-lg z-20">
                    <a href="/Product" className="block px-4 py-2 text-white">Shop Grid Default</a>
                    <a href="/ProductDetail" className="block px-4 py-2 text-white">Product Details</a>
                    <a href="/Blog" className="block px-4 py-2 text-white">Blog Page</a>
                    <a href="/Contact" className="block px-4 py-2 text-white">Contact Us</a>
                    <a href="/Shop" className="block px-4 py-2 text-white">Shop</a>
                    <a href="/cart" className="block px-4 py-2 text-white">Cart</a>
                    <a href="/login" className="block px-4 py-2 text-white">Login</a>
                    <a href="/Faq" className="block px-4 py-2 text-white">FAQ</a>
                  </div>
                )}
              </div>

              <a href="/Shop" className="text-gray-900 hover:text-purple-600">Pages</a>
              <a href="/ProductDetail" className="text-gray-900 hover:text-purple-600">Products</a>
              <a href="/Blog" className="text-gray-900 hover:text-purple-600">Blog</a>
              <a href="/Contact" className="text-gray-900 hover:text-purple-600">Contact</a>
              <a href="/Shop" className="text-gray-900 hover:text-purple-600">Shop</a>
            </div>

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

        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white`}>
  <div className="px-4 py-2 space-y-2 bg-pink-600">
    <a href="/Product" className="block text-white py-2">Shop Grid Default</a>
    <a href="/ProductDetail" className="block text-white py-2">Product Details</a>
    <a href="/Blog" className="block text-white py-2">Blog Page</a>
    <a href="/Contact" className="block text-white py-2">Contact Us</a>
    <a href="/Shop" className="block text-white py-2">Shop</a>
    <a href="/cart" className="block text-white py-2">Cart</a>
    <a href="/login" className="block text-white py-2">Login</a>
    <a href="/Faq" className="block text-white py-2">FAQ</a>
    <a href="/Pages" className="block text-white py-2">Pages</a>
    <a href="/Products" className="block text-white py-2">Products</a>
  </div>
</div>

        </div>
    </>
  );
};

export default Navbar;