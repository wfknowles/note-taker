const router = require('express').Router();
const Note = require("../../lib/Note");

// create
router.post('/notes', (req, res) => {
    const note = new Note(req.body.title, req.body.text);
    note.save();
    res.json(note);
});

// index
router.get('/notes', (req, res) => {
    const note = new Note();
    res.json(note.all());
});

// find
router.get('/notes/:id', (req, res) => {
    const note = new Note().find(req.params.id);
    console.log('details', note, typeof note, note.constructor.name);
    res.json(note);
});

// destroy
router.delete('/notes/:id', (req, res) => {
    new Note().destroy(req.params.id);
    res.json({status: 'destroyed'});
});

module.exports = router;