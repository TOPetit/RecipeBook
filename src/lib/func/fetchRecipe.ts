import type { Recipe } from "$lib/types";

export async function fetchRecipe(recipeName: String): Promise<Recipe> {
    const response = await fetch(
        `https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/${recipeName}.json`,
    );
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    let data = await response.json();
    data.imageURL = `https://raw.githubusercontent.com/TOPetit/RecipeBook/main/images/${recipeName}.jpg`;
    console.log(data);
    return data;
}
