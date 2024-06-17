const notesContainer = document.querySelectorAll(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.forEach(container => {
        const status = container.getAttribute('data-status');
        container.innerHTML = localStorage.getItem(status) || '';
    });
}

function updateStorage() {
    notesContainer.forEach(container => {
        const status = container.getAttribute('data-status');
        localStorage.setItem(status, container.innerHTML);
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div");
    inputBox.className = "note";
    inputBox.setAttribute("draggable", "true");
    inputBox.innerHTML = `
        <div class="note-content" contenteditable="true">New note...</div>
        <img src="notes images/delete.png" class="delete-btn">
    `;
    notesContainer[0].appendChild(inputBox);
    updateStorage();
    addNoteEventListeners(inputBox);
});

notesContainer.forEach(container => {
    container.addEventListener("dragover", e => {
        e.preventDefault();
    });

    container.addEventListener("drop", e => {
        const note = document.querySelector(".dragging");
        const status = container.getAttribute('data-status');
        container.appendChild(note);
        if (status === 'completed') {
            note.classList.add('completed');
        } else {
            note.classList.remove('completed');
        }
        updateStorage();
    });
});

function addNoteEventListeners(note) {
    note.addEventListener("dragstart", () => {
        note.classList.add("dragging");
    });

    note.addEventListener("dragend", () => {
        note.classList.remove("dragging");
    });

    note.querySelector(".delete-btn").addEventListener("click", () => {
        note.remove();
        updateStorage();
    });

    note.querySelector(".note-content").addEventListener("input", updateStorage);
}

document.addEventListener("DOMContentLoaded", () => {
    showNotes();
    document.querySelectorAll(".note").forEach(note => {
        addNoteEventListeners(note);
    });
});
