import { NextResponse } from "next/server";

let shopLeftSidebarProducts = [
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

export async function GET() {
  const storedProducts = localStorage.getItem("shopLeftSidebarProducts");
  shopLeftSidebarProducts = storedProducts ? JSON.parse(storedProducts) : shopLeftSidebarProducts;
  return NextResponse.json(shopLeftSidebarProducts);
}

export async function POST(req: Request) {
  const newProduct = await req.json();
  shopLeftSidebarProducts.push(newProduct);

  localStorage.setItem("shopLeftSidebarProducts", JSON.stringify(shopLeftSidebarProducts));

  return NextResponse.json({ success: true, products: shopLeftSidebarProducts });
}

export async function PUT(req: Request) {
  const updatedProduct = await req.json();
  shopLeftSidebarProducts = shopLeftSidebarProducts.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  return NextResponse.json({ success: true, products: shopLeftSidebarProducts });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  shopLeftSidebarProducts = shopLeftSidebarProducts.filter((p) => p.id !== id);
  return NextResponse.json({ success: true, products: shopLeftSidebarProducts });
}