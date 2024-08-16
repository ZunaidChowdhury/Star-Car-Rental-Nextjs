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
    },

    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
