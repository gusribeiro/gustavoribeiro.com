/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.linkedin.com/in/gusribeiro/',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
