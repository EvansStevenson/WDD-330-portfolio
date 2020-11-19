import listener from './utils.js';
import { selectId, setHidden} from './utils.js';
import renderRecipeForm from './views/add-recipe.js';
import renderMyRecipes from './views/my-recipes.js';
import renderShopingCart from './views/my-shoping-cart.js'
import renderShopingList from './views/my-shoping-list.js'

//listener method from utils shortens the need to constantly select id's and assign listeners to them.
listener("homeBtn", "touchend", () => {
    setHidden("viewHome", false);
    setHidden("add-recipe", true);
    setHidden("my-recipes", true);
    setHidden("my-shoping-cart", true);
    setHidden("my-shoping-list", true);
    setHidden("recipe-info", true);
})
listener("addRecipeBtn", "touchend", () => {
    setHidden("viewHome", true)
    setHidden("add-recipe", false)
    renderRecipeForm();
})
listener("myRecipesBtn", "touchend", () => {
    setHidden("viewHome", true);
    setHidden("my-recipes", false);
    renderMyRecipes();
})
listener("myShopingCartBtn", "touchend", () => {
    setHidden("viewHome", true);
    setHidden("my-shoping-cart", false);
    renderShopingCart();
    listener("myShopingListBtn", "touchend", ()=>{
        setHidden("my-shoping-cart", true);
        setHidden("my-shoping-list", false);
        renderShopingList();
    })
})
