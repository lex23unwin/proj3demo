let sweetCrepes = document.querySelector("#menu-body-sweet-crepes");
let savoryCrepes = document.querySelector("#menu-body-savory-crepes");
let kidsCrepes = document.querySelector("#menu-body-kids-crepes");
let sweetParisWaffles = document.querySelector("#menu-body-sweet-paris-waffles");
let breakfastCrepesAndWaffles = document.querySelector("#menu-body-breakfast-crepes-and-waffles");
let soupsSaladsAndPaninis = document.querySelector("#menu-body-soups-salads-and-paninis");
let leBar = document.querySelector("#menu-body-le-bar");
let hotDrinksAndMilkshakes = document.querySelector("#menu-body-hot-drinks-and-milkshakes");
let beverages = document.querySelector("#menu-body-beverages");

let sweetCrepesCategory = document.querySelector("#menu-main-menu-sweet-crepes");
let savoryCrepesCategory = document.querySelector("#menu-main-menu-savory-crepes");
let kidsCrepesCategory = document.querySelector("#menu-main-menu-kids-crepes");
let sweetParisWafflesCategory = document.querySelector("#menu-main-menu-sweet-paris-waffles");
let breakfastCrepesAndEggsCategory = document.querySelector("#menu-main-menu-breakfast-crepes-and-eggs");
let soupsSaladsAndPaninisCategory = document.querySelector("#menu-main-menu-soups-salads-and-paninis");
let leBarCategory = document.querySelector("#menu-main-menu-le-bar");
let hotDrinksAndMilkshakesCategory = document.querySelector("#menu-main-menu-hot-drinks-and-milkshakes");
let waterAndBeveragesCategory = document.querySelector("#menu-main-menu-water-and-beverages");

let activeSection = sweetCrepes;

sweetCrepesCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    sweetCrepes.style.display = "flex";
    activeSection = sweetCrepes;
})

savoryCrepesCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    savoryCrepes.style.display = "flex";
    activeSection = savoryCrepes;
});

kidsCrepesCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    kidsCrepes.style.display = "flex";
    activeSection = kidsCrepes;
});

sweetParisWafflesCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    sweetParisWaffles.style.display = "flex";
    activeSection = sweetParisWaffles;
});

breakfastCrepesAndEggsCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    breakfastCrepesAndWaffles.style.display = "flex";
    activeSection = breakfastCrepesAndWaffles;
});

soupsSaladsAndPaninisCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    soupsSaladsAndPaninis.style.display = "flex";
    activeSection = soupsSaladsAndPaninis;
});

leBarCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    leBar.style.display = "flex";
    activeSection = leBar;
});

hotDrinksAndMilkshakesCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    hotDrinksAndMilkshakes.style.display = "flex";
    activeSection = hotDrinksAndMilkshakes;
});

waterAndBeveragesCategory.addEventListener("click", () => {
    activeSection.style.display = "none";
    beverages.style.display = "flex";
    activeSection = beverages;
});

/*********************************************/

/*set unique id's for all of the -'s and +'s so that
way when they click on + or - to add something to cart,
JS knows exactly which item to copy into cart*/

const categories = document.querySelectorAll(".menu-body-category-container")

categories.forEach((eachCategory) => 
{
    const categoryContainers = Array.from(eachCategory.children);

    let i = 0;
    const idOfCategoryContainer = eachCategory.getAttribute("id");

    categoryContainers.forEach((eachCategoryEntry) => 
    {
        const decrementButton = eachCategoryEntry.querySelector('.decrement-button');
        let amountCounter = eachCategoryEntry.querySelector('.amount-counter');
        const incrementButton = eachCategoryEntry.querySelector('.increment-button');

        decrementButton.id = `${idOfCategoryContainer}-minus-${i}`;
        amountCounter.id = `${idOfCategoryContainer}-value-${i}`;
        incrementButton.id = `${idOfCategoryContainer}-plus-${i}`;

        decrementButton.style.cursor = "pointer";
        incrementButton.style.cursor = "pointer";

        const itemName = eachCategoryEntry.querySelector(".menu-body-entry-title").textContent

        decrementButton.addEventListener("click", () => 
        {
            //stuff for ordernow display
            let value = parseInt(amountCounter.textContent);
            if (value >= 1)
            {
                amountCounter.textContent = (value - 1).toString();
            }

            //stuff for cart,
            if (value == 1)
            {
                //then remove from cart
                removeFromCart(eachCategoryEntry);
            }
            else if (value >= 2)
            {
                //just decrement the quantity in the cart
                decrementCartItem(eachCategoryEntry);
            } 

        })

        incrementButton.addEventListener("click", () => 
        {
            //ordernow display
            let value = parseInt(amountCounter.textContent);
            amountCounter.textContent = (value + 1).toString();

            //cart stuff
            if (value == 0)
            {
                //add line in the cart for the item
                //and set its quantity to be 1, of course
                addToCart(eachCategoryEntry);
            }
            else if (value >= 1)
            {
                //just increment the quantity in the cart
                incrementCartItem(eachCategoryEntry);
            }

        })

        i += 1;

    })

});


