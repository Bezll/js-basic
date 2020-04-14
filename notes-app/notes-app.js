const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function (e) {    // Button 
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function( note) {
        note.remove()
    })
})


// HTML identifier tags

// # identifies ID 
// . identifies Class

// -- Single --
// p
// #replace
// .item

// --Multiple -- 
// p#order
// button.inventory
// h1#title.application
// h1.application#title