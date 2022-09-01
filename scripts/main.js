function main(RECIPES) {
    recipesContainer = document.getElementById("recipes-container");
    for (i = 0; i < RECIPES.length; i++) {
        let tmpInnerHTML = recipesContainer.innerHTML + "<div class='tile'></div>";
        recipesContainer.innerHTML = tmpInnerHTML;
    }
}

load_recipes(recipes_names, main);