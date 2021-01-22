const path = require("path");
module.exports = {
  publicRuntimeConfig: {
    ROOT_API_URL: process.env.REACT_APP_ROOT_API_URL || "http://localhost:1337",
    ROOT_IMAGE_URL:
      process.env.REACT_APP_ROOT_IMAGE_API_URL || '"http://localhost:1337"',
  },

  images: {
    domains: ["sc-supermassive.s3.amazonaws.com", "localhost"],
  },
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(
      __dirname,
      "./src/components"
    );

    config.resolve.alias["assets"] = path.join(__dirname, "./src/assets");
    config.resolve.alias["contexts"] = path.join(__dirname, "./src/contexts");
    config.resolve.alias["utils"] = path.join(__dirname, "./src/utils");
    config.resolve.alias["actions"] = path.join(__dirname, "./src/actions");
    config.resolve.alias["pages"] = path.join(__dirname, "./src/pages");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["styles"] = path.join(__dirname, "./src/styles");
    return config;
  },
};
