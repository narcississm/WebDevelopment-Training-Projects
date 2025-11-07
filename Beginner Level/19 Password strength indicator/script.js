const passwordInput = document.getElementById('password');
const strengthFill = document.getElementById('strength-fill');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    const strength = calculateStrength(val);
    updateStrengthUI(strength);
});

function calculateStrength(password) {
    let score = 0;

    if (!password) return 0;

    // Uzunluk puanı
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Karakter çeşitliliği
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[\W_]/.test(password)) score += 1;

    return score; // Maks 6 puan
}

function updateStrengthUI(score) {
    let width = (score / 6) * 100;
    strengthFill.style.width = width + '%';

    let color = 'red';
    let text = 'Very Weak';

    if (score <= 2) {
        color = '#ff4d4d'; // kırmızı
        text = 'Very Weak';
    } else if (score === 3) {
        color = '#ff944d'; // turuncu
        text = 'Weak';
    } else if (score === 4) {
        color = '#ffdb4d'; // sarı
        text = 'Moderate';
    } else if (score === 5) {
        color = '#a6e22e'; // açık yeşil
        text = 'Strong';
    } else if (score === 6) {
        color = '#4CAF50'; // yeşil
        text = 'Very Strong';
    }

    strengthFill.style.backgroundColor = color;
    strengthText.textContent = text;
}