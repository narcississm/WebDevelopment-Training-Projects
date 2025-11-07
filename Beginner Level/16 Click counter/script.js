const clickBtn = document.getElementById('click-btn');
const resetBtn = document.getElementById('reset-btn');
const countDisplay = document.getElementById('count');

let count = 0;

clickBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});