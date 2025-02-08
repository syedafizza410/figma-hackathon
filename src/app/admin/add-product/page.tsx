"use client";

import Image from "next/image";
import { useState } from "react";
import AdminSidebar from "../../../components/adminSidebar";
import { client } from "../../../sanity/lib/client";

export default function AddProduct() {
  const [product, setProduct] = useState<{ 
    title: string; 
    price: string; 
    image: string; 
    category: string;
    imageFile: File | null;  
  }>({
    title: "",
    price: "",
    image: "",
    category: "products",
    imageFile: null,
  });  
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true); 

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset"); 

    const uploadRes = await fetch(
      "https://api.cloudinary.com/v1_1/dvdpivetb/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await uploadRes.json();

    if (data.secure_url) {
      setProduct({ ...product, image: data.secure_url });
      setUploading(false);
    } else {
      alert("Image upload failed!");
      setUploading(false);
    }
  };

  const fetchProducts = async () => {
    const sanityData = await client.fetch(
      `*[_type == "product"] { _id, name, price, image }`
    );
    localStorage.setItem("sanityProducts", JSON.stringify(sanityData));

    const shoplistRes = await fetch("/api/shoplist");
    localStorage.setItem(
      "shoplistProducts",
      JSON.stringify(await shoplistRes.json())
    );

    const sidebarRes = await fetch("/api/shopleftsidebar");
    localStorage.setItem(
      "shopSidebarProducts",
      JSON.stringify(await sidebarRes.json())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.title || !product.price || !product.image) {
      alert("All fields are required!");
      return;
    }

    let endpoint = "";
    let requestBody = {
      name: product.title,
      price: product.price,
      image: product.image,
    };

    if (product.category === "products") {
      const imageAsset = await client.assets.upload("image", product.imageFile);
      const imageRef = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      };

      await client.create({
        _type: "product",
        name: product.title,
        price: product.price,
        image: imageRef,
      });

    } else {
      endpoint = `/api/${product.category}`;
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
    }

    alert("Product added successfully!");
    setProduct({ title: "", price: "", image: "", category: "products", imageFile: null });
    fetchProducts(); 
};

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <AdminSidebar />
      <div className="p-6 flex-grow w-full">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className="border p-2 w-full"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="border p-2 w-full"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 w-full"
            required
          />
          {uploading && <p className="text-blue-500">Uploading image...</p>}
          {product.image && (
            <Image
              src={product.image}
              alt="Preview"
              width={128}
              height={128}
              className="object-cover"
            />
          )}

          <select
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="border p-2"
          >
            <option value="products">📌 Products Page </option>
            <option value="shoplist">🛒 Shop List Page</option>
            <option value="shopleftsidebar">🔍 Shop Left Sidebar</option>
          </select>

          <button type="submit" className="bg-pink-500 text-white p-2 rounded">
            {uploading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
