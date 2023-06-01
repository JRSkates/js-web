const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log('the notes app is running')
const client = new NotesClient
const model = new NotesModel
const view = new NotesView(model, client)

model.addNote('This is an example note');
view.displayNotesFromApi();