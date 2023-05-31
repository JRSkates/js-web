/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require('./notesModel')
const NotesView = require('./notesView');

describe('NotesView', () => {
  it ('displays a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel
    const view = new NotesView(model)
    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'test input';
    model.addNote(inputEl.value)
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(1);
  });

  it ('clears the list of previous note before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel
    const view = new NotesView(model)
    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'test input';
    model.addNote(inputEl.value)
    inputEl.value = 'test two input';
    model.addNote(inputEl.value)

    view.displayNotes();
    //view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it ('clears the input value after adding a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel
    const view = new NotesView(model)
    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'test input';
    view.displayNotes();

    expect(document.getElementById('note-input').value).toBe("")
  });

  it ('clears my notes with the Clear Notes button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel
    const view = new NotesView(model)
    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'test input';
    view.displayNotes();
    view.clearNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(0);
  });
});