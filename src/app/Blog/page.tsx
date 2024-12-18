import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="bg-white text-gray-800 ">
      <div className="py-12 px-8 bg-purple-50 h-44">
        <h1 className="max-w-6xl mx-auto text-4xl font-bold">Blog Page</h1>
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Blog Page</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 p-4 mt-20">
        <div className="md:col-span-3 space-y-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/blog1.png"
              alt="Blog 1"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.24 4.24l-6.364 6.364m0 0L9.879 20.12a2.5 2.5 0 01-3.536 0L3.757 17.535a2.5 2.5 0 010-3.536L13.636 3.757a2.5 2.5 0 013.536 0l3.068 3.068a2.5 2.5 0 010 3.536z"
                      />
                    </svg>
                  </span>
                  <div className="bg-pink-100 px-4 py-1 rounded-md">
                    <span className="text-indigo-900 font-semibold">
                      Surf Auxion
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div className="bg-orange-100 px-4 py-1 rounded-md">
                    <span className="text-indigo-900 font-semibold">
                      Aug 09 2020
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-3 mt-6">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum.
              </p>
              <a
                href="#"
                className="text-blue-900 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/blog2.png"
              alt="Blog 2"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.24 4.24l-6.364 6.364m0 0L9.879 20.12a2.5 2.5 0 01-3.536 0L3.757 17.535a2.5 2.5 0 010-3.536L13.636 3.757a2.5 2.5 0 013.536 0l3.068 3.068a2.5 2.5 0 010 3.536z"
                      />
                    </svg>
                  </span>
                  <div className="bg-pink-100 px-4 py-1 rounded-md">
                    <span className="text-indigo-900 font-semibold">
                      Surf Auxion
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div className="bg-orange-100 px-4 py-1 rounded-md">
                    <span className="text-indigo-900 font-semibold">
                      Aug 09 2020
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-3 mt-6">
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum.
              </p>
              <a
                href="#"
                className="text-blue-900 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/blog3.png"
              alt="Blog 3"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.24 4.24l-6.364 6.364m0 0L9.879 20.12a2.5 2.5 0 01-3.536 0L3.757 17.535a2.5 2.5 0 010-3.536L13.636 3.757a2.5 2.5 0 013.536 0l3.068 3.068a2.5 2.5 0 010 3.536z"
                      />
                    </svg>
                  </span>
                  <div className="bg-pink-100 px-4 py-1 rounded-md">
                    <span className="text-indigo-900 font-semibold">
                      Surf Auxion
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div className="bg-orange-100 px-4 py-1 rounded-md">
                    <span className="text-indigo-900 font-semibold">
                      Aug 09 2020
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-3 mt-6">
                Sit nam congue feugiat nisl, mauris amet nisi.
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum.
              </p>
              <a
                href="#"
                className="text-blue-900 font-medium hover:underline mt-4 block"
              >
                Read More 
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-2 text-gray-500">
            <a href="#" className="px-3 py-2 bg-pink-500 text-white rounded">
              1
            </a>
            <a href="#" className="px-3 py-2 hover:text-pink-500">
              2
            </a>
            <a href="#" className="px-3 py-2 hover:text-pink-500">
              3
            </a>
          </div>
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="text-blue-900 font-bold">Search</h2>
            <input
              type="text"
              placeholder="Search for posts"
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
              Categories
            </h3>
            <ul className="grid grid-cols-2 gap-y-1 text-sm text-indigo-900">
              <li className="bg-pink-500 text-white rounded-md cursor-pointer text-center">
                Hobbies (14)
              </li>
              <li className="cursor-pointer text-center">Women (21)</li>
              <li className="cursor-pointer text-center">Women (21)</li>
              <li className="cursor-pointer text-center">Women (21)</li>
              <li className="cursor-pointer text-center">Women (21)</li>
              <li className="cursor-pointer text-center">Women (21)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Recent Post
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <img
                  src="/blog4.png"
                  alt="Post 1"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/blog5.png"
                  alt="Post 2"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/blog6.png"
                  alt="Post 3"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/blog7.png"
                  alt="Post 4"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    It is a long established fact
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Sale Product
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <img
                  src="/blog8.png"
                  alt="Product 1"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    Elit ornare in enim mauris.
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <img
                  src="/blog9.png"
                  alt="Product 2"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    Viverra pulvinar et enim.
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <img
                  src="/blog10.png"
                  alt="Product 3"
                  className="w-20 h-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-indigo-900">
                    Mattis varius donec fdsfd
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">
              Offer product
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="/Mask Group.png"
                  alt="Product 1"
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Duis lectus est.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/Rectangle 134.png"
                  alt="Product 2"
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Sed placerat.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/Mask Group1.png"
                  alt="Product 3"
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Netus proin.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/Mask Group2.png"
                  alt="Product 4"
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-indigo-900 mt-3">
                  Platea in.
                </h4>
                <p className="text-sm text-gray-500 mt-1">$12.00 - $15.00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Follow</h3>
            <div className="flex items-center space-x-4 bg-white shadow-md rounded-md p-4 w-fit">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
              <a href="#" className="text-indigo-900 hover:underline">
                General
              </a>
              <a href="#" className="text-pink-500 hover:underline">
                Atsanil
              </a>
              <a href="#" className="text-indigo-900 hover:underline">
                Insas.
              </a>
              <a href="#" className="text-indigo-900 hover:underline">
                Bibsaas
              </a>
              <a href="#" className="text-indigo-900 hover:underline">
                Nulla.
              </a>
            </div>
          </div>
        </aside>
      </div>
      <div className="py-8 flex justify-center items-center mt-7 mb-12">
        <div className="flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 md:gap-8 w-full max-w-6xl px-4">
          <Image
            src="/text1.png"
            alt="Partner 1"
            width={100}
            height={10}
            className="sm:h-10 md:h-12"
          />
          <Image
            src="/text2.png"
            alt="Partner 2"
            width={100}
            height={10}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text3.png"
            alt="Partner 3"
            height={10}
            width={100}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text4.png"
            alt="Partner 4"
            height={10}
            width={100}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text5.png"
            alt="Partner 5"
            width={100}
            height={10}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
