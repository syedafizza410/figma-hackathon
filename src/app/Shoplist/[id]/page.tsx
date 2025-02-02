"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext"; 
import { useCart } from "../../../contexts/CartContext"; 

const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/Rectangle 32.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "Consectetur adipiscing elit.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 2,
    name: "In nulla",
    image: "/Rectangle 70.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/Rectangle 71.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 4,
    name: "Porttitor cum",
    image: "/Rectangle 72.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 5,
    name: "Nunc in",
    image: "/Rectangle 73.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "Lorem Magna in est adipiscing.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 6,
    name: "Vitae facilisis",
    image: "/Rectangle 74.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "consectetur adipiscing elit. Magna in.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 7,
    name: "Curabitur lectus",
    image: "/Rectangle 75.png",
    price: 26.00,
    oldPrice: 52.00,
    description: "Lorem ipsum dolor sit amet, consectetur.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const product = shoplist.find((p) => p.id === Number(id)); // Find product by ID

  if (!product) {
    return <div className="text-center text-red-500 text-lg mt-10">Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Link href="/" className="text-blue-600">← Back to Shop</Link>

      <div className="flex flex-col md:flex-row items-center mt-6">
        <div className="relative w-64 h-64">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="md:ml-8 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          
          <div className="flex items-center mt-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`${index < product.rating ? "text-yellow-500" : "text-gray-300"} text-lg`}
                >
                  ★
                </span>
              ))}
          </div>

          <div className="mt-2">
            <span className="text-lg font-bold text-blue-900">${product.price}</span>
            <span className="ml-2 line-through text-pink-500">${product.oldPrice}</span>
          </div>

          <div className="mt-4 flex space-x-4">
          <button
              className="text-blue-900 hover:text-indigo-900 shadow-lg"
              aria-label="Add to Wishlist"
              onClick={() => addToWishlist(product)}
            >
              <AiOutlineHeart size={24} />
            </button>
            <button
  className="text-blue-900 hover:text-indigo-900 shadow-lg"
  aria-label="Add to Cart"
  onClick={() => addToCart({ ...product, id: product.id.toString(), quantity: 1 })} // Convert id to string
>
  <AiOutlineShoppingCart size={24} />
</button>
            <button className="text-blue-900 hover:text-indigo-900 shadow-lg" aria-label="Search">
              <FaSearch size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
