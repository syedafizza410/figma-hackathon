import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: string;
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<string[]>(["Chair", "Sofa"]); 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      let query = `*[_type == "product"]{
        _id,
        name,
        category,
        image,
        price
      }`;

      if (selectedCategory) {
        query = `*[_type == "product" && category == $category]{
          _id,
          name,
          category,
          image,
          price
        }`;
      }

      const result = await client.fetch(query, { category: selectedCategory });
      setProducts(result);
    }

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded ${!selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <p className="mt-2 text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;