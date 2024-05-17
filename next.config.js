/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["cdn.imagin.studio", "utfs.io"],

        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'cdn.imagin.studio',
            //     port: '',
            //     pathname: '**',
            // },

            // {
            //     protocol: 'https',
            //     hostname: 'utfs.io',
            //     port: ''
            // },

            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
