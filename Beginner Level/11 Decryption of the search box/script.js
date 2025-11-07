const title = document.querySelector(".decrypted-title");
const finalText = title.getAttribute("data-text");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let iteration = 0;

const interval = setInterval(() => {
    const decrypted = finalText
        .split("")
        .map((char, i) => {
            if (i < iteration) {
                return finalText[i];
            }
            return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

    title.textContent = decrypted;

    if (iteration >= finalText.length) {
        clearInterval(interval);
    }

    iteration += 1 / 2;
}, 50);