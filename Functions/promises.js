// Callback

const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('errortest', 'This is the data')
    }, 2000) 
}
   
getDataCallback((error, data) => {
    if (error) {
        console.log(`${error}, this is error`)
    } else (
        console.log(data)
    )
})

// Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is the promise data')
        reject( 'This is my promise error')
    }, 2000) 
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

// Additional argument - using closure

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is the promise data')
        reject( 'This is my promise error')
    }, 2000) 
})

const myPromise = getDataPromise(123)
myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})