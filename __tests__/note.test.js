const { expect } = require('@jest/globals');
const Note = require("./../lib/Note");

test("create a note object", () => {
    const note = new Note('Sample Title 01', 'Lorem ipsum dolar sit amet.');

    expect(note.id).toEqual(expect.any(Number));
    expect(note.title).toBe('Sample Title 01');
    expect(note.text).toBe('Lorem ipsum dolar sit amet.');
});

test("save new note", () => {
    const note = new Note('Sample Title 01','Lorem ipsum dolar sit amet.');
    note.save();

    const foundNote = new Note().find(note.id);
    expect(foundNote.id).toEqual(expect.any(Number));
    note.destroy();
});