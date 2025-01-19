import { getProducts } from '../../sanity/lib/api';
import { urlFor } from '../../sanity/lib/client';
import Image from 'next/image';

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Our Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((product: any) => (
                    <div
                        key={product.name}
                        style={{ border: '1px solid #ddd', padding: '10px', width: '250px' }}
                    >
                        <Image
                            src={product.image ? urlFor(product.image).url() : ''}
                            alt={product.name}
                            width={250}
                            height={250}
                        />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p><strong>${product.price}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
