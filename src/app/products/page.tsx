'use client';

import Link from 'next/link';
import { getProducts } from '../../sanity/lib/api';
import { urlFor } from '../../sanity/lib/client';
import Image from 'next/image';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsSearch() {
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>(["Chair", "Sofa"]); 
    const [filteredCategory, setFilteredCategory] = useState<string | null>(null); 
    const searchParams = useSearchParams(); 
    const searchQuery = searchParams?.get('search') || ''; 

   
  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await getProducts(); 
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products
  .filter((product) => filteredCategory ? product.category?.toLowerCase() === filteredCategory.toLowerCase() : true)
  .filter((product) => searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true);

    return (
        <div className="p-5">
            <div className="bg-purple-50 py-11 px-11 mb-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-indigo-900">Our Products</h1>
                    <p className="text-sm text-gray-600">
                        <Link href={"/"}>Home</Link> . Pages .{" "}
                        <span className="text-pink-500">Our Products</span>
                    </p>
                </div>
            </div>

            <div className="mb-8 flex space-x-4">
            <button
          onClick={() => setFilteredCategory(null)}
          className={`px-4 py-2 rounded ${
            !filteredCategory ? "bg-pink-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilteredCategory(category)}
            className={`px-4 py-2 rounded ${
              filteredCategory === category
                ? "bg-pink-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
            </div>

            <div className="flex flex-wrap gap-5">
                {filteredProducts.map((product: any) => (
                    <div
                        key={product._id}
                        className="border border-gray-300 p-5 w-96 rounded-lg shadow-md bg-white transform transition-transform hover:scale-105 hover:shadow-lg"
                    >
                        <Image
                            src={product.image ? urlFor(product.image).url() : ''}
                            alt={product.name}
                            width={300}
                            height={250}
                            className="rounded-lg"
                        />
                        <h2 className="text-lg font-bold mt-3 text-blue-900">{product.name}</h2>
                        <p className="text-lg mt-3 text-pink-500"><span className='text-blue-900 font-bold'>Price: </span>${product.price}</p>
                        <p className="mt-2 font-medium text-pink-700 text-sm">
                            Available in Stock
                        </p>
                        <Link href={`/products/${product._id}`}>
                            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition-all transform transition-transform hover:scale-105 hover:shadow-lg">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsSearch />
      </Suspense>
    );
  }