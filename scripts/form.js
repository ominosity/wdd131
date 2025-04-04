/* Get HTML Elements for manipulation */
const yearElement = document.getElementById('year');
const modifiedDateElement = document.getElementById('modified-date');
const productSelectElement = document.getElementById('product-name');
const reviewCounterElement = document.getElementById('review-counter');

/* Get the year and insert it into the span for the copyright section */
let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

/* Get the modified date and insert it into the footer */
const modifiedDate = document.lastModified;
modifiedDateElement.textContent = modifiedDate;

/* Create products */
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

/* Create product options and add to DOM */
function createOption(productObject) {
    let optionElement = document.createElement('option');
    optionElement.value = productObject.id;
    optionElement.textContent = productObject.name
    productSelectElement.appendChild(optionElement);
}

/* Only run on pages with product lists */
if (productSelectElement !== null) {
    products.forEach(option => createOption(option));
}

/* Track how many reviews the user has submitted */
if (reviewCounterElement !== null) {
    reviewCounter = parseInt(window.localStorage.getItem('review-counter'));
    if (reviewCounter) {
        reviewCounter += 1;
        reviewCounterElement.textContent = reviewCounter;
        window.localStorage.setItem('review-counter', reviewCounter)
    } else {
        reviewCounter = 1;
        reviewCounterElement.textContent = reviewCounter;
        window.localStorage.setItem('review-counter', reviewCounter)
    }
}
