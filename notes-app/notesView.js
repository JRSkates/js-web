class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

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
    console.log(notes);
    notes.forEach(element => {
      element = document.querySelector('#note-input').value;
      let noteEl = document.createElement('div');
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
    this.displayNotesFromApi();
  }

  displayNotesFromApi() {
    this.client.loadNotes((apiData) => {
      this.model.setNotes(apiData);
      let noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = this.model.getNotes();

      this.mainContainerEl.append(noteEl);
    })
  }

}

module.exports = NotesView;