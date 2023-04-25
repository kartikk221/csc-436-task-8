/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['localhost', 'placebear.com'],
        remotePatterns: [
            {
                hostname: 'placebear.com',
            },
        ],
    },
};

module.exports = nextConfig;
