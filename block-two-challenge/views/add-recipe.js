import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderRecipeForm(){ 
    let form = 
    `
    <h1>Add Recipe<h1>
    <h4 id="errorMessage" style="color: red;" hidden>Please fill out all highlighted fields!</h4> 
    <label for="servings">Servings</label><br>
    <input type="number" step=".1" placeholder="Servings" id="servings" required><br><br>

    <label for="preperationMinutes">Preparation Time (Minutes)</label><br>
    <input type="number" step=".01" placeholder="Preparation Time" id="preperationMinutes" required><br><br>

    <label for="cookingMinutes">Cooking Time (Minutes)</label><br>
    <input type="number" step=".01" placeholder="Cooking Time" id="cookingMinutes" required><br><br>

    <label for="title">Title</label><br>
    <input type="text" placeholder="Title" id="title" required><br><br>

   
    <div class="ingredients" id="ingredients">
    <label for="ingredient1">Ingredients</label><br>
    <input type="text" placeholder="Ingredient #1"  id="ingredient1" required><br>
    <input type="text" step=".01" placeholder="amount" id="amount1" required><br>
    <input type="text" id="unit1" placeholder="Unit (cup, teaspoon, etc.)" required><br>
    <hr>
    </div>
    <button type='button' id="ingredientBtn">Add another Ingredient</button><br><br>

    <label for="direction1">Directions</label><br>
    <textarea placeholder="Direction #1" id="direction1"required></textarea><br>
    <div id="directions">
    </div>
    <button type="button" id="directionBtn">Add another Direction</button><br><br>
    <label>Image Url</lable>
    <input type="text" placeholder="image url" id="imgid" required><br><br>
    <button type="button" id="addRecipeSubmit">Add Recipe</button><br><br>
    `;
    selectId("add-recipe").innerHTML = form;
}

export function addDirection(numberOfDirections) {
    let newDirection = document.createElement("textarea");
    newDirection.setAttribute('placeholder', 'Direction #' + numberOfDirections.toString());
    newDirection.setAttribute("class", "");
    newDirection.setAttribute('id', 'direction' + numberOfDirections.toString());
    newDirection.required = true;
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
    ingredient.required = true;
    div.appendChild(ingredient);
    let br = document.createElement("br");
    div.appendChild(br);

    let amount = document.createElement("input");
    amount.setAttribute('id', 'amount' + numberOfIngredients.toString());
    amount.setAttribute('type', 'text');
    amount.setAttribute('placeholder', 'amount');
    amount.required = true;
    div.appendChild(amount);
    let br2 = document.createElement("br");
    div.appendChild(br2);

    let unit = document.createElement("input");
    unit.setAttribute("id", 'unit' + numberOfIngredients.toString());
    unit.setAttribute("type", "text");
    unit.setAttribute("placeholder", "Unit (cup, teaspoon, etc.)");
    unit.setAttribute('id', 'unit' + numberOfIngredients.toString());
    unit.required = true;
    div.appendChild(unit);
    let br3 = document.createElement("br");
    div.appendChild(br3);
    let hr = document.createElement("hr");
    div.appendChild(hr);
}