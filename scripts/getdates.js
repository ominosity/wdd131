// Set the copyright date to the current year
const currentYear = document.querySelector('#currentyear');
const today = new Date();

currentYear.innerHTML = today.getFullYear();

// Set the last modified date
const modified = document.querySelector('#lastModified');
// Just to play with it and see how I would...
// let formattedDate = new Date(document.lastModified);
// formattedDate = Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(formattedDate);


modified.innerHTML = `Last modified: ${document.lastModified}`;
