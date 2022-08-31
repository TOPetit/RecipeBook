// Add entry here to add a recipe
var recipes_names = [
    "pates-au-beurre"
]


// Actual data to use
var recipes = [];

function load_recipes(names) {
    debugger;
    for (i = 0; i < names.length; i++) {
        recipes[i] = names[i];
    }
}

load_recipes(recipes_names);