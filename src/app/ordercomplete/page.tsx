'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const OrderCompleted = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedOrderDetails = localStorage.getItem("orderDetails");
    const savedEmail = localStorage.getItem("userEmail");
    if (savedOrderDetails) setOrderDetails(JSON.parse(savedOrderDetails));
    if (savedEmail) setEmail(savedEmail);
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="py-12 px-8 bg-blue-50 h-44">
        <h1 className="max-w-6xl mx-auto text-4xl font-bold text-blue-900">
          Order Completed
        </h1>
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href={"/"} className="text-blue-900">
            Home
          </Link>
          <p className="text-blue-900">Pages</p>
          <p className="text-[#FB2E86]">Order Completed</p>
        </div>
      </div>

      <div className="relative py-16">
        <div className="absolute top-1/2 left-12 transform -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <img src="/clock 1.png" alt="Clock Icon" className="w-8 h-8" />
          </div>
        </div>

        <div className="absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
            <img src="/Vector 15.png" alt="Check Icon" className="w-10 h-10" />
          </div>
        </div>

        <div className="absolute bottom-12 right-12 flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
            <img src="/checklist 1.png" alt="Clipboard Icon" className="w-8 h-8" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-32 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg text-center mx-auto">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation at{" "}
            <span className="font-bold text-blue-900">{email || "your email"}</span>.
          </p>
          {orderDetails && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md text-left">
              <h3 className="text-lg font-bold text-gray-700">Order Summary</h3>
              <ul className="mt-4">
                {orderDetails.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-600">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)} x {item.quantity}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-800 font-bold">
                Total: ${orderDetails.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>
          )}
          <Link href="/">
            <button className="mt-6 bg-[#FB2E86] text-white px-6 py-3 rounded-md shadow-md hover:bg-pink-600">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      <div className="py-8 flex justify-center items-center mt-7 mb-12">
        <div className="flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 md:gap-8 w-full max-w-6xl px-4 mt-32">
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

export default OrderCompleted;