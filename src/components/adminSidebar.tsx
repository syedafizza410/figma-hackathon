import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <nav className="w-64 min-h-screen bg-purple-600 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul className="flex flex-col gap-4">
        <li><Link href="/admin" className="hover:text-pink-500">Dashboard</Link></li>
        <li><Link href="/admin/products" className="hover:text-pink-500">Manage Products</Link></li>
        <li><Link href="/admin/add-product" className="hover:text-pink-500">Add Product</Link></li>
      </ul>

      <button
        onClick={() => signOut()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}
