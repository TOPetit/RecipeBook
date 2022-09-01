// Add entry here to add a recipe
var recipes_names = [
    "pates-au-beurre"
]


// Actual data to use
var recipes = [];

async function fetchRecipe(URL) {
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization"
        }
    });
    return await response.json();
}

console.log(fetchRecipe(BASE_URL + "recipes/pates-au-beurre.json"));

function load_recipes(names) {
    for (i = 0; i < names.length; i++) {
        let RECIPE_URL = BASE_URL + "recipes" + names[i] + ".json";

    }
}

load_recipes(recipes_names);