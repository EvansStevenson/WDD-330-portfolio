import listener from '../utils.js';
import { selectId } from '../utils.js';
export default function renderShopingCart(user) {
    let content =
        `
    <h1>My Shoping Cart</h1> 
    `
    if (user.cart.length === 0) {
        content += '<h3>No Recipes In Cart</3><br>'
        content += `
        <button class="graybtn" id="myShopingListBtn" hidden>Make shoping list</button>
        `;
    }
    else {
        for (let item of user.cart){
            content += `
            <button class="redbtn" id="removeCart${item.id}">Remove ${item.title} from cart</button> 
            `
        }
        content += `
        <br><button class="graybtn" id="myShopingListBtn">Make shoping list</button>
        `;
    }


    selectId("my-shoping-cart").innerHTML = content;
}