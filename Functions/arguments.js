// Multiple Arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default Arguments

let getScoreText = function (name = 'Anonymous' , score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

//Challenge Area
// total, tipPercent .2

let tipPercent = function (total, tip = .2) {
    let percent = tip * 100
    let finalTip = total * tip
    return `A ${percent}% tip on $${total} would be $${finalTip}`
} 

let totalToPay = tipPercent(100, .5)
console.log(totalToPay)
