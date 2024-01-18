const addBtn = document.querySelector("#add");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = '<div class="tool"><i class="save fas fa-save"></i><i class="trash fas fa-trash-can"></i></div><textarea></textarea>';

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textArea = note.querySelector("textarea");

    save.addEventListener("click", saveNote);
    textArea.addEventListener("input", saveNote);
    trash.addEventListener("click", () => {
        note.remove();
        saveNote;
    });
    main.appendChild(note);
};


function saveNote() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem('notes', JSON.stringify(data));
    }

}

function loadNotes() {
    const lNotes = JSON.parse(localStorage.getItem('notes'));

    if (lNotes !== null) {
        lNotes.forEach(noteText => {
            addNote();
            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;
        });
    }
}

loadNotes();