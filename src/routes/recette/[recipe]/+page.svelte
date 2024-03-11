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
    <div class="recipe">
        <div class="top">
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
        <div class="infos">
            <div>
                <p class="bold">Préparation</p>
                <p class="info-mini">{recipe.prep_time}</p>
            </div>
            <div>
                <p class="bold">Cuisson</p>
                <p class="info-mini">{recipe.cook_time}</p>
            </div>
            <div>
                <p class="bold">Total</p>
                <p class="info-mini">{recipe.total_time}</p>
            </div>
            <div>
                <p class="bold">Portions</p>
                <p class="info-mini">{recipe.servings}</p>
            </div>
        </div>

        <div class="ingredients">
            <h2>Ingrédients</h2>

            <ul>
                {#each recipe.ingredients as ingredient}
                    <li>{ingredient}</li>
                {/each}
            </ul>
        </div>

        <div class="instructions">
            <h2>Instructions</h2>

            <ol>
                {#each recipe.instructions as instruction}
                    <li>{instruction}</li>
                {/each}
            </ol>
        </div>
        <div class="notes">
            <h2>Notes</h2>

            <ul>
                {#each recipe.notes as note}
                    <li>{note}</li>
                {/each}
            </ul>
        </div>
        <div class="footer">
            <p>{recipe.date}</p>
        </div>
    </div>
{:else}
    <p>Loading...</p>
{/if}

<style>
    * {
        font-family: quicksand;
    }

    :global(body) {
        background-color: lightgray;
    }
    .recipe {
        max-width: 1000px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .recipe > div {
        margin: 5px;
        padding: 10px;
    }

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid darkgrey;
        border-radius: 3px;
    }

    .top > h1 {
        font-size: 3em;
        margin-bottom: -10px;
        margin-top: -10px;
    }

    .top > p {
        color: rgb(85, 85, 85);
    }

    .infos {
        display: flex;
        justify-content: center;
        width: 75%;
        height: 100px;
    }

    .infos > div {
        margin: 15px;
        width: 15%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(199, 199, 199);
        border-radius: 3px;
        box-shadow: 0px 0px 5px 0px rgb(199, 199, 199);
    }

    .infos > div > p {
        text-align: center;
        margin-top: 1px;
        margin-bottom: 5px;
    }

    .info-mini {
        font-size: 0.75em;
    }

    .bold {
        font-weight: bold;
        font-size: 1em;
    }

</style>
