// Add entry here to add a recipe
var recipes_names = [
    "pates-au-beurre"
]

async function fetchRecipe(URL) {
    const response = await fetch(URL);
    const recipe = await response.json();
    return recipe;
}

async function load_recipes(names, func) {
    let res = [];
    for (i = 0; i < names.length; i++) {
        let RECIPE_URL = BASE_URL + "recipes/" + names[i] + ".json";
        const response = await fetch(RECIPE_URL);
        res[i] = await response.text();
    }
    console.log("Loaded " + names.length + " recipes.");
    func(res);
}