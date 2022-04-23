module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "_includes/*.njk", "index.njk"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
