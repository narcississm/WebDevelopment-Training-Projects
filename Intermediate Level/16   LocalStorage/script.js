const noteTextarea = document.getElementById('note');
const saveBtn = document.getElementById('save-btn');

window.onload = () => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        noteTextarea.value = savedNote;
    }
};

saveBtn.addEventListener('click', () => {
    const note = noteTextarea.value;
    localStorage.setItem('note', note);
    alert('Notunuz kaydedildi!');
});