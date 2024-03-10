<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { Recipe } from '../../../types';

    let data: Recipe = null;

    onMount(async () => {
        const { params } = $page;
        const response = await fetch(`https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/${params.recipe}.json`);

        data = await response.json();

    });
</script>

{#if data}
    <pre>{JSON.stringify(data, null, 2)}</pre>
{:else}
    <p>Loading...</p>
{/if}