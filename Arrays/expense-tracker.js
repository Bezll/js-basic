const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({description, amount})
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,  // Same as the one above just long hand
            amount: amount})
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        this.expenses.forEach(function(item) {
            totalExpenses = totalExpenses + item.amount
        })
        let totalIncome = 0
        this.income.forEach(function(item) {
            totalIncome = totalIncome + item.amount
        })
        let balance = 0
        balance = totalIncome - totalExpenses 
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
