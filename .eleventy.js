module.exports = function (eleventyConfig) {
  // Copy
  // `pages/assets` para facil acceso a obsidian.
  // eleventyConfig.addPassthroughCopy({ "assets/favicon.ico": "favicon.ico" });
  // eleventyConfig.addPassthroughCopy({ "assets/.well-known": ".well-known" });
  // eleventyConfig.addPassthroughCopy({ "assets/gpg.asc": "gpg.asc" });
  // eleventyConfig.addPassthroughCopy({ "assets/sprite.svg": "sprite.svg" });
  // eleventyConfig.addPassthroughCopy({ "assets/icons": "assets/icons" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/flowbite/dist/flowbite.js": "assets/flowbite.js",
  });
  eleventyConfig.addPassthroughCopy("assets");

  // Extensions
  // eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))

  // Plugins
  // eleventyConfig.addPlugin(externalLinks)

  // Filters
  // eleventyConfig.addFilter('readableURL', readableURL)

  // Conditional configs
  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    console.log("Production Enviroment");
  }

  // Return your Object options:
  return {};
};

function readableURL(url) {
  const i = url.lastIndexOf("/");
  const f = url.substring(0, i).lastIndexOf("/") + 1;
  return url.substring(i, f);
}

function minifiedHTML(content, outputPath) {
  // https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
  // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  if (outputPath && outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    return minified;
  }
  return content;
}
