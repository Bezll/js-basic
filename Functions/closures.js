// // // 1st Example

// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()//printMessage
// console.log(myPrintMessage('narae'))//basically calling printmessage

// // 2nd Example 

// const createCounter = () => {
//     let count = 0 

//     return {
//         increment() {
//             count++                      // only modifiable via these methods due to the closure setup
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())


// // 3rd Example - Adder

// const createAdder = (a) => {
//     return (b) => {
//         return a + b
//     }
// }
// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))
// const add100 = createAdder(100)
// console.log(add100(-25))

//Challenge Example

const createTipper = (a) => {
    return (b) => {
        return a * b
    }
}

const baseTip = createTipper(0.10)
console.log(baseTip(133))
const baseTip2 = createTipper(0.15)
console.log(baseTip2(133))
const baseTip3 = createTipper(0.20)
console.log(baseTip3(133))
