window.addEventListener('keydown', e => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;

    key.classList.add('active');
});

window.addEventListener('keyup', e => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;

    key.classList.remove('active');
});