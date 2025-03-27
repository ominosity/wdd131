// Add dynamic copyright year
const thisYear = new Date().getFullYear();
const yearElement = document.querySelector("#currentyear");
yearElement.innerHTML = thisYear;

// Show date and time this document was last modified
const modifiedDate = document.getElementById('modified-date');
modifiedDate.textContent = `Last Modified: ${document.lastModified}`;