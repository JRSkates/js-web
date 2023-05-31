class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-button');
    this.clearAllNotesButtonEl = document.querySelector('#clear-notes-button');

    this.addNoteButtonEl.addEventListener('click', () => {
      this.displayNotes();
    });

    this.clearAllNotesButtonEl.addEventListener('click', () => {
      this.clearNotes();
    });
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach(element => {
      element = document.querySelector('#note-input').value;
      const noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = element;
      this.mainContainerEl.append(noteEl);
    });
    document.getElementById('note-input').value = "";
  }

  clearNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
  }

}

module.exports = NotesView;