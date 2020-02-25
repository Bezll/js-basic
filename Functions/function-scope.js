
// Global scope (convertFarenheitToCelsius, tempOne, tempTwo)
    // Local scope (farenheitValue, result)
        // Local scope (isFreezing)

let convertFarenheitToCelsius = function (farenheitValue) {
    let result = (farenheitValue - 32) / 1.8

    if (result <= 0) {
        let isFeezing = true
    }

    return result
}
let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)
