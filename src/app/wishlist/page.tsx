"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "../../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <Image
                src={product.image ? product.image : "/placeholder.png"}
                alt={product.name}
                width={300}
                height={250}
                className="rounded-lg"
              />
              <h2 className="text-lg font-bold mt-3">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-pink-500 font-medium">Price: ${product.price}</p>
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <Link href="/products">
        <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-md">
          Back to Products
        </button>
      </Link>
    </div>
  );
}
