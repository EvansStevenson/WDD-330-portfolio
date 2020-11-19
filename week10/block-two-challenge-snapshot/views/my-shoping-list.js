import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderShopingList(){
    let content = 
    `
    <h1>My Shoping List<h1> 
    <button id="myShopingListBtn">Make shoping list</button>
    `;
    selectId("my-shoping-list").innerHTML = content;
}