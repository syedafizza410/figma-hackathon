import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "shopLeftSidebarProducts.json");

const ShopLeftsidebarProducts = [
  {
    id: 1,
    name: "Dictum Morbi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop1.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Sodales Sit",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop2.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Nibh Varius",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop3.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Mauris Quis",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop4.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Marbi sagittis",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop5.png",
    rating: 4,
  },
  {
    id: 6,
    name: "Ultricies venenatis",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/shop6.png",
    rating: 4,
  },
  {
    id: 7,
    name: "Scelerisque dignissim",
    description: "Magna in est adipiscing in phasellus non in justo.",
    price: 26.0,
    oldPrice: 52.0,
    image: "/Shop7.png",
    rating: 4,
  },
 ];

const readProducts = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const storedProducts = JSON.parse(data);

    const mergedProducts = [...ShopLeftsidebarProducts, ...storedProducts.filter(p => !ShopLeftsidebarProducts.some(dp => dp.id === p.id))];
    return mergedProducts;
  } catch (error) {
    return ShopLeftsidebarProducts;
  }
};

const writeProducts = (products) => {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf8");
};

export async function GET() {
  const products = readProducts();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const newProduct = await req.json();
  const products = readProducts();

  newProduct.id = products.length + 1;
  products.push(newProduct);
  writeProducts(products);

  return NextResponse.json({ success: true, products });
}

export async function PUT(req: Request) {
  const updatedProduct = await req.json();
  let products = readProducts();

  products = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );

  writeProducts(products);
  return NextResponse.json({ success: true, products });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  let products = readProducts();

  products = products.filter((p) => p.id !== id);
  writeProducts(products);

  return NextResponse.json({ success: true, products });
}
