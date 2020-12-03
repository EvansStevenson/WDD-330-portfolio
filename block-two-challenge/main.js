import listener from './utils.js';
import {
    selectId,
    setHidden,
    getLocalData,
    setLocalData,
} from './utils.js';
import Recipe from './recipe-class.js';
import User from './user-class.js';
import renderRecipeForm from './views/add-recipe.js';
import { addDirection, addIngredient } from './views/add-recipe.js';
import renderMyRecipes from './views/my-recipes.js';
import renderShopingCart from './views/my-shoping-cart.js'
import renderShopingList from './views/my-shoping-list.js'
var user = new User;
if (getLocalData("recipes") !== null) {
    user.recipes = getLocalData("recipes");
    //console.log(user.recipes)
}
if (getLocalData("cart") !== null) {
    user.cart = getLocalData("cart");
    //console.log(user.cart);
}

//listener method from utils shortens the need to constantly select id's and assign listeners to them.
listener("homeBtn", "touchend", () => {
    hideEverything();
})

listener("addRecipeBtn", "touchend", () => {
    setHidden("viewHome", true)
    setHidden("add-recipe", false)
    renderRecipeForm();
    let numberOfDirections = 1;
    let numberOfIngredients = 1;
    listener("directionBtn", 'touchend', () => {
        numberOfDirections++;
        addDirection(numberOfDirections);
    });
    listener('ingredientBtn', 'touchend', () => {
        numberOfIngredients++;
        addIngredient(numberOfIngredients);
    });
    listener('addRecipeSubmit', 'touchend', () => {
        let servings = selectId('servings').value;
        let prepTime = selectId('preperationMinutes').value;
        let cookTime = selectId('cookingMinutes').value;
        let title = selectId('title').value;
        let ingredients = [];
        let directions = [];
        //get ingredients
        for (let i = 0; i < numberOfIngredients; i++) {
            let id = i + 1;
            let ingredient = {
                ingredient: selectId('ingredient' + id).value,
                amount: selectId('amount' + id).value,
                unit: selectId('unit' + id).value
            };
            ingredients.push(ingredient);
        }
        //get directions
        for (let i = 0; i < numberOfDirections; i++) {
            let id = i + 1;
            let direction = selectId('direction' + id).value;
            directions.push(direction);
        }
        let img = selectId('imgid').value;
        let recipe = new Recipe(servings, prepTime, cookTime, title, ingredients, directions, img);
        //console.log(recipe);
        //add to local storage
        user.recipes.push(recipe);
        setLocalData('recipes', user.recipes);
        hideEverything();
        myRecipes();
    });
})

listener("myRecipesBtn", "touchend", () => {
    myRecipes();
})
listener("myShopingCartBtn", "touchend", () => {
    myShopingCart();
})

function hideEverything() {
    setHidden("viewHome", false);
    setHidden("add-recipe", true);
    setHidden("my-recipes", true);
    setHidden("my-shoping-cart", true);
    setHidden("my-shoping-list", true);
    setHidden("recipe-info", true);
}

function myRecipes() {
    setHidden("viewHome", true);
    setHidden("my-recipes", false);
    renderMyRecipes(user);
    for (let i = 0; i < user.recipes.length; i++) {
        listener("viewRecipe" + i.toString(), "touchend", () => {
            let toggle = selectId("hideRecipe" + i.toString());
            if (toggle.hidden === true) {
                selectId("viewRecipe" + i.toString()).innerHTML = "Hide Recipe"
                toggle.hidden = false;
            }
            else {
                toggle.hidden = true;
                selectId("viewRecipe" + i.toString()).innerHTML = "View Recipe"
            }
        })
        listener(user.recipes[i].id, "touchend", () => {
            if (!user.cart.includes(user.recipes[i])) {
                user.cart.push(user.recipes[i]);
                setLocalData('cart', user.cart);
                alert("added '" + user.recipes[i].title + "' to your cart")
            }
        })
        listener("remove" + user.recipes[i].id, "touchend", () => {
            let newRecipes = [];
            for (let j = 0; j < user.recipes.length; j++) {
                if (user.recipes[i] !== user.recipes[j]) {
                    newRecipes.push(user.recipes[j]);
                }
            }
            console.log(newRecipes);
            user.recipes = newRecipes;
            setLocalData('recipes', user.recipes);
            myRecipes();
        })
    }
}

function myShopingCart() {
    setHidden("viewHome", true);
    setHidden("my-shoping-cart", false);
    renderShopingCart(user);
    listener("myShopingListBtn", "touchend", () => {
        myShopingList();
    })
}

function myShopingList() {
    setHidden("my-shoping-cart", true);
    setHidden("my-shoping-list", false);
    renderShopingList();
}