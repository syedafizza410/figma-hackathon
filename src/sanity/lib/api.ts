import { client } from './client';

// Function to fetch all products
export async function getProducts() {
    const query = `*[_type == "product"]{
        _id, // Ensure we fetch _id for dynamic routing
        name,
        "image": image.asset->url, 
        price,
        description,
        inStock,
        category,
    }`;

    const products = await client.fetch(query);
    return products;
}

// Function to fetch a single product by ID
export async function getProductById(id) {
    const query = `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        "image": image.asset->url,
        price,
        description,
        category,
        inStock,
        reviews
    }`;

    const product = await client.fetch(query, { id });
    return product;
}
