"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../../../contexts/CartContext"; 
import AddToCartButton from "../../components/Addtocartbutton";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); 
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/shopleftsidebar`)
      .then((res) => res.json())
      .then((products) => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        if (!foundProduct) {
          router.push("/404");
        } else {
          setProduct(foundProduct);
        }
      })
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id, router]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  const handleBuyNow = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });

    router.push("/HektoDemo");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-blue-900">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="text-2xl font-semibold text-blue-900">${product.price.toFixed(2)}</span>
            <span className="ml-2 line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex space-x-4">
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
};

export default ProductDetail;
