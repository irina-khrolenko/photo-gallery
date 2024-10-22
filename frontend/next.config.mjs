import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  //   transpilePackages: ["three"],
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
