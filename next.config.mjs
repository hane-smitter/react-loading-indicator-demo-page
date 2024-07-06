/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./.build", // Changes the build output directory to `./.dist/`.
  async redirects() {
    return [
      {
        source: "/:path(.+)",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
