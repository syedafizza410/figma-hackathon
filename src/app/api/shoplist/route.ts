import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "shopListProducts.json");

let shopListProducts = [
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

// ✅ Read Products from JSON File
const readProducts = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const storedProducts = JSON.parse(data);

    // 🟢 Merge default products only if they don't exist in the file
    const mergedProducts = [...shopListProducts, ...storedProducts.filter(p => !shopListProducts.some(dp => dp.id === p.id))];
    return mergedProducts;
  } catch (error) {
    return shopListProducts;
  }
};

// ✅ Write Products to JSON File
const writeProducts = (products) => {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf8");
};

// ✅ **GET - Fetch Shop List Products**
export async function GET() {
  const products = readProducts();
  return NextResponse.json(products);
}

// ✅ **POST - Add New Product**
export async function POST(req: Request) {
  const newProduct = await req.json();
  const products = readProducts();

  newProduct.id = products.length + 1;
  products.push(newProduct);
  writeProducts(products);

  return NextResponse.json({ success: true, products });
}

// ✅ **PUT - Edit Product**
export async function PUT(req: Request) {
  const updatedProduct = await req.json();
  let products = readProducts();

  products = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );

  writeProducts(products);
  return NextResponse.json({ success: true, products });
}

// ✅ **DELETE - Remove Product**
export async function DELETE(req: Request) {
  const { id } = await req.json();
  let products = readProducts();

  products = products.filter((p) => p.id !== id);
  writeProducts(products);

  return NextResponse.json({ success: true, products });
}
