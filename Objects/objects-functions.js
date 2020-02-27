let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area 
// Create function - take farenheit in - return object with all three

function convertFarenheit(farenheitValue) {
    return {
        farenheit: farenheitValue,
        celsius: (farenheitValue - 32) / 1.8,
        kelvin: (farenheitValue + 459.67) * 5 / 9
    }
}
let temp = convertFarenheit(74)
console.log(temp)



