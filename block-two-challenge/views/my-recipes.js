import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderMyRecipes(user) {
    let content =
        `
    <h1>My Recipes<h1> 
    `;
    let i = 0;
    for (let recipe of user.recipes) {
        content += `
        <div class="recipecard">
        <h3>${recipe.title}</h3>
        <img src="${recipe.img}" alt="image not found"><br>
        <div id="${"hideRecipe" + i}" hidden>
        <p>Servings: ${recipe.servings} | Prep Time: ${recipe.prepTime} | Cook Time: ${recipe.cookTime}</p>
        `
        content += "<h4>Ingredients:</h4>"
        for (let ingredient of recipe.ingredients) {
            content += `
            <p>${ingredient.amount}
            ${ingredient.unit} | 
            ${ingredient.ingredient}</p>
            `
        }
        content += "<h4>Directions:</h4>"
        for (let i = 0; i < recipe.directions.length; i++) {
            content += `
            <p>Step ${i + 1}:<br> ${recipe.directions[i]}</p>
            `
        }
        content += `
        </div>
        <button class="bluebtn" id="${"viewRecipe" + i}">View Recipe</button>`
        let found = false
        for (let cartrecipe of user.cart) {
            if (recipe.id === cartrecipe.id) {
                found = true;
            }
        }
        if (found === false) {
            content += `
            <button class="bluebtn" id="${recipe.id}">Add To Shopping Cart</button>`;
        }
        else {
            content += `
            <button class="bluebtn" id="${recipe.id}" hidden>Add To Shopping Cart</button>
            <button class="bluebtn noRound">View Cart</button>`;
        }
        content += `
        <button class="redbtn" id="remove${recipe.id}">Remove Recipe</button>
        </div >
            `;
        i++;
    }
    selectId("my-recipes").innerHTML = content;
}