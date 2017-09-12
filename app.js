console.log("Starting the app;\n");

let fs = require('fs');
let os = require('os');

var user = os.userInfo();
console.log(user);

console.log("Hello " + user.username);

fs.appendFile("greet.txt",`\nHello ${user.username}`,function (err) {
    if(err){
        console.log('====================================');
        console.log("Couldn't append to the file");
        console.log('====================================');
    }
})