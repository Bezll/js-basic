// // Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return result
}



let value = square(3)
let otherValue  = square(10)
console.log(value)
console.log(otherValue)

//Challenge Area

// let this name be a function with an imput value (argument)
let convertFarenheitToCelsius = function (farenheitValue) {
    let result = (farenheitValue - 32) / 1.8
    return result
}
let temp1 = convertFarenheitToCelsius(32)
console.log(temp1)

// Its a function with a name and an imput value (argument)
function convertFarenheitToCelsius(farenheitValue) {
    let result = (farenheitValue - 32) / 1.8
    return result
}
let temp1 = convertFarenheitToCelsius(32)
console.log(temp1)