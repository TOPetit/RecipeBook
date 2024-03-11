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
            <dl>
                <dt>Préparation</dt>
                <dd>{recipe.prep_time} minutes</dd>

                <dt>Cuisson</dt>
                <dd>{recipe.cook_time} minutes</dd>

                <dt>Total</dt>
                <dd>{recipe.total_time} minutes</dd>

                <dt>Portions</dt>
                <dd>{recipe.servings}</dd>
            </dl>
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
    .recipe {
        max-width: 1000px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .recipe > div {
        background-color: lightblue;
        margin: 5px;
    }

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
