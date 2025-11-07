// Parola alanındaki karakter sayısını takip et
const passwordInput = document.getElementById('password');
const passwordCounter = document.getElementById('passwordCounter');

// Her tuşa basıldığında karakter sayısını güncelle
passwordInput.addEventListener('input', function() {
    const length = passwordInput.value.length;
    passwordCounter.textContent = `${length} Karakter`;
});