function addToCart(eachCategoryEntry)
{
    const mainCartOrderContainer = document.querySelector(".main-cart-order-container");

    const newCartEntry = document.createElement("div");
    newCartEntry.classList.add("main-cart-entry");
    newCartEntry.id = `main-cart-entry-${returnIncrementedID()}`;

    const newCartEntryTitle = document.createElement("div");
    const title = eachCategoryEntry.querySelector(".menu-body-entry-title").textContent;
    newCartEntryTitle.textContent = title;

    const newCartEntryQuantity = document.createElement("div");
    newCartEntryQuantity.textContent = 1;

    newCartEntry.appendChild(newCartEntryTitle);
    newCartEntry.appendChild(newCartEntryQuantity);

    mainCartOrderContainer.appendChild(newCartEntry);
}

function removeFromCart(eachCategoryEntry)
{
    let mainCartOrderContainer = document.querySelector(".main-cart-order-container");

    const mainCartEntries = mainCartOrderContainer.querySelectorAll(".main-cart-entry");

    mainCartEntries.forEach(eachEntry => 
    {
        const entryTitle = eachEntry.querySelector(".main-cart-entry-title").textContent;
        const entryQuantity = eachEntry.querySelector(newCartEntryQuantity).textContent;

        const eachCategoryEntryTitle = eachCategoryEntry.querySelector(".menu-cart-entry-title");

        if (entryTitle === eachCategoryEntryTitle)
        {
            mainCartOrderContainer.removeChild(eachEntry);
        }
    })

    returnDecrementedID();

}

function incrementCartItem(eachCategoryEntry)
{
    let mainCartOrderContainer = document.querySelector(".main-cart-order-container");

    const mainCartEntries = mainCartOrderContainer.querySelectorAll(".main-cart-entry");

    mainCartEntries.forEach(eachEntry => {
        const entryTitle = eachEntry.querySelector(".main-cart-entry-title").textContent;
        const entryQuantity = eachEntry.querySelector(newCartEntryQuantity)
        const eachCategoryEntryTitle = eachCategoryEntry.querySelector(".menu-cart-entry-title");

        if (entryTitle === eachCategoryEntryTitle)
        {
            entryQuantity.textContent = parseInt(entryQuantity.textContent) + 1;
        }

    })
}

function decrementCartItem(eachCategoryEntry)
{
    let mainCartOrderContainer = document.querySelector(".main-cart-order-container");

    const mainCartEntries = mainCartOrderContainer.querySelectorAll(".main-cart-entry");

    mainCartEntries.forEach(eachEntry => {
        const entryTitle = eachEntry.querySelector(".main-cart-entry-title").textContent;
        const entryQuantity = eachEntry.querySelector(newCartEntryQuantity).textContent;

        const eachCategoryEntryTitle = eachCategoryEntry.querySelector(".menu-cart-entry-title");

        if (entryTitle === eachCategoryEntryTitle)
        {
            entryQuantity.textContent = parseInt(entryQuantity.textContent) - 1;
        }
    })
}

let cartID = 1;

function returnIncrementedID()
{
    cartID += 1;
    return cartID;
}

function returnDecrementedID()
{
    cartID -= 1;
    return cartID;
}