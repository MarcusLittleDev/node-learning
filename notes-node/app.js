console.log("starting app...");

const fs = require("fs");
const os = require("os");
const notes = require("./notes")

var res = notes.addNote();
console.log(res)

notes.add(5,7);

// var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, function (err) {
//     if (err) {
//         console.log('unable to write to file')
//     }
// });