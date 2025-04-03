const inputElement = document.querySelector('#favchap');
const addChapterButton = document.querySelector('button');
const listElement = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

addChapterButton.addEventListener('click', function () {
    if (inputElement != '') {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = '';
        inputElement.focus();
   }
});

function displayList(item) {
    if (item === '') {
        alert("Please enter a book and chapter");
    } else {
        const newLI = document.createElement('li');
        newLI.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.ariaLabel = `Remove ${newLI.textContent}`;

        newLI.append(deleteButton);
        listElement.append(newLI);

        deleteButton.addEventListener('click', function () {
            listElement.removeChild(newLI);
            deleteChapter(newLI.textContent);
        });
    }
}

function setChapterList() {
    localStorage.setItem('chapterList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(window.localStorage.getItem('chapterList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}