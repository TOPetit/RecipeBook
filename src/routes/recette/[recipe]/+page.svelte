<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import type { Recipe } from "../../../types";

    let recipe: Recipe = null;

    onMount(async () => {
        const { params } = $page;
        const response = await fetch(
            `https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/${params.recipe}.json`,
        );

        recipe = await response.json();
    });
</script>

{#if recipe}
    <h1>{recipe.title}</h1>

    <p>{recipe.description}</p>

    <p>Publié le {recipe.date}</p>

    <p>Préparation : {recipe.prep_time}</p>

    <p>Cuisson : {recipe.cook_time}</p>

    <p>Total : {recipe.total_time}</p>

    <p>Pour {recipe.servings}</p>

    <p>Par {recipe.author}</p>

    <h2>Ingrédients</h2>

    <ul>
        {#each recipe.ingredients as ingredient}
            <li>{ingredient}</li>
        {/each}
    </ul>

    <h2>Instructions</h2>

    <ol>
        {#each recipe.instructions as instruction}
            <li>{instruction}</li>
        {/each}
    </ol>

    <h2>Notes</h2>

    <ul>
        {#each recipe.notes as note}
            <li>{note}</li>
        {/each}
    </ul>
{:else}
    <p>Loading...</p>
{/if}
