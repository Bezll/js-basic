//let temp = 13

//if (temp >= 30 && temp <= 39) {
    //console.log('it is nice')
//} else if (temp <= -3 || temp >= 40) {
    //console.log('dangerous')
//} else {
    //console.log('do what you want')
//}


// Challenge Area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Display vegan Menu')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Display vegan & normal menu')
} else {
    console.log('Display normal menu')
}