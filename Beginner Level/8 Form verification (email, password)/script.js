// Form Doğrulama Fonksiyonu
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let isValid = true;
  
    // Email doğrulama
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    if (!email.match(emailRegex)) {
      emailError.textContent = 'Geçerli bir e-posta adresi girin';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // Parola doğrulama
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // En az 6 karakter, bir harf ve bir rakam
  
    if (!password.match(passwordRegex)) {
      passwordError.textContent = 'Parolanız en az 6 karakter, bir harf ve bir rakam içermelidir';
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }
  
    // Formun geçerli olup olmadığını kontrol et
    if (isValid) {
      alert('Form başarıyla gönderildi!');
    } else {
      alert('Lütfen formu doğru doldurun');
    }
  });
  