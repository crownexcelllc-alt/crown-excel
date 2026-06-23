import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  outputFileTracingExcludes: {
    '/api/**/*': [
      'node_modules/lucide-react/**/*',
      'node_modules/react-icons/**/*',
      'node_modules/@phosphor-icons/**/*',
      'node_modules/hugeicons-react/**/*',
      'node_modules/swiper/**/*',
      'node_modules/framer-motion/**/*',
      'node_modules/lottie-react/**/*',
      'node_modules/@hcaptcha/**/*',
      'node_modules/react-google-recaptcha/**/*',
      'node_modules/react-google-recaptcha-v3/**/*',
      'src/Components/**/*',
      'src/app/_components/**/*',
      'public/**/*',
    ],
    '/sitemap-pages.xml': [
      'node_modules/lucide-react/**/*',
      'node_modules/react-icons/**/*',
      'node_modules/@phosphor-icons/**/*',
      'node_modules/hugeicons-react/**/*',
      'node_modules/swiper/**/*',
      'node_modules/framer-motion/**/*',
      'node_modules/lottie-react/**/*',
      'node_modules/@hcaptcha/**/*',
      'node_modules/react-google-recaptcha/**/*',
      'node_modules/react-google-recaptcha-v3/**/*',
      'src/Components/**/*',
      'src/app/_components/**/*',
      'public/**/*',
    ],
  },
};

export default nextConfig;

