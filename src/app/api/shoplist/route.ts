import { NextResponse } from "next/server";

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

export async function GET() {
  const storedProducts = localStorage.getItem("shopListProducts");
  shopListProducts = storedProducts ? JSON.parse(storedProducts) : shopListProducts;
  return NextResponse.json(shopListProducts);
}

export async function POST(req: Request) {
  const newProduct = await req.json();
  shopListProducts.push(newProduct);

  localStorage.setItem("shopListProducts", JSON.stringify(shopListProducts));

  return NextResponse.json({ success: true, products: shopListProducts });
}

export async function PUT(req: Request) {
  const updatedProduct = await req.json();
  shopListProducts = shopListProducts.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  return NextResponse.json({ success: true, products: shopListProducts });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  shopListProducts = shopListProducts.filter((p) => p.id !== id);
  return NextResponse.json({ success: true, products: shopListProducts });
}
