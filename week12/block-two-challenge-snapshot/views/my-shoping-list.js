import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderShopingList(user) {
    let content =
        `
    <h1>My Shoping List</h1> 
    `;

    let i = 0;
    for(let item of user.list){
        if(item.selected === false){
        content += `
        <p id="item${i}" class="notslash">${item.amount} ${item.unit} | ${item.ingredient}</p>
        ` 
        }
        else{
        content += `
        <p id="item${i}" class="slash">${item.amount} ${item.unit} | ${item.ingredient}</p>
        ` 
        }
        i++;
    }

    content += `
    <button id="hideSelectedBtn">Delete Selected Ingredients</button>
    <button id="clearShopBtn">Clear Shopping list and Cart</button>
    `
    selectId("my-shoping-list").innerHTML = content;
}

