const toggleBtn = document.getElementById('toggleBtn');

// Sayfa ilk yüklendiğinde sistem veya localStorage'a göre temayı uygula
function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');

    // localStorage'da kayıtlıysa onu uygula, yoksa sistem temasına bak
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Gündüz Modu';
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙 Gece Modu';
    } else {
        // Sistem teması
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️ Gündüz Modu';
        } else {
            document.body.classList.remove('dark-mode');
            toggleBtn.textContent = '🌙 Gece Modu';
        }
    }
}

applyInitialTheme();

// Butona tıklanarak tema değiştirilince hem görseli hem kaydı güncelle
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    toggleBtn.textContent = isDark ? '☀️ Gündüz Modu' : '🌙 Gece Modu';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});