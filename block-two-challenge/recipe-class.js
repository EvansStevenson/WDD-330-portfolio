export default class Recipe {
    constructor(servings, prepTime, cookTime, title, ingredients, directions, img){
        this.servings = servings; //number
        this.prepTime = prepTime; //number
        this.cookTime = cookTime; //number
        this.title = title; //string 
        this.ingredients = ingredients; //array (of objects)
        this.directions = directions; //array (of strings)
        this.img = img; //string
        this.id = Math.floor(Math.random() * Date.now()) //generate unique id
    }

    displayRecipe(){
        return `
        <h2>${this.title}</h2>
        `
    }

    displayListItem(){

    }

    editRecipe(){

    }
}