"use client";

import { useState, useEffect, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const homeDropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && searchTerm.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        homeDropdownRef.current &&
        !homeDropdownRef.current.contains(event.target as Node)
      ) {
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
              <Link
                href="/login"
                className="flex items-center text-white space-x-2"
              >
                <GoPerson />
                <span>Log in</span>
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center text-white space-x-2"
              >
                <FaRegHeart />
                <span>Wishlist</span>
              </Link>
              <Link
                href="/cart"
                className="flex items-center text-white space-x-2"
              >
                <LuShoppingCart />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-3xl font-serif">
              <Link href="/">Hekto</Link>
            </h1>

            <div className="hidden sm:flex space-x-6">
              <div className="relative" ref={homeDropdownRef}>
                <Link
                  onClick={toggleHomeDropdown}
                  aria-expanded={isHomeDropdownOpen}
                  className="flex items-center text-pink-500 hover:text-pink-500 cursor-pointer"
                  href="/"
                >
                  Home
                  <FaChevronDown className="ml-1" />
                </Link>
                {isHomeDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-pink-500 border rounded-md shadow-lg z-20">
                    <Link href="/Shop" className="block px-4 py-2 text-white">
                      Shop Left SideBar
                    </Link>
                    <Link href="/cart" className="block px-4 py-2 text-white">
                      Cart
                    </Link>
                    <Link href="/login" className="block px-4 py-2 text-white">
                      My Account
                    </Link>
                    <Link href="/about" className="block px-4 py-2 text-white">
                      About Us
                    </Link>
                    <Link href="/Faq" className="block px-4 py-2 text-white">
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/Product" className="text-gray-900 hover:text-pink-500">
                Pages
              </Link>
              <Link
                href="/products"
                className="text-gray-900 hover:text-pink-500"
              >
                Products
              </Link>
              <Link href="/Blog" className="text-gray-900 hover:text-pink-500">
                Blog
              </Link>
              <Link
                href="/Contact"
                className="text-gray-900 hover:text-pink-500"
              >
                Contact
              </Link>
              <Link href="/Shoplist" className="text-gray-900 hover:text-pink-500">
                Shop
              </Link>
            </div>

            <form
              onSubmit={handleSearch}
              className="sm:flex items-center space-x-2"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="border border-gray-300 p-2 text-sm rounded-md lg:w-52 md:44 sm:w-32 w-44 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition"
              >
                <FaSearch />
              </button>
            </form>
            <button
              className="sm:hidden flex items-left"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6 text-black" />
              ) : (
                <MenuIcon className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden flex flex-col px-4 py-2 border-t bg-pink-500">
            <ul className="w-full text-left">
              <li>
                <Link className="block py-2 text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Product" className="block py-2 text-white">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/Shop" className="block py-2 text-white">
                  Shop Left Sidebar
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-white" href="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-white" href="/Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-white" href="/Shoplist">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-white" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="block py-2 text-white" href="/Contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Faq" className="block py-2 text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
