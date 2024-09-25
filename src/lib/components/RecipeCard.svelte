<script lang="ts">
    import { onMount } from "svelte";
    import { fetchRecipe } from "$lib/func/fetchRecipe";
    import type { Recipe } from "$lib/types";

    export let recipeName: String = "";

    let recipe: Recipe = null;

    onMount(async () => {
        recipe = await fetchRecipe(recipeName);
    });
</script>

{#if recipe}
    <div class="recipe-card" style="background-image: url({recipe.imageURL});">
        <div class="recipe-content">
            <h1>{recipe.title}</h1>
        </div>
    </div>
{:else}
    <h1>Loading...</h1>
{/if}

<style>
    .recipe-card {
        width: 12%;
        aspect-ratio: 0.7;
        position: relative;
        background-size: cover;
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }

    .recipe-content {
        position: relative;
        z-index: 1;
        text-align: center;
        padding-top: 10px;
    }
</style>
