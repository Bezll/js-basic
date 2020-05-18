// HTTP (Hypertext Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})
const getCountryCode = (countryCode) => new Promise((resolve, reject) => {
    const requestCountry = new XMLHttpRequest()
    
    requestCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
            }
    })


requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
requestCountry.send()
}) 

// Calls

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountryCode('GB').then((country) => {
    console.log(`Country name: ${country.name}`)
}, (err) => {
    console.log(`Error: ${err}`)
})