const inputElement = document.querySelector('#favchap');
const addChapterButton = document.querySelector('button');
const listElement = document.querySelector('#list');

addChapterButton.addEventListener('click', function () {
    if (inputElement.value.trim() === "") {
        alert("Please enter a book and chapter");
    } else {
        const newLI = document.createElement('li');
        newLI.textContent = inputElement.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = `Remove ${newLI.textContent}`;

        newLI.append(deleteButton);
        listElement.append(newLI);

        deleteButton.addEventListener('click', function () {
            listElement.removeChild(newLI);
            inputElement.focus();
        });

        inputElement.value = '';
    }
    inputElement.focus();
});
