const withPlugins = require("next-compose-plugins");
const mdx = require("@next/mdx")();

const generateSitemap = require("./scripts/generate-sitemap");
const generateAllCalcs = require("./scripts/generate-AllCalcs");

module.exports = withPlugins(
  [
    mdx,
    {
      pageExtensions: ["js", "mdx"],
    },
  ],
  {
    webpack: (config, { isServer }) => {
      if (isServer) {
        generateSitemap();
        generateAllCalcs();
      }
      return config;
    },
  }
);
