class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-button');

    this.addNoteButtonEl.addEventListener('click', () => {
      this.displayNotes();
    });
  }

  displayNotes() {
    const inputEl = document.querySelector('#note-input');
    const noteEl = document.createElement('div');
    noteEl.className = 'note';
    noteEl.textContent = inputEl.value;
    this.mainContainerEl.append(noteEl);
  }

}

module.exports = NotesView;