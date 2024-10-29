/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/form/step1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
