const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".note-content");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
  // Reinitialize event listeners for checkboxes and placeholders after loading from localStorage
  reinitializeEventListeners();
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let note = document.createElement("div");
  note.className = "note";

  let completeCheck = document.createElement("input");
  completeCheck.type = "checkbox";
  completeCheck.className = "complete-check";

  let noteContent = document.createElement("div");
  noteContent.className = "note-content";
  noteContent.setAttribute("contenteditable", "true");
  noteContent.dataset.placeholder = "New note...";
  noteContent.textContent = noteContent.dataset.placeholder;

  let img = document.createElement("img");
  img.src = "notes images/delete.png";
  img.style.width = "20px"; 
  img.style.position = "absolute";
  img.style.bottom = "10px"; 
  img.style.right = "10px"; 

  completeCheck.addEventListener("change", function () {
    if (completeCheck.checked) {
      note.classList.add("completed");
    } else {
      note.classList.remove("completed");
    }
    updateStorage();
  });

  noteContent.addEventListener("focus", function () {
    if (noteContent.textContent === noteContent.dataset.placeholder) {
      noteContent.textContent = "";
    }
  });

  noteContent.addEventListener("blur", function () {
    if (noteContent.textContent.trim() === "") {
      noteContent.textContent = noteContent.dataset.placeholder;
    }
    updateStorage();
  });

  noteContent.addEventListener("keyup", updateStorage);

  img.addEventListener("click", function () {
    note.remove();
    updateStorage();
  });

  note.appendChild(completeCheck);
  note.appendChild(noteContent);
  note.appendChild(img);
  notesContainer.appendChild(note);

  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

function reinitializeEventListeners() {
  let completeChecks = document.querySelectorAll(".complete-check");
  completeChecks.forEach((check) => {
    check.addEventListener("change", function () {
      let note = check.parentElement;
      if (check.checked) {
        note.classList.add("completed");
      } else {
        note.classList.remove("completed");
      }
      updateStorage();
    });
  });

  notes = document.querySelectorAll(".note-content");
  notes.forEach((noteContent) => {
    noteContent.addEventListener("focus", function () {
      if (noteContent.textContent === noteContent.dataset.placeholder) {
        noteContent.textContent = "";
      }
    });

    noteContent.addEventListener("blur", function () {
      if (noteContent.textContent.trim() === "") {
        noteContent.textContent = noteContent.dataset.placeholder;
      }
      updateStorage();
    });

    noteContent.addEventListener("keyup", updateStorage);
  });

  let deleteImages = document.querySelectorAll(".note img");
  deleteImages.forEach((img) => {
    img.addEventListener("click", function () {
      img.parentElement.remove();
      updateStorage();
    });
  });
}

showNotes();
