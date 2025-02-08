"use client";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import AdminSidebar from "../../../components/adminSidebar";
import Image from "next/image";

export default function ManageProducts() {
  const [sanityProducts, setSanityProducts] = useState([]);
  const [shopList, setShopList] = useState([]);
  const [shopSidebar, setShopSidebar] = useState([]);

  useEffect(() => {
    const sanityData = JSON.parse(localStorage.getItem("sanityProducts")) || [];
    const shoplistData =
      JSON.parse(localStorage.getItem("shoplistProducts")) || [];
    const shopSidebarData =
      JSON.parse(localStorage.getItem("shopSidebarProducts")) || [];

    setSanityProducts(sanityData);
    setShopList(shoplistData);
    setShopSidebar(shopSidebarData);

    fetchProducts();
  }, []);

  
  const fetchProducts = async () => {
    try {
      const sanityData = await client.fetch(`*[_type == "product"] { _id, name, price, "imageUrl": image.asset->url }`);
      setSanityProducts(sanityData);
      localStorage.setItem("sanityProducts", JSON.stringify(sanityData));
  
      const shoplistRes = await fetch("/api/shoplist");
      const shoplistData = await shoplistRes.json();
      setShopList(shoplistData);
      localStorage.setItem("shoplistProducts", JSON.stringify(shoplistData));
  
      const shopSidebarRes = await fetch("/api/shopleftsidebar");
      const shopSidebarData = await shopSidebarRes.json();
      setShopSidebar(shopSidebarData);
      localStorage.setItem("shopSidebarProducts", JSON.stringify(shopSidebarData));
  
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id, section) => {
    if (section === "sanity") {
      await client.delete(id);
      setSanityProducts(sanityProducts.filter((product) => product._id !== id));
    } else {
      await fetch(`/api/${section}`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (section === "shoplist") {
        setShopList(shopList.filter((product) => product.id !== id));
      } else {
        setShopSidebar(shopSidebar.filter((product) => product.id !== id));
      }
    }
  };

  const handleEdit = async (id, section, newName, newPrice, newImage) => {
    if (section === "sanity") {
      await client
        .patch(id)
        .set({
          name: newName,
          price: newPrice,
          image: { asset: { _ref: newImage } },
        })
        .commit();
      const updatedProducts = sanityProducts.map((product) =>
        product._id === id
          ? { ...product, name: newName, price: newPrice, imageUrl: newImage }
          : product
      );
      setSanityProducts(updatedProducts);
      localStorage.setItem("sanityProducts", JSON.stringify(updatedProducts));
    } else {
      await fetch(`/api/${section}`, {
        method: "PUT",
        body: JSON.stringify({
          id,
          name: newName,
          price: newPrice,
          image: newImage,
        }),
      });
      const updatedSection = section === "shoplist" ? shopList : shopSidebar;
      const updatedProducts = updatedSection.map((product) =>
        product.id === id
          ? { ...product, name: newName, price: newPrice, image: newImage }
          : product
      );
      if (section === "shoplist") setShopList(updatedProducts);
      else setShopSidebar(updatedProducts);

      localStorage.setItem(
        section === "shoplist" ? "shoplistProducts" : "shopSidebarProducts",
        JSON.stringify(updatedProducts)
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <AdminSidebar />
      <div className="p-6 flex-grow w-full space-y-8">
        <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📌 Products Page </h2>
          <ProductTable
            products={sanityProducts}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            section="sanity"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🛒 Shop List</h2>
          <ProductTable
            products={shopList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            section="shoplist"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🔍 Shop Left Sidebar</h2>
          <ProductTable
            products={shopSidebar}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            section="shopleftsidebar"
          />
        </section>
      </div>
    </div>
  );
}

function ProductTable({ products, handleDelete, handleEdit, section }) {
  return (
    <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Image</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id || product.id}>
            <td className="border p-2">
              {product.imageUrl || product.image ? (
                <Image
                  src={product.imageUrl || product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded"
                />
              ) : (
                <span>No Image</span>
              )}
              <input
                type="text"
                defaultValue={product.imageUrl || product.image}
                onBlur={(e) =>
                  handleEdit(
                    product._id || product.id,
                    section,
                    product.name,
                    product.price,
                    e.target.value
                  )
                }
                className="border p-1 w-full text-xs"
              />
            </td>

            <td className="border p-2">
              <input
                type="text"
                defaultValue={product.name}
                onBlur={(e) =>
                  handleEdit(
                    product._id || product.id,
                    section,
                    e.target.value,
                    product.price,
                    product.imageUrl || product.image
                  )
                }
                className="border p-1 w-full"
              />
            </td>

            <td className="border p-2">
              <input
                type="number"
                defaultValue={product.price}
                onBlur={(e) =>
                  handleEdit(
                    product._id || product.id,
                    section,
                    product.name,
                    parseFloat(e.target.value),
                    product.imageUrl || product.image
                  )
                }
                className="border p-1 w-full"
              />
            </td>

            <td className="border p-2">
              <button
                onClick={() => handleDelete(product._id || product.id, section)}
                className="bg-red-500 text-white py-1 px-2 hover:bg-red-600 transition rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
