const todos = ['Go shopping', 'Hoover', 'Make salad', 'Hang washing', 'Clean bathroom']

todos.splice(2, 1)
todos.push('Study')
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function (item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
})