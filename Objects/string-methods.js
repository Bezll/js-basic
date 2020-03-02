let name = '   Andrew Mead  '

// Length String
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

//Trim 
console.log(name.trim())

// Challege Area

// isValidPassword
// length is more than 8 - and it doesnt contain the word password

// First answer

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true 
    } else {
        return false
    }
}   
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%*&'))
console.log(isValidPassword('asdfghjklprtpassword'))

// Second answer

let isValidPassword = function (password) {
password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%*&'))
console.log(isValidPassword('asdfghjklprtpassword'))