let button = document.querySelector('.button');
let textarea = document.querySelector('.textarea');
let text = document.querySelector('.content__text');

button.addEventListener('click', function (event) {
    event.preventDefault();
    text.textContent = textarea.value
    textarea.value=' '
})