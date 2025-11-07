// Butonlara tıklanıldığında altın ışık efektini geçici olarak ekleyen JavaScript

const buttons = document.querySelectorAll('.service-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Buton tıklandığında altın ışık efektini ekle
        button.classList.add('active');

        // 5 saniye sonra efektin kaybolmasını sağla
        setTimeout(() => {
            button.classList.remove('active');
        }, 5000); // 5000 milisaniye = 5 saniye
    });
});