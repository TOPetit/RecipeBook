<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import type { Recipe } from "$lib/types";
    import { fetchRecipe } from "$lib/func/fetchRecipe";
    import Checkbox from "$lib/ui/checkbox.svelte";
    import Icon from "$lib/ui/icon.svelte";
    

    let recipe: Recipe = null;
    let formattedDate: string = "";

    onMount(async () => {
        const { params } = $page;
        recipe = await fetchRecipe(params.recipe);
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
                <div class="icon">
                    <Icon name="chefhat" width="32px" height="32px" color="rgb(70, 70, 70)" />
                </div>
                <div class="infotext">
                    <p class="bold">Préparation</p>
                    <p class="info-mini">{recipe.prep_time}</p>
                </div>
            </div>
            <div>
                <div class="icon">
                    <Icon name="oven" width="28px" height="28px" color="rgb(70, 70, 70)" />
                </div>
                <div class="infotext">
                    <p class="bold">Cuisson</p>
                    <p class="info-mini">{recipe.cook_time}</p>
                </div>
            </div>
            <div>
                <div class="icon">
                    <Icon name="time" width="24px" height="24px" color="rgb(70, 70, 70)"/>
                </div>
                <div class="infotext">
                    <p class="bold">Total</p>
                    <p class="info-mini">{recipe.total_time}</p>
                </div>
            </div>
            <div>
                <div class="icon">
                </div>
                <div class="infotext">
                    <p class="bold">Portions</p>
                    <p class="info-mini">{recipe.servings}</p>
                </div>
            </div>
        </div>

        <div class="ingredients">
            <h2>Ingrédients</h2>

            <ul>
                {#each recipe.ingredients as label, id}
                    <li>
                        <Checkbox {label} id="ingredient-{id}" />
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
        margin-bottom: 10px;
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
        width: 70%;
        gap: 40px;
        row-gap: 5px;
    }

    .infos > div >.icon {
        margin: 5px;
        padding-left: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .infos > div {
        min-width: 70px;
        min-height: 50px;
        height: 70%;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
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

    .infotext {
        text-align: center;
    }

    .infotext > p {
        margin: 0;
    }

    .info-mini {
        font-size: 0.75em;
    }

    .ingredients {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .ingredients > h2 {
        text-align: center;
    }

    .ingredients > ul {
        width: 90%;
        padding-left: 5px;
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

    .instructions > ol {
        padding-left: 10px;
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

    .notes > p {
        text-align: center;
        font-size: 0.9rem;
    }

    .footer {
        margin-top: 100px;
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        color: rgb(81, 81, 81);
    }

    .footer > p {
        text-align: center;
        font-size: 0.8rem;
    }

    .bold {
        font-weight: bold;
        font-size: 1em;
    }
</style>
