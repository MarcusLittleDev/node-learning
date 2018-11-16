console.log("starting app...");

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes");
var titleOptions = {
                description: 'Title of note',
                demand: true,
                alias: 't'
            }
                    
var bodyOptions = {
                description: 'Body of note',
                demand: true,
                alias: 'b'
            }

const argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body: bodyOptions,
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions,
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