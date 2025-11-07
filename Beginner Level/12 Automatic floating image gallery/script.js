const images = document.querySelectorAll('.floating-img');

images.forEach((img) => {
    const randomX = Math.floor(Math.random() * 100);
    const randomDelay = Math.random() * 5;
    const randomDuration = 10 + Math.random() * 10;

    img.style.left = `${randomX}vw`;
    img.style.animationDelay = `${randomDelay}s`;
    img.style.animationDuration = `${randomDuration}s`;
});