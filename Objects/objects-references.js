// //Challenge Area

// let myAccount = {
//     name: 'Andrew Mead',
//     expenses: 0,
//     income: 0
// }
// let addExpense = function (account, expenses, income, reset = false) {
//     account.expenses = account.expenses + expenses
//     account.income = account.income + income


//     if (reset) {
//         account.expenses = 0,
//         account.income = 0
//     }
    
    
//     let accountSummary = `Account for ${account.name} has £${(account.income - account.expenses)}. £${account.income} in income. £${account.expenses} in expesese.`
//     console.log(accountSummary)
// }
// addExpense(myAccount, 100, 1000)
// console.log(myAccount)
// addExpense(myAccount, 100, 1000, true)
// console.log(myAccount)
// addExpense(myAccount, 100, 750)
// console.log(myAccount)

// Answer


let myAccount2 = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}
let addExpense = function (account, expenses) {
    account.expenses = account.expenses + expenses
}

let addIncome = function (account, income) {
    account.income = account.income + income
    
}

let resetAccount = function (account) {
account.expenses = 0
account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has £${(balance)}. £${account.income} in income. £${account.expenses} in expesese.`
}

addIncome(myAccount2, 2000)
addExpense(myAccount2, 2.50)
addExpense(myAccount2, 160)
console.log(getAccountSummary(myAccount2));
resetAccount(myAccount2)
console.log(getAccountSummary(myAccount2));
