const jokesAndQuotes = [
    "Neden bilgisayarlar hiçbir zaman güneşlenmez? Çünkü onlarda ‘Windows’ var!",
    "Yazılım hatası değil, özellik!",
    "Bilgisayar programlamada hata yapmak, öğrenmenin en hızlı yoludur.",
    "Başarı, hazırlık ile fırsatın buluştuğu yerdir.",
    "Kötü kod yazmak kolaydır; iyi kod yazmak sanattır.",
    "Hayat, bir algoritmadır ve biz sadece kod yazanlarız.",
    "Debug yaparken, kendinle savaşır gibi hissedersin.",
    "Bilgi güçtür, ama uygulama her şeydir."
];

const displayArea = document.getElementById('display-area');
const newBtn = document.getElementById('new-btn');

function showRandom() {
    const randomIndex = Math.floor(Math.random() * jokesAndQuotes.length);
    displayArea.textContent = jokesAndQuotes[randomIndex];
}

newBtn.addEventListener('click', showRandom);

// Başlangıçta bir tane göster
showRandom();