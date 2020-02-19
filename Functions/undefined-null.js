// Undefined for Variable


let name 

name = 'jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for Function Arguments
// Undefined as Function return default value

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assigned value

let age = 27

age = null

console.log(age)