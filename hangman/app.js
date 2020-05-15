// primitive Value: string, number, boolean, null, undefined (everything else is object)

// Object: myObject --> Object.prototype --> null
// Array: myArray -->  Array.prototype -->  Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


// HTTP (Hypertext Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('hajima boo', 8)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountryCode('GB').then((country) => {
    console.log(`Country name: ${country.name}`)
}, (err) => {
    console.log(`Error: ${err}`)
})



