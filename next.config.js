const withPlugins = require("next-compose-plugins");
const mdx = require("@next/mdx")();

const generateSitemap = require("./scripts/generate-sitemap");
const generateAllCalcs = require("./scripts/generate-AllCalcs");

module.exports = withPlugins(
  [
    [
      mdx,
      {
        pageExtensions: ["js", "mdx"],
      },
    ],
    [
      {
        async redirects() {
          return [
            {
              source:
                "/bollo-auto/come-calcolare-il-bollo-auto-tabelle-kw-e-verifica-del-pagamento",
              destination: "/calcoli/calcolo-bollo-auto",
              permanent: true,
            },
          ];
        },
      },
    ],
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
