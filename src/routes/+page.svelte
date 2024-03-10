<script lang="ts">
    import { onMount } from 'svelte';
    import type { Recipe } from '../types';


    let data: Recipe = null;

    onMount(async () => {
        const response = await fetch('https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/brownies.json');
        data = await response.json();
    });
</script>

{#if data}
    <h2>{data.title}</h2>
    <p>{data.description}</p>
    <ul>
        {#each data.ingredients as ingredient}
            <li>{ingredient}</li>
        {/each}
    </ul>
    <ol>
        {#each data.instructions as instruction}
            <li>{instruction}</li>
        {/each}
    </ol>
{:else}
    <p>Loading...</p>
{/if}