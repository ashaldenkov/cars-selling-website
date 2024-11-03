/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */

const config = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/**'
    },
    {
      protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**'
    },
    {
      protocol: 'https',
        hostname: 'ixbt.com',
        port: '',
        pathname: '/**'
    },
    {
      protocol: 'https',
        hostname: 'habsida-intercar.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**'
    },],
  }
};
export default config;



  
  