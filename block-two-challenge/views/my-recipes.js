import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderMyRecipes(user){ 
    let content = 
    `
    <h1>My Recipes<h1> 
    `;
    let i = 0;
    for (let recipe of user.recipes){
        content += `
        <h3>${recipe.title}</h3>
        <img src="${recipe.img}" alt="image not found"><br>
        <div id="${"hideRecipe" + i}" hidden>
        <p>Servings: ${recipe.servings} | Prep Time: ${recipe.prepTime} | Cook Time: ${recipe.cookTime}</p>
        `
        content += "<h4>Ingredients:</h4>"
        for (let ingredient of recipe.ingredients){
            content += `
            <p>${ingredient.amount}
            ${ingredient.unit} | 
            ${ingredient.ingredient}</p>
            `
        }
        content += "<h4>Directions:</h4>"
        for (let i = 0; i< recipe.directions.length; i++){
            content += `
            <p>Direction #${i + 1}: ${recipe.directions[i]}</p>
            `
        }
        content += `
        </div>
        <button id="${"viewRecipe" + i}">View Recipe</button>
        <button id="${recipe.id}">Add To Shopping List</button>
        <button id="remove${recipe.id}">Remove Recipe</button>
        `;
        i++;
    }
    selectId("my-recipes").innerHTML = content;
}