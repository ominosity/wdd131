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
