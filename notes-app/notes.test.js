const Notes = require('./notes');

describe('NotesModel', () => {
  it('constructs with an empty array', () => {
    notes = new Notes
    expect(notes.getNotes()).toEqual([])
  })

  it('should add notes to the model', () => {
    notes = new Notes
    notes.addNote('Buy Milk');
    notes.addNote('Go to the gym');
    expect(notes.getNotes()).toEqual(['Buy Milk', 'Go to the gym'])
  })

  it('should reset note list', () => {
    notes = new Notes
    notes.addNote('Buy Milk');
    notes.addNote('Go to the gym');
    notes.reset();
    expect(notes.getNotes()).toEqual([])
  });
});