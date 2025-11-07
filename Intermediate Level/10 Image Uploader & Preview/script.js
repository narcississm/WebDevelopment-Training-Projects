const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function() {
    preview.innerHTML = ''; // Önceki önizlemeyi temizle

    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            const img = document.createElement('img');
            img.src = reader.result;
            preview.appendChild(img);
        });

        reader.readAsDataURL(file);
    }
});