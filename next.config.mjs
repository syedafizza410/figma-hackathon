/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', 'res.cloudinary.com'], 
    },
    env: {
        NEXTAUTH_URL: 'https://figma-hackathon-inky.vercel.app/', 
    },
};

export default nextConfig;
