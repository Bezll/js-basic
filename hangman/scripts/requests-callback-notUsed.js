const getPuzzle = (wordCount, callback) => {
const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}
const getCountryCode = (countryCode, callback) => {
const requestCountry = new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place')
            }
    })


requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
requestCountry.send()
}

// Calls


getPuzzle("2", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountryCode('GB', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})