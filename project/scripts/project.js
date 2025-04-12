/* Get page elements for manipulation */
const currentYearElement = document.getElementById('current-year');
const modifiedDateElement = document.getElementById('modified-date');
const coastElement = document.getElementById("coast");
const waterfallElement = document.getElementById("waterfalls");
const foodElement = document.getElementById("food");
const savedDestinationsElement = document.getElementById("saved-destinations");

/* Update footer information */
const today = new Date().getFullYear();
currentYearElement.textContent = today;

const modifiedDate = document.lastModified;
modifiedDateElement.textContent = modifiedDate;

/*****************************************
 * Add data for categorical destinations *
*****************************************/
/* Coastal entries */
const coastalData = [{
    header: "Yaquina Head Outstanding Natural Area",
    description: "<p>In the central coastal town of Newport, you'll find the Yaquina Head Lighthouse, situated in the Yaquina Head Outstanding Natural Area. At 93-feet tall, Yaquina Head is Oregon's tallest lighthouse.</p><p>In addition to the beautiful building, this stop has a great visitor's center, views of the nearby coastline, and wildflower covered hills.</p><p>Using a boardwalk staircase, you can descend into the bay, where you will be greeted by a smooth gray rock beach and a chance to see the local wildlife. Sea otters, seals, and shore birds frequent the area, and grey whales can often be seen migrating up the coast.</p><p>This is our number one must-stop for out of town friends and families, as it showcases a number of the features that make the Oregon Coast one of the most picturesque in the world.</p>",
    imagePath: "images/yaquina-head.webp",
    imageDescription: "A photograph of the Yaquina Head lighthouse as seen from the road.",
    imageWidth: 400,
    id: "yaquina",
    selected: false
}, {
    header: "Shore Acres State Park",
    description: "<p>Just outside of Coos Bay lies a magnificent English-style garden, preserved as a state park. The garden lies right on the coast, offering beautiful vistas of the ocean from the overlook.</p>",
    imagePath: "images/shore-acres-overlook.webp",
    imageDescription: "A photograph taken from the Shore Acres State Park Overlook.",
    imageWidth: 600,
    id: "shore",
    selected: false
}, {
    header: "Hobbit Trail",
    description: "<p>If you're looking for a great hike on the southern coast, check out the Hobbit Trailhead. At around half a mile each way, you can descend on this light to moderately difficult trail through the coastal forest to a quiet beach surrounded by towering rock bluffs.</p><p>The only thing more beautiful than the hike itself is the beach at the end, but we don't want to spoil the surprise for when you reach it!</p>",
    imagePath: "images/hobbit-passage.webp",
    imageDescription: "Looking down the pathway of the Hobbit trail to the coast.",
    imageWidth: 400,
    id: "hobbit",
    selected: false
}];

/* Waterfall entries */
const waterfallData = [{
    header: "Silver Falls State Park",
    description: "<p>Known for its &quot;Trail of Ten Falls&quot; hike, Silver Falls offers stunning views of natural waterfalls and rivers. As the name suggests, you can take the 7.4 mile trail to see ten different waterfalls.</p><p>For those of us that don't fancy such a long trek, South Falls can be reached with just a short walk from the parking lot.</p><p>While beautiful any time of the year, the stunning yellow foliage in the fall makes this whole area glow.</p> ",
    imagePath: "images/silver-falls.webp",
    imageDescription: "A picture of the back of South Falls, taken from the rock undercut behind the falls.",
    imageWidth: 600,
    id: "silver",
    selected: false
}, {
    header: "McDowell Creek Falls County Park",
    description: "<p>An hour's drive south of Silver Falls, you'll find a lesser-known series of waterfalls at McDowell Creek Falls County Park. From parking lots #1 and #3, you can see the Lower McDowell Falls and Majestic falls, respectively, with just a short walk from the car. From any of the three parking lots you can hike into the forest and see Royal Terraace Falls as well. </p><p>With its other-worldly old-growth forest and misty environment, this is another must-see for our out-of-town visitors. Majestic Falls is our favorite here where a short hike takes you to a boardwalk with stairs down the cliffs and viewing platforms. Don't miss the turn off for Parking lot #3, as it isn't clearly marked from the road. When you're coming up from the south, there's a spot where the road turns right and you can just barely see another road continuing straight ahead. If you miss that turnoff (as we do almost every time), you'll have to go another mile or two to find a good turnaround.</p>",
    imagePath: "images/mcdowell-falls.webp",
    imageDescription: "A photo of McDowell Creek Falls taken from the boardwalk landing just below the falls.",
    imageWidth: 500,
    id: "mcdowell",
    selected: false
}, {
    header: "Watson Falls",
    description: "<p>In the southern part of the Willamette valley you'll find the Rogue-Umpqua Scenic Byway. This 172 mile byway travels alongside the Umpqua and Rogue rivers and is known as the &quot;Highway of Waterfall&quot;. In the spring you can see water cascading down hillsides on either side of the highway, and many gorgeous vistas are just a short hike away.</p><p>Richard took this photograph from the hike to Watson Falls, about halfway between the trailhead and the walking bridge below the bigger falls. </p>",
    imagePath: "images/watson-falls.webp",
    imageDescription: "A picturesque set of falls found about halfway between the trail head and the bridge.",
    imageWidth: 500,
    id: "watson",
    selected: false
}];

