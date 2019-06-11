const menu = document.getElementById('menu');
const popup = document.getElementById('popup');
const menuButton = document.getElementById('menuButton');
const exitButton = document.getElementById('exit');
const cancelButton = document.getElementById('cancel');
const createButton = document.getElementById('create');
const submitButton = document.getElementById('submit');

menuButton.addEventListener('mouseup', toggleMenu);
exitButton.addEventListener('mouseup', togglePopup);
cancelButton.addEventListener('mouseup', togglePopup);
createButton.addEventListener('mouseup', togglePopup);
submitButton.addEventListener('mouseup', togglePopup);

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

function toggleMenu() {
    menuButton.classList.toggle('_opened');
    menu.classList.toggle('_menu-opened');
}