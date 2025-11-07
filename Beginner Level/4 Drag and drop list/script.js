const list = document.getElementById('sortable-list');
let draggedItem = null;

list.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'LI') {
        draggedItem = e.target;
        e.target.classList.add('dragging');
    }
});

list.addEventListener('dragend', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.remove('dragging');
        draggedItem = null;
    }
});

list.addEventListener('dragover', (e) => {
    e.preventDefault();

    const afterElement = getDragAfterElement(list, e.clientY);
    if (afterElement == null) {
        list.appendChild(draggedItem);
    } else {
        list.insertBefore(draggedItem, afterElement);
    }
});

// Yardımcı fonksiyon: Fare konumuna göre en yakın öğeyi bulur
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}