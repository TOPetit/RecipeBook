// Add entry here to add a recipe
var recipes_names = [
    "pates-au-beurre"
]


// Actual data to use
var recipes = [];

async function fetchRecipe(URL) {
    const response = await fetch(URL);
    const recipe = await response.json();
    console.log(recipe)
}

fetchRecipe(BASE_URL + "recipes/pates-au-beurre.json");

function load_recipes(names) {
    for (i = 0; i < names.length; i++) {
        let RECIPE_URL = BASE_URL + "recipes" + names[i] + ".json";

    }
}

load_recipes(recipes_names);