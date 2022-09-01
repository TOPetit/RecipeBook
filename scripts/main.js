function main(RECIPES) {
    recipesContainer = document.getElementById("recipes-container");
    for (i = 0; i < RECIPES.length; i++) {
        console.log(RECIPES[i]);
        let tmpInnerHTML = recipesContainer.innerHTML + "<div class='tile'></div>";
        console.log(recipesContainer.innerHTML);
        recipesContainer.innerHTML = tmpInnerHTML;
    }
}

load_recipes(recipes_names, main);