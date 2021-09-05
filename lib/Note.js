const Record = require('./record');

class Note extends Record {

    constructor(title, text) {
        super();
        this.title = title;
        this.text = text;
    }

    // "CRUD" actions are in the base class
}

module.exports = Note;