const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
    
}]// DOM - Document Object Model

// Query and Remove
const p = document.querySelector('p')
p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '********' // Overwrite
    console.log(p.textContent) // Print content
    // p.remove()
})

// Add a new element 

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)

// HTML for a form
<form id="name-form">
            <input type="text" placeholder="First Name" name="firstName">
            <button>Submit</button>
        </form>

// Event handler for form

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})


// const user = { */}
//     name: 'Andrew',
//     age: 27
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

// document.querySelector('#remove-all').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function( note) {
//         note.remove()
//     })
// })

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

// filteredTodos = filteredTodos.filter(function (todo) {
    //     if (filters.hideCompleted) {
    //         return !todo.completed
    //     } else {
    //         return true
    //     }
    // })