import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderRecipeForm(){ 
    let form = 
    `
    <h1>Add Recipe<h1> 
    `;
    selectId("add-recipe").innerHTML = form;
}