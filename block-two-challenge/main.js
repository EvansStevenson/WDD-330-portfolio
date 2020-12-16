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
if (getLocalData("list") !== null) {
    user.list = getLocalData("list");
}

//listener method from utils shortens the need to constantly select id's and assign listeners to them.
//These listeners are for the four main home button interface
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

/* MAIN LOGIC */
//Hides all main divs within the home.html document and removes the hidden
//attribute from the viewHome div
function hideEverything() {
    setHidden("viewHome", false);
    setHidden("add-recipe", true);
    setHidden("my-recipes", true);
    setHidden("my-shoping-cart", true);
    setHidden("my-shoping-list", true);
    setHidden("recipe-info", true);
}

//Add a new recipe to both the current instance of the user object and local storage
function addRecipe() {
    setHidden("viewHome", true)
    setHidden("add-recipe", false)
    renderRecipeForm(); //render html
    let numberOfDirections = 1; //keep track of dynamic elements of form
    let numberOfIngredients = 1;//keep track of dynamic elements of form
    listener("directionBtn", 'touchend', () => { //generate additional HTML as needed
        numberOfDirections++;
        addDirection(numberOfDirections);
    });
    listener('ingredientBtn', 'touchend', () => {
        numberOfIngredients++;
        addIngredient(numberOfIngredients);
    });
    listener('addRecipeSubmit', 'touchend', () => { //add new recipe 
        //form validation 
        let formvalidation = true;
        if (!selectId('servings').checkValidity()) {
            selectId('servings').className += " error";
            formvalidation = false;
        }
        else{
            selectId('servings').className = "";
        }
        if (!selectId('preperationMinutes').checkValidity()) {
            selectId('preperationMinutes').className += " error";
            formvalidation = false;
        }
        else{
            selectId('preperationMinutes').className = "";
        }
        if (!selectId('cookingMinutes').checkValidity()) {
            selectId('cookingMinutes').className += " error";
            formvalidation = false;
        }
        else{
            selectId('cookingMinutes').className = "";
        }
        if (!selectId('title').checkValidity()) {
            selectId('title').className += " error";
            formvalidation = false;
        }
        else{
            selectId('title').className = "";
        }
        for (let i = 0; i < numberOfIngredients; i++) {
            let id = i + 1;
            if (!selectId('ingredient' + id).checkValidity()) {
                selectId('ingredient' + id).className += " error";
                formvalidation = false;
            }
            else{
                selectId('ingredient' + id).className = "";
            }
            if (!selectId('amount' + id).checkValidity()) {
                selectId('amount' + id).className += " error";
                formvalidation = false;
            }
            else{
                selectId('amount' + id).className = "";
            }
            if (!selectId('unit' + id).checkValidity()) {
                selectId('unit' + id).className += " error";
                formvalidation = false;
            }
            else{
                selectId('unit' + id).className = "";
            }
        }
        for (let i = 0; i < numberOfDirections; i++) {
            let id = i + 1;
            if (!selectId('direction' + id).checkValidity()) {
                selectId('direction' + id).className += " error";
                formvalidation = false;
            }
            else{
                selectId('direction' + id).className = "";
            }
        }
        if (!selectId('imgid').checkValidity()) {
            selectId('imgid').className += " error";
            formvalidation = false;
        }
        else{
            selectId('imgid').className = "";
        }

        //if validation passed
        if (formvalidation) {
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
        }else{ //if validation did not pass
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setHidden("errorMessage", false);
        }
    });
}

//View recipes that are in the user object (populated by local storage)
function myRecipes() {
    setHidden("viewHome", true);
    setHidden("my-recipes", false);
    renderMyRecipes(user);
    for (let i = 0; i < user.recipes.length; i++) {
        //hide or view recipe details
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
        //add recipe to cart
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
                user.list = [];
                for (let recipe of user.cart) {
                    for (let item of recipe.ingredients) {
                        user.list.push(item);
                    }
                }
                setLocalData("list", user.list);
            }
            myRecipes();
        })
        //remove a recipe from application
        listener("remove" + user.recipes[i].id, "touchend", () => {
            let check = confirm("are you sure you want to permanently delete \"" + user.recipes[i].title + "\"?");
            if (check) {
                let newRecipes = [];
                for (let j = 0; j < user.recipes.length; j++) {
                    if (user.recipes[i] !== user.recipes[j]) {
                        newRecipes.push(user.recipes[j]);
                    }
                }
                user.recipes = newRecipes;
                setLocalData('recipes', user.recipes);
                myRecipes();
            }
        })
    }
    //if the recipe is in the cart, these buttons can take you to the cart view
    let cart = document.getElementsByClassName("noRound");
    for (let item of cart) {
        item.addEventListener("touchend", (e) => {
            e.preventDefault();
            hideEverything();
            myShopingCart();
        })
        item.addEventListener("click", ()=>{
            hideEverything();
            myShopingCart();
        });
    }
}

//shows all recipes in shopping cart
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

//shows all ingredients for all recipes in the shopping cart
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
    let clearList = () => {
        window.localStorage.removeItem('cart');
        user.cart = [];
        setHidden("my-shoping-list", true);
        myShopingCart(user);
    }
    listener("clearShopBtn", "touchend", () => {
        clearList();
    });

    if (user.list.length === 0) {
        clearList();
    }
}