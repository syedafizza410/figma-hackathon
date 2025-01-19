import { client } from './client';

export async function getProducts() {
    const query = `*[_type == "product"]{
        name,
        "image": image.asset->url, 
        price,
        description
    }`;

    const products = await client.fetch(query); // Fetch data from Sanity
    return products;
}
