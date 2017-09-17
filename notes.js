console.log("starting notes.js : \n")

module.exports.addNote = () => {
    console.log("Add Note has been invoked");
    return "A new note has been added"
}

module.exports.add = (x,y) => {
    console.log("Add numbers has been invoked");
    return x + y ;
}