import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderRecipeForm(){ 
    let form = 
    `
    <h1>Add Recipe<h1> 
    <label for="servings">Servings</label><br>
    <input type="number" step=".1" placeholder="Servings" id="servings"><br><br>

    <label for="preperationMinutes">Preparation Time (Minutes)</label><br>
    <input type="number" step=".01" placeholder="Preparation Time" id="preperationMinutes"><br><br>

    <label for="cookingMinutes">Cooking Time (Minutes)</label><br>
    <input type="number" step=".01" placeholder="Cooking Time" id="cookingMinutes"><br><br>

    <label for="title">Title</label><br>
    <input type="text" placeholder="Title"  id="title"><br><br>

   
    <div id="ingredients">
    <label for="ingredient1">Ingredients</label><br>
    <input type="text" placeholder="Ingredient #1"  id="ingredient1">
    <input class=""  type="text" step=".01" placeholder="amount" id="amount1">
    <input type="text" id="unit1" placeholder="Unit (cup, teaspoon, etc.)"><br>
    </div>
    <button type='button' id="ingredientBtn">Add another Ingredient</button><br><br>

    <label for="direction1">Directions</label><br>
    <textarea placeholder="Direction #1" id="direction1"></textarea><br>
    <div id="directions">
    </div>
    <button type="button" id="directionBtn">Add another Direction</button><br>
    <input type="text" placeholder="image url" id="imgid"><br>
    <button type="button" id="addRecipeSubmit">Add Recipe</button><br><br>
    `;
    selectId("add-recipe").innerHTML = form;
}

export function addDirection(numberOfDirections) {
    let newDirection = document.createElement("textarea");
    newDirection.setAttribute('placeholder', 'Direction #' + numberOfDirections.toString());
    newDirection.setAttribute("class", "");
    newDirection.setAttribute('id', 'direction' + numberOfDirections.toString());
    document.getElementById('directions').appendChild(newDirection);
    let br = document.createElement("br");
    document.getElementById('directions').appendChild(br);
}

export function addIngredient(numberOfIngredients) {
    let ingredient = document.createElement("input");
    let div = document.getElementById('ingredients');
    ingredient.setAttribute('type', 'text');
    ingredient.setAttribute('placeholder', 'Ingredient #' + numberOfIngredients.toString());
    ingredient.setAttribute('id', 'ingredient' + numberOfIngredients.toString());
    ingredient.setAttribute("class", "");
    div.appendChild(ingredient);
    let br = document.createElement("br");
    div.appendChild(br);

    let amount = document.createElement("input");
    amount.setAttribute('id', 'amount' + numberOfIngredients.toString());
    amount.setAttribute('type', 'text');
    amount.setAttribute('placeholder', 'amount');
    amount.setAttribute('style', 'width: 80px;');
    div.appendChild(amount);
    div.appendChild(br);

    let unit = document.createElement("input");
    unit.setAttribute("id", 'unit' + numberOfIngredients.toString());
    unit.setAttribute("type", "text");
    unit.setAttribute("placeholder", "Unit (cup, teaspoon, etc.)");
    unit.setAttribute('id', 'unit' + numberOfIngredients.toString());
    div.appendChild(unit);
    div.appendChild(br);
}