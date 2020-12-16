import Recipe from './recipe-class.js';

// OLD LISTENER FUNCTION! Changed so that click can be used with touchend
// export default function listener(id, listener, tasks) {
//     document.getElementById(id).addEventListener(listener, tasks)
// }

//takes id (string) and anonymous function and creates a listener
//that watches for a touchend or click 
export default function listener(id, listener, tasks){
    let item = document.getElementById(id);
    item.addEventListener("touchend", (e)=>{
        e.preventDefault();
        tasks();
    });
    item.addEventListener("click", tasks);
}

//takes id (string) and returns the element object 
export function selectId(id) {
    return document.getElementById(id);
}

//gives the hidden attribute to the object with the given id as an argument 
export function setHidden(id, hidden) {
    selectId(id).hidden = hidden;
}

//cuts down on code size by simplifying creating a new key-value pair in local storage 
export function setLocalData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//cuts down on code size by simplifying getting a value from local storage with its key as the argument 
export function getLocalData(item) {
    return JSON.parse(window.localStorage.getItem(item));
}

//This application looks very empty without recipes loaded into local storage.
//Since whoever grading this application will not want to add in several recipes,
//these sample recipes will be loaded in if there is no local storage data
export function populateLocalStorageForDemo() {
    let one = new Recipe("8", "15", "30", "Easy Tuna Casserole", [
        {
            ingredient: "cooked macaroni",
            amount: "3",
            unit: "cups",
            selected: false,
        },
        {
            ingredient: "can tuna, drained",
            amount: "5",
            unit: "ounces",
            selected: false,
        },
        {
            ingredient: "cream of chicken soup",
            amount: "1",
            unit: "can",
            selected: false,
        },
        {
            ingredient: "shredded Cheddar cheese",
            amount: "1",
            unit: "cup",
            selected: false,
        },
        {
            ingredient: "French fried onions",
            amount: "1 1/2",
            unit: "cups",
            selected: false,
        }
    ],
        [
            "Preheat oven to 350 degrees F (175 degrees C).",
            "In a 9x13-inch baking dish, combine the macaroni, tuna, and soup. Mix well, and then top with cheese.",
            "Bake at 350 degrees F (175 degrees C) for about 25 minutes, or until bubbly. Sprinkle with fried onions, and bake for another 5 minutes. Serve hot."
        ],
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4560684.jpg&w=272&h=272&c=sc&poi=face&q=85");

    let two = new Recipe("6", "10", "30", "Kielbasa with Peppers and Potatoes", [
        {
            ingredient: "vegetable oil",
            amount: "1",
            unit: "tablespoon",
            selected: false,
        },
        {
            ingredient: "smoked kielbasa sausage, diced",
            amount: "16",
            unit: "ounces",
            selected: false,
        },
        {
            ingredient: "red potatoes, diced",
            amount: "6",
            unit: "medium",
            selected: false,
        },
        {
            ingredient: "bell pepper, sliced",
            amount: "1",
            unit: "red",
            selected: false,
        },
        {
            ingredient: "bell pepper, sliced",
            amount: "1",
            unit: "yellow",
            selected: false,
        }
    ],
        [
            "Heat the oil in a saucepan over medium heat. Place kielbasa and potatoes in the saucepan. Cover, and cook 25 minutes, stirring occasionally, until potatoes are tender.",
            "Mix red bell pepper and yellow bell pepper into the saucepan, and continue cooking 5 minutes, until peppers are just tender."
        ],
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F677450.jpg&w=272&h=272&c=sc&poi=face&q=85");

    let three = new Recipe("4", "10", "20", "Mexican Casserole", [
        {
            ingredient: "refried beans",
            amount: "1",
            unit: "(16 ounce) can",
            selected: false,
        },
        {
            ingredient: "onion, diced",
            amount: "3/4",
            unit: "white",
            selected: false,
        },
        {
            ingredient: "tortillas",
            amount: "5",
            unit: "(10 in) flour",
            selected: false,
        },
        {
            ingredient: "salsa",
            amount: "1",
            unit: "cup",
            selected: false,
        },
        {
            ingredient: "shredded Cheddar or Colby Jack cheese",
            amount: "2",
            unit: "cups",
            selected: false,
        },
    ],
        [
            "Preheat oven to 375 degrees F (190 degrees C). Spray a 9-inch pie pan with non-stick cooking spray.",
            "In a saucepan, cook refried beans and onions (to soften them) on medium-high heat for about 5 minutes.",
            "Place one tortilla in the bottom of the greased pan. Spread about 1/3 cup of the bean mixture over it. Layer a few tablespoons of salsa over this. Then, place another tortilla over the salsa, and add more of the bean mixture. Follow the beans with a big handful of cheese, spreading evenly. repeat layers, spreading the ingredients evenly over the tortillas. On the top layer, make sure to use lots of salsa and cheese!",
            "Bake until the cheese is melted, approximately 15 to 20 minutes."
        ],
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2147627.jpg&w=272&h=272&c=sc&poi=face&q=85");

    let four = new Recipe("4", "5", "20", "Smoked Cheese Ravioli", [
        {
            ingredient: "frozen cheese ravioli",
            amount: "1",
            unit: "(16 ounce) package",
            selected: false,
        },
        {
            ingredient: "half-and-half cream",
            amount: "1",
            unit: "cup",
            selected: false,
        },
        {
            ingredient: "shredded smoked Gouda cheese",
            amount: "1",
            unit: "cup",
            selected: false,
        },
        {
            ingredient: "chopped fresh parsley",
            amount: "1",
            unit: "teaspoon",
            selected: false,
        },
        {
            ingredient: "white pepper",
            amount: "1",
            unit: "teaspoon",
            selected: false,
        },
    ],
        [
            "Bring a large pot of lightly salted water to a rolling boil over high heat; stir in the frozen ravioli and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 6 to 8 minutes. Drain.",
            "Meanwhile, bring the half-and-half to a simmer in a saucepan over medium heat. Whisk in the Gouda cheese until melted; season with parsley and white pepper. Pour the sauce over the cooked ravioli to serve."
        ],
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F264372.jpg&w=272&h=272&c=sc&poi=face&q=85");

    let five = new Recipe("4", "15", "25", "Simple Roasted Butternut Squash", [
        {
            ingredient: "butternut squash",
            amount: "1",
            unit: "peeled, seeded, and cut into 1-inch cubes",
            selected: false,
        },
        {
            ingredient: "olive oil",
            amount: "2",
            unit: "tablespoons",
            selected: false,
        },
        {
            ingredient: "garlic (minced)",
            amount: "2",
            unit: "cloves",
            selected: false,
        },
        {
            ingredient: "salt and ground black pepper (to taste)",
            amount: "1-2",
            unit: "teaspoons (each)",
            selected: false,
        }
    ],
        [
            "Preheat oven to 400 degrees F (200 degrees C).",
            "Toss butternut squash with olive oil and garlic in a large bowl. Season with salt and black pepper. Arrange coated squash on a baking sheet.",
            "Roast in the preheated oven until squash is tender and lightly browned, 25 to 30 minutes."
        ],
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F957758.jpg&w=272&h=272&c=sc&poi=face&q=85");

    return [one, two, three, four, five]; //, two, three, four, five

}
