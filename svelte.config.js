import preprocess from "svelte-preprocess";
//import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";

// List files in the recipes directory
import fs from "fs";
import path from "path";
const recipesDir = "recipes";
const recipes = fs.readdirSync(recipesDir).map((file) => path.parse(file).name);

// Create an entry for each recipe
const entries = recipes.map((recipe) => `/recette/${recipe}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: "build",
            assets: "build",
            fallback: null,
        }),
        prerender: {
            // use relative URLs similar to an anchor tag <a href="/test/1"></a>
            // do not include group layout folders in the path such as /(group)/test/1
            entries: ["/", ...entries],
        },
    },

    preprocess: [preprocess()],
};

export default config;
