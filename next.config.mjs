import mdx from "@next/mdx";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const emptyPolyfill = join(__dirname, "scripts/empty-polyfill.js");
const polyfillModule = require.resolve("next/dist/build/polyfills/polyfill-module.js");

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Inline CSS in HTML to remove render-blocking stylesheet requests (static export).
  experimental: {
    inlineCss: true,
  },

  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },

  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },

  // Drop Next.js baseline polyfills (Array.at, flat, Object.hasOwn, etc.) for modern browsers.
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./scripts/empty-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./scripts/empty-polyfill.js",
      "next/dist/build/polyfills/polyfill-module.js": "./scripts/empty-polyfill.js",
    },
  },

  webpack(config, { isServer, webpack }) {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /next[\\/]dist[\\/]build[\\/]polyfills[\\/]polyfill-module\.js$/,
        emptyPolyfill,
      ),
    );

    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": emptyPolyfill,
        [polyfillModule]: emptyPolyfill,
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);
