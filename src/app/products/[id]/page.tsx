import { getProductById } from "../../../sanity/lib/api";
import ProductDetails from "../../components/ProductDetails";

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return <ProductDetails product={product} />;
}
