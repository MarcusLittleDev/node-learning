console.log("starting notes.js")

const fs = require('fs');

const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    }
    catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length == 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note
        
    }
    else {
        return null
    }
};

var getAll = () => {
    console.log("Getting All Notes");
}

var getNote = title => {
    console.log(`Reading ${title}`)
}

var removeNote = title => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title != title)
    saveNotes(notes);
    return notes.length !== filteredNotes.length
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}