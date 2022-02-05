const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const { createNewNote, deleteNote } = require('../../lib/notes');

const notes = require('../../db/notes.json');

router.get('/notes', (req, res) => {
    let result = (notes);
    res.send(result);
    console.log(result);
    console.log(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const deletedNote = deleteNote(req.params.id, notes);
    res.send(notes)
});

module.exports = router;