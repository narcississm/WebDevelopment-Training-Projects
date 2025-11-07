const buttons = document.querySelectorAll('.buttons button');
const image = document.getElementById('image');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        image.style.filter = filter;
    });
});