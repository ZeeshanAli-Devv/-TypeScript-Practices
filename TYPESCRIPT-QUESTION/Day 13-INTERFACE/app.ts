// 🧩 INTERFACE — 10 Practice Questions
// 1. Basic Interface

// Create an interface Person with properties name (string) and age (number).
// Then make an object person1 using that interface.

interface Person {
    name: string,
    age: number
}

let person1: Person = {
    name: "shan",
    age:22
}

console.log(person1);


// 2. Optional Property

// Create an interface Student with properties name (string) and optional grade (string).
// Make two student objects — one with grade and one without.

interface Student {
    name: string,
    grade?: string
}

let std1: Student = {
    name : "English",
    grade: "A"
}

let std2: Student = {
    name : "English",
    // grade: "A"
}

console.log(std1,std2);


// 3. Readonly Property

// Create an interface Product with a readonly property id (number) and a price (number).
// Try to reassign id and observe the TypeScript error.

interface Product {
    readonly id: number,
    price: number
}

let product: Product = {
    id: 3,
    price: 2000
}
// console.log(product.id = 6); here give us error
console.log(product);


// 4. Interface with Function

// Create an interface Car with method start() that returns "Car started".
// Make an object using that interface and call the method.

interface Car {
    start() : void
}
let car: Car = {
    start() {
        console.log("Car started")
    },
}
console.log(car.start());


// 5. Interface as Function Type

// Create an interface Add that describes a function taking two numbers and returning a number.
// Then make a variable addNumbers that follows that interface.

interface Add{
    sum: (a: number, b: number)=> number
}

let addNumber : Add = {
    sum(a, b): number {
        return a + b
    },
}

console.log(addNumber.sum(4,5));

// 6. Nested Interface

// Create an interface Address with city and country,
// and another interface Employee that includes name and an address (of type Address).
// Make one employee object.

interface Address {
    city: string,
    country: string
}

interface Employee {
    name: string,
    address : Address
}

let employee: Employee = {
    name: "shan",
    address : {
        city: "Isl",
        country: "Pak"
    }
}

console.log(employee);


// 7. Interface with Optional Method

// Create an interface Machine with name (string) and an optional method start().
// Create two objects — one with and one without the start method.

interface Machine {
    name: string,
    start?: () => void
}

let machine1 : Machine = {
    name: "Tools"
}

let machine2 : Machine = {
    name: "Tools",
    start: ()=> {
        console.log("Machine Start")
    }
}

console.log(machine1);
console.log(machine2.start?.());


// 8. Extending Interface

// Create an interface Person with name and age,
// then another interface Employee that extends Person and adds salary.
// Create an employee object using the extended interface.

interface Person {
    name: string,
    age: number
}

interface Employees extends Person {
    salary: number
}

let employeee : Employees = {
    name: "shan",
    age: 22,
    salary: 100
}

console.log(employeee);


// 9. Interface with Array of Objects

// Create an interface Book with title and author.
// Then make an array library containing multiple books (using that interface).

interface Book {
    title: string,
    author: string
}
let library : Book[] = [
    {title: "Rich Dad Poor Dad", author: "Robart"},
    {title: "Eat That Frog", author: "Brain Tracy"},
]

console.log(library);



// 10. Interface with Function Inside Object

// Create an interface Calculator with four functions:
// add, subtract, multiply, divide — each taking two numbers and returning a number.
// Then make an object calculator that implements all four.

interface calculator{
    sum: (a: number, b: number)=> number
    sub: (a: number, b: number)=> number
    mul: (a: number, b: number)=> number
    div: (a: number, b: number)=> number
}

let calc : calculator = {
    sum(a, b) {
        return a+b 
    },
    sub(a, b) {
        return a-b 
    },
    mul(a, b) {
        return a*b 
    },
    div(a, b) {
        return a/b 
    },
}

console.log(calc.sum(5,6));
console.log(calc.sub(5,6));
console.log(calc.mul(5,6));
console.log(calc.div(5,6));
