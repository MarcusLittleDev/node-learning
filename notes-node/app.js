console.log("starting app...");

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes");

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command)
console.log('yargs ', yargs.argv)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note){
        console.log(`Added note: \n --- \nTitle: ${note.title} \nBody: ${note.body}`)
    }
    else {
        console.log("Note already exists...")
    }
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'remove')
{
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note doesn't exist";
    console.log(message)
}
else if (command === 'read') {
    notes.getNote(argv.title);
}
else {
    console.log('Command not recognized...')
}