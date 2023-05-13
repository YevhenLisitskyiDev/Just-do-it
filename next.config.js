// next.config.js
const withCSS = require("@zeit/next-css");
const withModuleAlias = require("next-module-alias");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  /* config options here */
};

module.exports = withPlugins(
  [
    withCSS,
    [
      withModuleAlias,

      {
        "@/api": "./api",
        "@/components": "./components"
      }
    ]
  ],
  nextConfig
);
