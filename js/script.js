const id = document.querySelector('#id');
const quote = document.querySelector('.quote');
const dice = document.querySelector('.dice');

function fetchAPI() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        id.textContent = data.slip.id;
        quote.textContent = data.slip.advice;
    });
}

dice.addEventListener('click', fetchAPI);
fetchAPI();