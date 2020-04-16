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

const filters = {
    searchText: ''
}


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
})
}

renderTodos(todos, filters)



// // Listen for new todo creation

// document.querySelector('#add').addEventListener('click', function(e) {  
//     console.log('Im Adding a New Todo')
// })
// // Listen for todo text change

// document.querySelector('#new-todo').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
})

