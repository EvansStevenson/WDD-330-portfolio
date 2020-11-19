import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderShopingCart(){
    let content = 
    `
    <h1>My Shoping Cart<h1> 
    <button id="myShopingListBtn">Make shoping list</button>
    `;
    selectId("my-shoping-cart").innerHTML = content;
}