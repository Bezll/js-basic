const todos = [{
    text: 'Go shopping',
    completed: false
}, {
    text: 'Hoover',
    completed: true
}, { 
    text: 'Make salad',
    complted: false
}, { 
     text: 'Hang washing',
     completed: true
}, {
    text:'Clean bathroom',
    complted: false
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'make salad')
console.log(todos)