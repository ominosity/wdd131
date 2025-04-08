/* Get page elements for manipulation */
const currentYearElement = document.getElementById('current-year');
const modifiedDateElement = document.getElementById('modified-date');

/* Update footer information */
const today = new Date().getFullYear();
currentYearElement.textContent = today;

const modifiedDate = document.lastModified;
modifiedDateElement.textContent = modifiedDate;
