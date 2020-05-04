const myAge = 28
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote'

// is the same as the below

if (myAge >= 18) {
    message = 'You can vote!'
} else {
    message = 'You cannot vote'
}

console.log(message)

const myAge2 = 28
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge2 >= 18 ? showpage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter']

const teamOkay = () => {
    return `Team size: ${team.length}`
}
const teamNotOkay = () => {
    return 'Too many people on your team'
}

const message = team.length <= 4 ? teamOkay() : teamNotOkay()
console.log(message) 

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team') // much simpler way lol