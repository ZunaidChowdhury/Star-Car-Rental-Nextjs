/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["cdn.imagin.studio"],

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
                port: '',
                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
