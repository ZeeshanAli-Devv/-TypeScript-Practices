/* 🧩 OBJECTS — 10 Practice Questions */

// 1. Create an object person with name, age, and isStudent (boolean).

const person : {
    
    name: string,
    age: number,
    isStudent: boolean
    
} = {
    name: "shan",
    age: 22,
    isStudent: true
}

console.log(person);

// 2. Create an object product with readonly property id and price as number.

const product : {

    readonly id: number,
    price: number

} = {
    id: 2,
    price: 1200,
}

// console.log(product.id = 5); give me error because it's can't reasign
console.log(product);

// 3. Create a function printBook that accepts a book object with title & author.

function printBook(book: {title: string, author: string}){
    console.log(book.title, book.author)
}

printBook({title: "Rich Dad Poor Dad", author: "Robart"})

// 4. Create an object car that has a method start() returning "Car started".

const car : {
    start: () => string
}={
    start: () => {
        return "Car started"
    }
}
console.log(car.start())

    // 5. Create an object student with optional property grade.

    const student : {

        grade?: string,

    } = {

        grade : "A"
    }

    console.log({grade: "A"});
    console.log(student);

// 6. Create a type User and make an object using that type.

type User = {
    name: string,
    age: number
}

let user : User = {
    name  : "shan",
    age: 22
}

console.log(user);


// 7. Create an object employee that includes another nested object address.

let employee : {
    emp1 : {
        address: string
    }
} = {
    emp1 : {
        address : "No Way Home"
    }
}
console.log(employee.emp1);


// 8. Create an object with a method getFullName() that returns firstName + lastName.

let userInfo : {

    firstName: string,
    lastName: string
    getFullName: () => string
} = {
    firstName: "Zee",
    lastName: "Ali",
    getFullName() {
        return `First Name: ${userInfo.firstName} Last Name: ${userInfo.lastName}`
    },
}
console.log(userInfo.getFullName());

// 9. Create a function printEmployee that takes an object with name and salary, and returns a formatted string.

function printEmployee(obj : {name: string, salary: number}): string{
    return `Your Name: ${obj.name}, & Your Salary: ${obj.salary}`
}
console.log(printEmployee({name: "shan", salary: 50000}));

// 10. Create an object calculator that has functions add, subtract, multiply, and divide.

let calculator = {
    add: (a: number, b: number): number => {
        return a + b
    },
    subtract: (a: number, b: number): number => {
        return a - b
    },
    multiply: (a: number, b: number): number => {
        return a * b
    },
    divide: (a: number, b: number): number => {
        return a / b
    }
}

console.log(calculator.add(4,6));
console.log(calculator.subtract(4,6));
console.log(calculator.multiply(4,6));
console.log(calculator.divide(4,6).toFixed(2));
