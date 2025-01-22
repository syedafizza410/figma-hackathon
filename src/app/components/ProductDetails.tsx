"use client";

import { urlFor } from "../../sanity/lib/client";
import Image from "next/image";
import { useWishlist } from "../../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AddToCartButton from "./Addtocartbutton";
import { useCart } from "../../contexts/CartContext"; 
import { useRouter } from "next/navigation";

export default function ProductDetails({ product }: { product: any }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart(); 
  const router = useRouter(); 
  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const handleBuyNow = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: Number(product.price),
      image: product.image ? urlFor(product.image).url() : "/placeholder.png",
      quantity: 1,
    });

    router.push("/HektoDemo");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Product Details</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-900">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-medium text-pink-500">
            <strong className="text-blue-900">Price:</strong> ${product.price}
            <button
              onClick={() =>
                isInWishlist ? removeFromWishlist(product._id) : addToWishlist(product)
              }
              className="ml-2 text-pink-500 text-xl"
            >
              {isInWishlist ? <FaHeart /> : <FaRegHeart />}
            </button>
          </p>
          <p className="text-lg font-medium text-blue-900">
            <strong>Category:</strong> {product.category || "N/A"}
          </p>
          <p className="flex items-center text-sm text-gray-500 gap-1">
            <strong className="text-blue-900">Reviews:</strong>
            {Array.from({ length: product.rating || 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-yellow-400"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.335 24 12 20.054 4.665 24l1.335-8.728-6-5.849 8.332-1.268z" />
              </svg>
            ))}
          </p>

          <div className="flex space-x-4 mt-6">
            <div className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-pink-500 hover:text-white transition duration-200 transform hover:scale-105">
              <AddToCartButton product={product} />
            </div>

            <button
              onClick={handleBuyNow}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-pink-500 transition duration-200 transform hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
