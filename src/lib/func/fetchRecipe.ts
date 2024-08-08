import type { Recipe } from "$lib/types";

export async function fetchRecipe(recipeName: String): Promise<Recipe> {
    const response = await fetch(
        `https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/${recipeName}.json`
    );
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}
