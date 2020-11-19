import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderMyRecipes(){ 
    let content = 
    `
    <h1>My Recipes<h1> 
    `;
    selectId("my-recipes").innerHTML = content;
}