/** @type {import('next').NextConfig} */

/**
 * example image remote url: https://static.chollometro.com/threads/raw/default/671254_1/re/300x300/qt/60/671254_1.jpg
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.chollometro.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

module.exports = nextConfig;
