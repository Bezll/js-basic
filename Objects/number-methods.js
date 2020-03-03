// let num = 103.941

// console.log(num.toFixed(2)) // fixed decimal place
// console.log(Math.round(num)) // round to nearest
// console.log(Math.floor(num)) // round down
// console.log(Math.ceil(num))  // round up

// let min = 0
// let max = 1
// let randomNum = Math.floor(Math.random() * (max-min + 1)) + min

// Challenge area 
// 1 - 5 - true if correct - false if not correct 

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    if (guess = Math.floor(Math.random() * (max-min + 1)) + min) {
        return true
    } else {
        return false
    }
}

// shorter answer

let makeGuess2 = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max-min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(1))
console.log(makeGuess2(2))