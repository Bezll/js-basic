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

// Date now

const now = new Date()
console.log(now.toString())

console.log(`year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of the Month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Second; ${now.getSeconds()}`)

// Date at a given time

const Then = new Date('January 21 2001 6:25:01')

// unix Epoch - January 1st 1970 00:00:00 

    // Time given as a positive numerical value after this date
    // Time given as a negative numerical value before this date

        // calculated in miliseconds, so 1000 = 1 second past January 1st 1970 00:00:00
        // 60000 = 1 min after
        // -60000 = 1 min before

const Then2 = new Date('January 21 2001 6:25:01')
console.log(now.getTime()) // will show you the huge number representing time passed between Unix Epoch until 21st January 2001

// Time Stamp

const now = new Date() // Get time stamp and save
const timestamp = now.getTime()

const myDate = new Date(timestamp) // Reading from local storage and using data 
console.log(myDate.getFullYear())

// Challenge 

const dateOne = new Date('January 21 2001 6:25:01')
const timestampOne = dateOne.getTime()

const dateTwo = new Date('October 21 2015 4:15:07')
const timestampTwo = dateTwo.getTime()

if (timestampOne > timestampTwo) {
    console.log(dateOne.toString())

} else if (timestampTwo > timestampOne) {
    console.log(dateTwo.toString())
} 

// Using Moment

const now = moment()
now.subtract(1, 'week').add(24, 'days')
console.log(now.format('MMMM Do, YYYY'))

const birthday = moment()
birthday.year(1991).month(0).date(6)
console.log(birthday.format('MMM D, YYYY'))