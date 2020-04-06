const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office Mdification',
    body: 'Get a new seat'
}]

// console.log(notes.pop()) // remove end
// notes.push('My new note') // add end

// console.log(notes.shift()) // remove begining
// notes.unshift('My first note') // add begining 

// notes.splice(1, 0 , 'This is the new second item') // First (where do you want to edit, Second how many to delete, Third add new)

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })


console.log(notes.length)
console.log(notes)

// for (let count = 0; count <= 2; count++) {  // initialiser (where to begin) condition (if true run again if false stop) increment (what to do each time)
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

//console.log(notes.indexOf('Note 2')) // Looking for a index

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})

console.log(index)