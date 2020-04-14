const todos = [{
    text: 'Go shopping',
    completed: false
}, {
    text: 'Hoover',
    completed: true
}, { 
    text: 'Make salad',
    completed: false
}, { 
    text: 'Hang washing',
    completed: true
}, {
    text:'Clean bathroom',
    completed: false
}]


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
// Listen for new todo creation

document.querySelector('#add').addEventListener('click', function(e) {  
    console.log('Im Adding a New Todo')
})