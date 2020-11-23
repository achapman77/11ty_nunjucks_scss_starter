module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
      dir: {
        input: "src/site",
        includes: "_includes",
        output: "_site",
      },
    };
  };