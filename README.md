# 11ty_nunjucks_scss_starter
Starting scaffold for an 11ty site using nunjucks and scss.

11ty is a simple static site generator that is process/structure agnostic and utilizes great live browser feature for dev.
Nunjucks is a templating engine similar to Handlebars.  Handlebars is more robust, just wanted to checkout Nunjucks.

This scaffold autocompiles sass on save using scripts in the package json running in parallel with 11ty server.
"scripts": {
    "scss": "node-sass --output-style compressed -o assets/css src/scss",
    "watch:css": "onchange \"src/scss/\" -- npm run scss",
    "serve": "eleventy --serve",
    "start": "run-p serve watch:css",
}

On build, 11ty compiles "src/site" to "_site". 
"src/scss" is mapped to "assets/css".  
Source folder(s) and destination folder for the 11ty build compile are set in ".eleventy.js" via:
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

  NOTE: Be sure to add both "_site/" abd ".netlify" to .gitignore
