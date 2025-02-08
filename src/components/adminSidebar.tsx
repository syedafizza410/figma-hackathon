'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 text-white bg-purple-600"
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 bg-purple-600 text-white p-4 min-h-screen transition-transform duration-300`}
      >
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/admin" className="hover:text-pink-500">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/products" className="hover:text-pink-500">
              Manage Products
            </Link>
          </li>
          <li>
            <Link href="/admin/add-product" className="hover:text-pink-500">
              Add Product
            </Link>
          </li>
        </ul>

        <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
    </>
  );
}
