const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');

let draggedCard = null;

cards.forEach(card => {
    card.addEventListener('dragstart', () => {
        draggedCard = card;
        setTimeout(() => card.style.display = 'none', 0);
    });

    card.addEventListener('dragend', () => {
        draggedCard = null;
        cards.forEach(c => c.style.display = 'block');
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        column.classList.add('dragover');
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('dragover');
    });

    column.addEventListener('drop', () => {
        if (draggedCard) {
            column.appendChild(draggedCard);
            column.classList.remove('dragover');
        }
    });
});