import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderShopingCart(user) {
    let content =
        `
    <h1>My Shoping Cart<h1> 
    `

    console.log(user.cart);
    if (user.cart.length === 0) {
        content += '<h3>No Recipes In Cart</3><br>'
        content += `
        <button id="myShopingListBtn" hidden>Make shoping list</button>
        `;
    }
    else {
        for (let item of user.cart){
            content += `
            <h2>${item.title}</h2>
            `
        }
        content += `
        <button id="myShopingListBtn">Make shoping list</button>
        `;
    }


    selectId("my-shoping-cart").innerHTML = content;
}