const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch data')
    }
}
const getCountryCode = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}
   
const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=8357a2dff08fcf')
    if (response.status === 200) {

        return response.json()
    } else {
        throw new Error('Unable to fetch location data')
    }
}

const getCurrentCountry = async () => {
    const currentLocation = await getLocation();
    return getCountryCode(currentLocation.country)
}