console.log("Starting the app.js ;\n");

let fs = require('fs');
let os = require('os');
let notes = require('./notes.js');

let result = notes.add(5,7);
console.log(result);

// var user = os.userInfo();

// console.log("Hello " + user.username);

// fs.appendFile("greet.txt",`\nHello ${user.username}`,function (err) {
//     if(err){
//         console.log('====================================');
//         console.log("Couldn't append to the file");
//         console.log('====================================');
//     }
// })