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
// console.log(findNotes(todos))

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return - 1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)