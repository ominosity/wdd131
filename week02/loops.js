//loops.js
const myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);

myInfo.favoriteFoods.forEach(function (food) {
    let foodElement = document.createElement("li");
    foodElement.textContent = food;
    document.querySelector("#favorite-foods-foreach").appendChild(foodElement);
});

myInfo.favoriteFoods.map(addToDOM);

function addToDOM(item) {
    let itemElement = document.createElement("li");
    itemElement.textContent = item;
    document.querySelector("#favorite-foods-map").appendChild(itemElement);
}

function foodElement(food) {
    return `<li>${food}</li>`
}

function placeElement(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

function generateMarkup(list, callBack) {
    const newList = list.map(callBack);
    return newList.join("");
}

const foodsElement = document.querySelector("#favorite-foods-weird");
const placesElement = document.querySelector("#places-lived");

foodsElement.innerHTML = generateMarkup(
    myInfo.favoriteFoods,
    foodElement
);

placesElement.innerHTML = generateMarkup(
    myInfo.placesLived,
    placeElement
);


const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
};

let i = 0;
while (i < studentReport.length)
{
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++;
};

//foreach
studentReport.forEach(function (score) {
    if (score < LIMIT) {
        console.log(score)
    }    
});

//for...in
for (const score in studentReport) {
    if (studentReport[score] < LIMIT) {
        console.log(studentReport[score])
    }
};

const DAYS = 6;
let today = new Date();
for (let i = 0; i < DAYS; i++) {
    today.setDate(today.getDate() + 1);
    const dayName = today.toLocaleDateString(undefined, { weekday: 'long' });
    console.log(dayName)
};