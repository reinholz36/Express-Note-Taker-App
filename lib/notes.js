const fs = require("fs");
const path = require("path");

//This function accepts the POST route's req.body
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'), 
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

//This function accepts delete note requests
function deleteNote(id, notesArray) {
    notesArray.splice(id,1)
    notesArray.map((update, index) => {
        update.id = index; index + 1
    });
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
}

module.exports = {
createNewNote,
deleteNote
};