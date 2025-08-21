// /** @type {import('next').NextConfig} */
// const nextConfig = {
// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'img.youtube.com',
//     },
//   ],
// }

// };

// export default nextConfig;

/**
@type {import('next').NextConfig} */
    const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'img.youtube.com',
        },
        {
            protocol: 'https',
            hostname: 'example.com',
        },
        ],
    },
    }

export default nextConfig
