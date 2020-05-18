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

// Callback example 'Callback Hell'

const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if(typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000) 
}
   
getDataCallback(2, (error, data) => {
    if (error) {
        console.log(`${error}, this is error`)
    } else (
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log('error')
            } else {
                console.log(data)
            }
        })
    )
})

// Promise version of callback hell

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000) 
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// Promise chaining 

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000) 
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})