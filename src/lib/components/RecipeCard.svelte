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
            <p class="description">{recipe.description}</p>
        </div>
    </div>
{:else}
    <div class="recipe-card loading" style="background-color: lightgrey;" />
{/if}

<style>
    .recipe-card {
        cursor: pointer;
        width: 12%;
        aspect-ratio: 0.7;
        position: relative;
        background-size: cover;
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 5px rgba(192, 192, 192, 0.5);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        transition:
            box-shadow 0.5s ease,
            filter 0.5s ease,
            border 0.5s ease;
    }

    .recipe-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(128, 128, 128, 0.7); /* Gray overlay */
        opacity: 0;
        transition: opacity 0.5s ease;
        border-radius: 10px;
        border: 5px black;
    }

    .recipe-card:hover::before {
        opacity: 1;
    }

    .recipe-content {
        position: relative;
        z-index: 1;
        text-align: center;
        padding-top: 10px;
        font-size: 1vw;
    }

    .description {
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.5s ease,
            visibility 0.5s ease;
        margin-top: 10px;
    }

    .recipe-card:hover .description {
        opacity: 1;
        visibility: visible;
    }

    .loading {
        width: 12%;
        aspect-ratio: 0.7;
        position: relative;
        background-size: cover;
        padding: 20px;
        border-radius: 10px;
        animation-duration: 1.8s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(
            to right,
            #fafafa 8%,
            #e7e7e7 38%,
            #fafafa 54%
        );
        background-size: 1000px 640px;
        position: relative;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
</style>
