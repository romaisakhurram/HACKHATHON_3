module.exports = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/',
          permanent: true,
        },
        {
          source: '/old-blog/:slug',
          destination: '/news/:slug',
          permanent: true,
        },
        {
          source: '/:path((?!uk/).*)',
          has: [
            {
              type: 'header',
              key: 'x-vercel-ip-country',
              value: 'GB',
            },
          ],
          permanent: false,
          destination: '/uk/:path*',
        },
      ];
    },
  };