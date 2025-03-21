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

// Temperature and wind chill
const tempInCelsius = 17.2;
const windSpeedInKmH = 3.2;
const windChillElement = document.querySelector('#wind-chill');

if (tempInCelsius <= 10 && windSpeedInKmH > 4.8) {
    windChillElement.textContent = calculateWindChill(tempInCelsius, windSpeedInKmH);
} else {
    windChillElement.textContent = 'N/A'
}

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.7 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}