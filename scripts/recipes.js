// Add entry here to add a recipe
var recipes_names = [
    "pates-au-beurre",
    "ratatouille"
]

async function fetchRecipe(URL) {
    const response = await fetch(URL);
    const recipe = JSON.parse(await response.text());
    return recipe;
}

async function load_recipes(names, func) {
    let res = [];
    for (i = 0; i < names.length; i++) {
        let RECIPE_URL = BASE_URL + "recipes/" + names[i] + ".json";
        res[i] = fetch(RECIPE_URL);;
    }
    console.log("Loaded " + names.length + " recipes.");
    func(res);
}