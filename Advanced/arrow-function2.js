const add = function (a, b) {
    return arguments[0] + arguments[1]
}

add(11, 22, 33, 44)

const car {
    colour: 'Red',
    getSummary() {
        return `The car is ${this.colour}`
    }
}