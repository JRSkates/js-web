const Notes = require('./notes');

console.log('the notes app is running')
const notes = new Notes
notes.addNote('Go for a walk');
notes.addNote('Go to Costcutters');
console.log(notes.getNotes());