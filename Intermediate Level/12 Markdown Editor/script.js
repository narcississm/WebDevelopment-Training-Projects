const input = document.getElementById('markdown-input');
const preview = document.getElementById('preview');

input.addEventListener('input', () => {
    const markdownText = input.value;
    preview.innerHTML = marked.parse(markdownText);
});