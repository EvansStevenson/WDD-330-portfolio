//imports
import listener from './utils.js';
import {
    selectId,
    setHidden,
    getLocalData,
    setLocalData,
    populateLocalStorageForDemo,
} from './utils.js';
import Recipe from './recipe-class.js';
import User from './user-class.js';
import renderRecipeForm from './views/add-recipe.js';
import { addDirection, addIngredient } from './views/add-recipe.js';
import renderMyRecipes from './views/my-recipes.js';
import renderShopingCart from './views/my-shoping-cart.js';
import renderShopingList from './views/my-shoping-list.js';

//Get data from local storage
var user = new User;
if (getLocalData("recipes") !== null) {
    user.recipes = getLocalData("recipes");
}
else {
    setLocalData("recipes", populateLocalStorageForDemo());
    user.recipes = getLocalData("recipes");
}
if (getLocalData("cart") !== null) {
    user.cart = getLocalData("cart");
}
else {
    setLocalData("cart", []);
}
if(getLocalData("list") !== null){
    user.list = getLocalData("list");
}

//listener method from utils shortens the need to constantly select id's and assign listeners to them.
listener("homeBtn", "touchend", () => {
    hideEverything();
})
listener("addRecipeBtn", "touchend", () => {
   addRecipe();
})
listener("myRecipesBtn", "touchend", () => {
    myRecipes();
})
listener("myShopingCartBtn", "touchend", () => {
    myShopingCart();
})

//funtions
function hideEverything() {
    setHidden("viewHome", false);
    setHidden("add-recipe", true);
    setHidden("my-recipes", true);
    setHidden("my-shoping-cart", true);
    setHidden("my-shoping-list", true);
    setHidden("recipe-info", true);
}

function addRecipe(){
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
                unit: selectId('unit' + id).value,
                selected: false,
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
        
        //add to local storage
        user.recipes.push(recipe);
        setLocalData('recipes', user.recipes);
        hideEverything();
        myRecipes();
    });
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
            let found = false
            for (let recipe of user.cart) {
                if (recipe.id === user.recipes[i].id) {
                    found = true;
                }
            }
            if (found === false) {
                user.cart.push(user.recipes[i]);
                setLocalData('cart', user.cart);
                alert("added '" + user.recipes[i].title + "' to your cart")
                user.list = [];
                for (let recipe of user.cart) {
                    for (let item of recipe.ingredients) {
                        user.list.push(item);
                    }
                }
                setLocalData("list", user.list);
            }
        })
        listener("remove" + user.recipes[i].id, "touchend", () => {
            let newRecipes = [];
            for (let j = 0; j < user.recipes.length; j++) {
                if (user.recipes[i] !== user.recipes[j]) {
                    newRecipes.push(user.recipes[j]);
                }
            }
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

    for (let recipe of user.cart) {
        listener("removeCart" + recipe.id, "touchend", () => {
            let index = user.cart.indexOf(recipe);
            if (index > -1) {
                user.cart.splice(index, 1);
            }
            setLocalData("cart", user.cart);
            user.list = [];
            for (let recipe of user.cart) {
                for (let item of recipe.ingredients) {
                    user.list.push(item);
                }
            }
            setLocalData("list", user.list);
            myShopingCart();
        })
    }

    listener("myShopingListBtn", "touchend", () => {
        for (let recipe of user.cart) {
            for (let item of recipe.ingredients) {
                item.selected = false;
            }
        }
        myShopingList();
    })
}

function myShopingList() {
    setHidden("my-shoping-cart", true);
    setHidden("my-shoping-list", false);
    renderShopingList(user);

    for (let i = 0; i < user.list.length; i++) {
        listener("item" + i.toString(), "touchend", () => {
            if (user.list[i].selected === false) {
                user.list[i].selected = true;
                myShopingList();
            }
            else {
                user.list[i].selected = false;
                myShopingList();
            }
        })
    }

    // filter selected items
    listener("hideSelectedBtn", "touchend", () => {
        let newList = [];
        for (let item of user.list) {
            if (item.selected === false) {
                newList.push(item);
            }
        }
        user.list = newList;
        setLocalData("list", user.list)
        
        myShopingList(user);
    });

    // clear cart
    let clearList = ()=>{
        window.localStorage.removeItem('cart');
        user.cart = [];
        setHidden("my-shoping-list", true);
        myShopingCart(user);
    }
    listener("clearShopBtn", "touchend", () => {
        clearList();
    });

    if (user.list.length === 0){
        clearList();
    }
}