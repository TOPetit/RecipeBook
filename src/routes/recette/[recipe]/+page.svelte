<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { Recipe } from '../../../types';

    let data: Recipe = null;
    let known_recipe: boolean = true;

    onMount(async () => {
        const { params } = $page;
        const response = await fetch(`https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/${params.recipe}.json`);

        known_recipe = response.ok;
        data = await response.json();

    });
</script>

{#if data && known_recipe}
    <pre>{JSON.stringify(data, null, 2)}</pre>
{:else if !known_recipe}
    <p>Recette inconnue</p>
{:else}
    <p>Loading...</p>
{/if}