/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['https://wxgndvsbqerljsgmhisd.supabase.co']
    // }
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'wxgndvsbqerljsgmhisd.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/**',
          },
        ],
      },
};

export default nextConfig;
