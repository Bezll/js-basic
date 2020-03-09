const todos = ['Go shopping', 'Hoover', 'Make salad', 'Hang washing', 'Clean bathroom']

todos.splice(2, 1)
todos.push('Study')
todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)