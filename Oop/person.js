// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {//'Narae Kim' 
        const names = fullName.split(' ') //['narae', 'kim']
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}` 
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
       const status = this.grade >= 70 ? 'passing' : 'failing'
       return `${this.firstName} is ${status} the class.`
    }
}

const person1 = new Person('Jabez', 'Souttar', 28, ['Gardening', 'Narae'])
console.log(person1.getBio(), 'first')
const student1 = new Student('Narae', 'Kim', 29, 99, ['Bez', 'Being Silly'])
console.log(student1.getBio(), 'second')
const employee1 = new Employee('Andrew', 'Mead', 27, 'Teacher', [])
employee1.fullName = 'Clancey Turner'
console.log(employee1.getBio(), 'third')



// const me = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking'])
// me.setName('Alexis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Clancey', 'Turner', 28,)
// console.log(person2.getBio())











// Bellow is the original version of the above rewritten code.

// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })
//     return bio
// }

// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }
