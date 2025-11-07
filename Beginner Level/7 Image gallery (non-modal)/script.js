// Resim galerisi işlevselliği
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');

// Her resme tıklanıldığında
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('src'); // Tıklanan resmin src bilgisini al
        lightboxImage.src = src; // Lightbox'ta gösterilecek resmi ayarla
        lightbox.style.display = 'flex'; // Lightbox'ı göster
    });
});

// Kapatma butonuna tıklanınca
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Lightbox'ı gizle
});

// Lightbox dışına tıklanırsa, lightbox'ı kapat
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Lightbox'ı gizle
    }
});