/* Food entries */
const foodData = [{
    header: "Osaka",
    description: "<p>The best restaurant in our home town of Albany, Osaka offers some of Oregon's best sushi. If you're not into sushi, they also do amazing Ramen, quality tempura, and sizable donburi dishes.</p><p>This is Richard's favorite restaurant in the state, and we go here as often as we can (or can't) afford.</p>",
    imagePath: "images/osaka.webp",
    imageDescription: "An arrangement of sushi offerings.",
    imageWidth: 500,
    id: "osaka",
    selected: false
}, {
    header: "Ona",
    description: "<p>In the seaside vacation town of Yachats (pronounced YAH-hots) lies this fantastic seafood restaurant. Signs up and down the 101 claim Moe's has the best clam chowder, but we've tried both and Ona's is vastly superior.</p><p>They also offer the best sourdough bread in the region. </p>",
    imagePath: "images/ona-chowder.webp",
    imageDescription: "A bowl of clam chowder with two fired shrimp and two slices of buttered sourdough.",
    imageWidth: 600,
    id: "ona"
}, {
    header: "Brick and Mortar",
    description: "<p>If breakfast or brunch is on your to-do list and you're anywhere near the town of Albany before 2:00pm, head to downtown and stop at this delightful little restaurant. You can't go wrong with their omelets or any variation on eggs benedict, but make sure you order something with a side of toast. They include strawberry freezer jam that's to die for.</p><p>With such great food, you may wonder why we included this picture of hot chocolate. This is single-handedly the best cup of hot chocolate we've ever had at a restaurant. Order the large - you won't regret it!</p>",
    imagePath: "images/hot-chocolate.webp",
    imageDescription: "A meaty omelet, mortar-style hash browns, and sourdough bread with strawberry freezer jam.",
    imageWidth: 450,
    id: "brick",
    selected: false
}];

/* Template for turning data entries into website sections */
function buildASection(object) {
    let buttonText = ''
    if (localStorage.getItem(`${object.id}`) !== true) {
        buttonText = 'Save Destination';
    }
    return `<section>
    <h2>${object.header}</h2>
    <div class="description">
    ${object.description}
    </div>
    <div class="buttons">
        <a href="saved-list.html" target="_self"><button class="saved-destinations">Show <span class="saved-count"></span> Saved Destinations</button></a>
        <button id="button_${object.id}" value="${object.id}" class="save">${buttonText}</button>
    </div>
    <img src="${object.imagePath}" alt="${object.imageDescription}" width="${object.imageWidth}" loading="lazy">
    </section>`
}

/* Fill out sections depending upon which page is loaded */
if (coastElement) {
    const coastalSections = coastalData.map(item => buildASection(item));
    coastElement.innerHTML = coastalSections.join(' ');
}

if (waterfallElement) {
    const waterfallSections = waterfallData.map(item => buildASection(item));
    waterfallElement.innerHTML = waterfallSections.join(' ');
}

if (foodElement) {
    const foodSections = foodData.map(item => buildASection(item));
    foodElement.innerHTML = foodSections.join(' ');
}

/* Collect all entry IDs for 'save' button event listeners */
const destinations = [];
coastalData.forEach(element => destinations.push(element));
waterfallData.forEach(element => destinations.push(element));
foodData.forEach(element => destinations.push(element));

/* Iterate through all destinations, adding the event listeners
to destinations on the current page */
function addEventListenersToSaveButtons() {
    for (let destination of destinations) {
        let buttonID = `button_${destination.id}`;
        let buttonElement = document.getElementById(buttonID);
        // Check if element is on current page and add listener if it is
        if (buttonElement) {
            buttonElement.addEventListener('click', () => toggleDestination(destination.id, buttonElement));
        }
    }
}

/* Toggle destination saves */
function toggleDestination(destination, buttonElement) {
    if (localStorage.getItem(destination) == 'true') {
        localStorage.setItem(destination, 'false');
        buttonElement.innerText = 'Save Destination';
    } else {
        localStorage.setItem(destination, 'true');
        buttonElement.innerText = 'Unsave Destination!';
    }
    toggleSavedButtons()
}

function showSavedButtons() {
    const savedDestinationButtons = document.querySelectorAll(".saved-destinations");
    for (item of savedDestinationButtons) {
        item.classList.remove("hide");
    }
}

function hideSavedButtons() {
    const savedDestinationButtons = document.querySelectorAll(".saved-destinations");
    for (item of savedDestinationButtons) {
        item.classList.add("hide");
    }
}

function toggleSavedButtons() {
    /* Iterate through local store items that match destination ids */
    let count = 0;
    for (let destination of destinations) {
        if (localStorage.getItem(destination.id) == 'true') {
            count = count + 1;
            const destinationButton = document.getElementById(`button_${destination.id}`);
            if (destinationButton) {
                destinationButton.innerText = 'Unsave Destination!';
            }
        }
    }

    if (count > 0) {
        showSavedButtons();
        const savedCounts = document.querySelectorAll(".saved-count");
        savedCounts.forEach(item => item.innerText = count);
    }
    else hideSavedButtons()
}

/* Load saved destinations on the saved-list page */

if (savedDestinationsElement) {
    const savedDestinations = [];
    for (let destination of destinations) {
        if (localStorage.getItem(destination.id) == "true") {
            savedDestinations.push(destination);
        }
    }
    const savedSections = savedDestinations.map(item => buildASection(item));
    savedDestinationsElement.innerHTML = savedSections.join(' ');
    toggleSavedButtons();
}

/* Run on initial load for a site revisit */
toggleSavedButtons();
addEventListenersToSaveButtons();