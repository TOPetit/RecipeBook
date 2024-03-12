<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import type { Recipe } from "$lib/types";
    import Checkbox from "$lib/ui/checkbox.svelte";
    import FluentOven48Regular from '~icons/fluent/oven-48-regular'

    let recipe: Recipe = null;
    let formattedDate: string = "";

    onMount(async () => {
        const { params } = $page;
        const response = await fetch(
            `https://raw.githubusercontent.com/TOPetit/RecipeBook/main/recipes/${params.recipe}.json`,
        );

        recipe = await response.json();
        if (recipe) {
            formattedDate = new Intl.DateTimeFormat("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }).format(new Date(recipe.date));
        }
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
                <FluentOven48Regular height={32} width={32}/>
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
                {#each recipe.ingredients as label, id}
                    <li>
                        <Checkbox {label} id="ingredient-{id}"/>
                    </li>
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

            {#each recipe.notes as note}
                <p>{note}</p>
            {/each}
        </div>
        <div class="footer">
            <p>{formattedDate}</p>
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

    .top {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .top > h1 {
        width: 70%;
        font-size: 3em;
        margin-bottom: -10px;
        margin-top: -10px;
        text-align: center;
        border-bottom: 3px solid rgb(105, 105, 105);
    }

    .top > p {
        color: rgb(85, 85, 85);
        margin-top: 25px;
        margin-bottom: -2px;
        text-align: center;
    }

    .infos {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 75%;
    }

    .infos > div {
        margin: 15px;
        min-width: 100px;
        width: 20%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(211, 218, 220);
        border: 1px solid rgb(199, 199, 199);
        border-radius: 3px;
        box-shadow: 0px 0px 5px 0px rgb(199, 199, 199);
        transition: transform 0.3s;
    }

    .infos > div:hover {
        transform: scale(1.05);
    }

    .infos > div > p {
        text-align: center;
        margin-top: 1px;
        margin-bottom: 5px;
    }

    .info-mini {
        font-size: 0.75em;
    }

    .ingredients > h2 {
        text-align: center;
    }

    .ingredients > ul {
        width: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: left;
    }

    .ingredients > ul > li {
        display: flex;
        align-items: center;
    }

    .instructions > h2 {
        text-align: center;
    }

    .instructions > ol > li {
        margin-bottom: 10px;
        font-size: 0.9em;
    }

    .notes {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .notes > * {
        margin: 5px;
    }
    .notes > h2 {
        text-align: center;
    }

    .footer {
        margin-top: 100px;
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        color: rgb(81, 81, 81);
    }

    .bold {
        font-weight: bold;
        font-size: 1em;
    }
</style>
