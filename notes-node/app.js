console.log("starting app...");

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes");

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            description: 'Title of note',
            demand: true
        }
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note){
        console.log("Added note")
        notes.logNote(note)
    }
    else {
        console.log("Note already exists...")
    }
}
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach(note => {
        notes.logNote(note)
    });
}
else if (command === 'remove')
{
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note doesn't exist";
    console.log(message)
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note.title) {
        console.log("Reading Note")
        notes.logNote(note)
    }
    else {
        console.log("Note not found.")
    }
}
else {
    console.log('Command not recognized...')
}