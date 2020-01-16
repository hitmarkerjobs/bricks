module.exports = {
  plugins: [
    require("postcss-import"),
    require("@hitmarker/bricks/node_modules/tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
};
