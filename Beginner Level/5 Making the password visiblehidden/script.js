const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');
const icon = toggleBtn.querySelector('i');

let timeoutId = null;

toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';

    passwordInput.type = isPassword ? 'text' : 'password';
    icon.classList = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';

    // Otomatik gizleme: 5 saniye sonra tekrar parola moduna dön
    if (isPassword) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            passwordInput.type = 'password';
            icon.classList = 'fas fa-eye';
        }, 5000);
    }
});