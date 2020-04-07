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

// const deleteTodo = function (todos, todoText) {
//     const index = todos.findIndex(function (todo, index) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// deleteTodo(todos, 'make salad')
// console.log(todos)

const findNotes = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false
    })
}

console.log(findNotes(todos))
