<script lang="ts">
    import { onMount } from "svelte";
    import { fetchRecipe } from "$lib/func/fetchRecipe"
    import type { Recipe } from "$lib/types";

    export let recipeName: String = "";

    let recipe: Recipe = null;

    onMount(async () => {
        recipe = await fetchRecipe(recipeName);
    });
    
</script>

{#if recipe}
    <h1>{recipe.title}</h1>
{:else}
    <h1>Loading...</h1>
{/if}