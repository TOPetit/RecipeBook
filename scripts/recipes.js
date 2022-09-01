// Add entry here to add a recipe
var recipes_names = [
    "pates-au-beurre"
]

// Actual data to use
var RECIPES = [];

for (i = 0; i < names.length; i++) {
    let RECIPE_URL = BASE_URL + "recipes/" + names[i] + ".json";
    const response = await fetch(RECIPE_URL);
    RECIPES[i] = await response.json();
}
console.log("Loaded " + names.length + " recipes.");
