const hamburger = document.getElementById('hamburger-icon');
const xIcon = document.getElementById('x-icon');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    xIcon.classList.toggle('show');
    menu.classList.toggle('show');
});

xIcon.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    xIcon.classList.toggle('show');
    menu.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Portland Oregon",
        location: "Lake Oswego, Oregon, United States",
        dedicated: "1989, August, 19-21",
        area: 80500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/400x250/portland-temple-lds-1079112-wallpaper.jpg"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16-20",
        area: 148236,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_f5579d41-7344-4498-a589-4017ba5fcc91.jpg"
    },
    {
        templeName: "Praia Cape Verde",
        location: "Santiago, Cape Verde",
        dedicated: "2022, June, 19",
        area: 8759,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/400x250/praia_cape_verde_temple-main.jpeg"
    },
];

// Create a fragment to hold the new nodes
const fragment = document.createDocumentFragment();
// Map the list of temples to that fragment
temples.map(createFragmentTemplate)
// Get the destination of the fragment
const gallery = document.getElementById('gallery');
// Add the fragment to the DOM
gallery.appendChild(fragment);

// Temple card template
/* 
<figure>
    <figcaption>
        <h3>Aba Nigeria</h3>
        <p>
            <span class="label">Location</span>
            <span class="value">Aba, Nigeria</span>
            <span class="label">Dedicated</span>
            <span class="value">2005, August, 7</span>
            <span class="label">Size</span>
            <span class="value">11500 sq ft</span>
        </p>
    </figcaption>
    <img src="https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        alt="Aba Nigeria Temple">
</figure>
*/

/// Create a temple tile with the info from a single temple
function createFragmentTemplate(currentTemple) {
    // Create variables for all the nodes
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const header3 = document.createElement('h3');
    const paragraph = document.createElement('p');
    const locationLabel = document.createElement('span');
    const locationValue = document.createElement('span');
    const dedicatedLabel = document.createElement('span');
    const dedicatedValue = document.createElement('span');
    const sizeLabel = document.createElement('span');
    const sizeValue = document.createElement('span');
    const image = document.createElement('img');

    // Fill the nodes with data
    header3.textContent = currentTemple.templeName;
    locationLabel.textContent = 'Location';
    dedicatedLabel.textContent = 'Dedicated';
    locationValue.textContent = currentTemple.templeName;
    dedicatedValue.textContent = currentTemple.dedicated;
    sizeLabel.textContent = 'Size';
    sizeValue.textContent = currentTemple.area;
    image.src = currentTemple.imageUrl;
    image.alt = `${currentTemple.templeName} Temple`;

    // Build the fragment
    fragment.appendChild(figure);
    figure.appendChild(figcaption);
    figure.appendChild(image);
    figcaption.appendChild(header3);
    figcaption.appendChild(paragraph);
    paragraph.appendChild(locationLabel);
    paragraph.appendChild(locationValue);
    paragraph.appendChild(dedicatedLabel);
    paragraph.appendChild(dedicatedValue);
    paragraph.appendChild(sizeLabel);
    paragraph.appendChild(sizeValue);
}

// Assign variables to menu links 
const homeLink = document.getElementById('home');
const oldLink = document.getElementById('old');
const newLink = document.getElementById('new');
const largeLink = document.getElementById('large');
const smallLink = document.getElementById('small');
const currentFilterHeader = document.getElementById('current-filter');

// Add event listeners to menu links
homeLink.addEventListener('click', () => {
    prepGalleryForTemples('Home', homeLink);
    // Map the list of temples to the fragment
    temples.map(createFragmentTemplate);
    // Add the fragment to the DOM
    gallery.appendChild(fragment);
});

oldLink.addEventListener('click', () => {
    prepGalleryForTemples('Old', oldLink);
    const oldTemples = temples.filter(temple => temple.dedicated.substring(0, 4) < 1900);
    // Map the list of temples to the fragment
    oldTemples.map(createFragmentTemplate)
    // Add the fragment to the DOM
    gallery.appendChild(fragment);
});

newLink.addEventListener('click', () => {
    prepGalleryForTemples('New', newLink);
    const newTemples = temples.filter(temple => temple.dedicated.substring(0, 4) > 2000);
    // Map the list of temples to the fragment
    newTemples.map(createFragmentTemplate)
    // Add the fragment to the DOM
    gallery.appendChild(fragment);
});

largeLink.addEventListener('click', () => {
    prepGalleryForTemples('Large', largeLink);
    const largeTemples = temples.filter(temple => temple.area > 90000);
    // Map the list of temples to the fragment
    largeTemples.map(createFragmentTemplate)
    // Add the fragment to the DOM
    gallery.appendChild(fragment);
});

smallLink.addEventListener('click', () => {
    prepGalleryForTemples('Small', smallLink);
    // smallLink.classList.add('active');
    const smallTemples = temples.filter(temple => temple.area < 10000);
    // Map the list of temples to the fragment
    smallTemples.map(createFragmentTemplate)
    // Add the fragment to the DOM
    gallery.appendChild(fragment);
});

/// Clears the active class so a new one can be assigned
/// Clears the gallery in preparation for a new one
/// Updates the active link and header
function prepGalleryForTemples(filterName, linkElement) {
    gallery.innerHTML = '';
    currentFilterHeader.textContent = filterName;
    homeLink.classList.remove('active');
    oldLink.classList.remove('active');
    newLink.classList.remove('active');
    largeLink.classList.remove('active');
    smallLink.classList.remove('active');
    linkElement.classList.add('active');
}

