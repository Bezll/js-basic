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

const hideCompletedFilters = {
    hideCompleted: false 
}


const renderTodos = (todos, filters, hideCompletedFilters, checked = false) => {
    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    // filters the todos by text name
const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

const hideCompletedF = todos.filter((todo) => todo.completed !== hideCompletedFilters.hideCompleted
    
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    if (checked) {
        hideCompletedF.forEach(function (todo) {
            const newP = document.createElement('p')
            newP.textContent = todo.text
            document.querySelector('#todos').appendChild(newP)
        })
        
    } else {
        filteredTodos.forEach(function (todo) {
            const p = document.createElement('p')
            p.textContent = todo.text
            document.querySelector('#todos').appendChild(p)
        })
    }   
}

renderTodos(todos, filters, hideCompletedFilters)


// // Listen for new todo creation

// document.querySelector('#add').addEventListener('click', function(e) {  
//     console.log('Im Adding a New Todo')
// })
// // Listen for todo text change

// document.querySelector('#new-todo').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters, hideCompletedFilters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters, hideCompletedFilters);
    e.target.elements.text.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    hideCompletedFilters.hideCompleted = e.target.checked
    renderTodos(todos, filters, hideCompletedFilters, e.target.checked)
})