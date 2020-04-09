// DOM - Document Object Model

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