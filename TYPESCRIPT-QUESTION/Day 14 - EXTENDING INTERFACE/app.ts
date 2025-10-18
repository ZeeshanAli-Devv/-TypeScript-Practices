// 1. Basic Extension

// Create an interface Person with name and age,
// then another interface Employee that extends Person and adds a salary.
// Create one object using Employee.

interface Person {
    name: string,
    age: number
}

interface Employee extends Person {
    salary: number
}

let employee: Employee = {name: "Zeeshan", age: 22, salary: 90000}
console.log(employee);


// 2. Multiple Inheritance

// Create two interfaces Person (with name) and Address (with city).
// Then create a third interface Employee that extends both and adds a department.

interface Persons {
    name: string,
}

interface Address {
    city: string,
}

interface Employeee extends Persons, Address {
   department: string
}

let emps : Employeee = {name: "Ali", city: "Isl", department: "Science"}
console.log(emps);

// 3. Adding Optional Property in Extended Interface

// Create an interface Student with name and age.
// Extend it into CollegeStudent that adds an optional major property.

interface Student {
    name: string,
    age: number
}

interface CollegeStudent extends Student {
    major?: string
}

let clgStudent1: CollegeStudent = {name: "Zeeshan", age: 22}
let clgStudent2: CollegeStudent = {name: "Zeeshan", age: 22, major: "English"}

console.log(clgStudent1);
console.log(clgStudent2);


// 4. Extend and Override Property Type

// Create a Shape interface with color: string.
// Then extend it into Circle where you add a new property radius: number,
// and override color to make it optional.

interface Shape {
    color: string
}

interface Circle extends Shape {
    radius: number,
}
let circle : Circle = {radius:3.4 , color: "blue"}

console.log(circle);


// 5. Nested Extension

// Create interface A with one property,
// extend it into B, then extend B into C.
// Each should add one property.
// Finally, create an object of type C.

interface A {
    a: string
}

interface B extends A {
    b: string
}

interface C extends B {
    c: string
}

let allData: C = {a: "apple", b: "bat", c: "cat"}
console.log(allData);


// 6. Interface + Function Inside Extension

// Create an interface Device with brand.
// Extend it into Phone that adds a method call() returning "Calling...".

interface Device {
    brand: string
}

interface Phone extends Device { 
    call: () => void
}

let phone: Phone = {
    brand: "Nokia",
    call() {
        console.log("Calling...")
    },
}

console.log(phone);


// 7. Extend Interface with Readonly Property

// Create an interface Car with a readonly id and a model.
// Extend it into ElectricCar that adds batteryCapacity.

interface Car {
    readonly id: number,
    model: string
}

interface ElectricCar extends Car {
    batteryCapacity: number
}

let car: ElectricCar = {id: 3, model: "Lg", batteryCapacity: 3000}

console.log(car);
// console.log(car.id = 7); //  here give us error we can't assign again 


// 8. Multiple Levels of Extension

// Create:

// LivingBeing → has species

// Animal → extends LivingBeing, adds canWalk

// Dog → extends Animal, adds breed and bark() method returning "Woof!"

// Then create an object of type Dog and call bark().

interface LivingBeing {
    species: string
}

interface Animal extends LivingBeing {
    canWalk: boolean
}

interface Dog extends Animal {
    breed: string,
    bark: () => void
}

let dog : Dog = {
    species: "Wild",
    canWalk: true,
    breed: "Germen",
    bark() {
        console.log("Woof!")
    },
} 

console.log(dog);

// 9. Extend Interface Containing a Function

// Create interface MathOps with add() method.
// Extend it into AdvancedMath that adds a multiply() method.
// Create an object using AdvancedMath and call both methods.

// interface MathOps {
//     add: () => void
// }

// interface AdvancedMath extends MathOps {
//     multiply: () => void
// }

// let result : AdvancedMath = {
//     add() {
//         console.log("Add")
//     },
//     multiply() {
//         console.log("Multiply")
//     },
// }

// console.log(result);

//---------- OR -----------//

interface MathOps {
    add: (a: number, b: number) => number
}

interface AdvancedMath extends MathOps {
    multiply: (a: number, b: number) => number
}

let result : AdvancedMath = {
    add(a, b) {
        return a+b
    },
    multiply(a, b) {
        return a*b
    },
}

console.log(result.add(5,6))
console.log(result.multiply(5,6))


// 10. Combine Everything

// Create:

// Person with name, age

// Address with city, country

// Company with companyName

// Then make Employee interface that extends all three and adds salary and a method getDetails() returning a formatted string.

interface UserEmp {
    name: string,
    age: number
}

interface UserAddress {
    city: string,
    country: string
}

interface Companies {
    companyName: string
}

interface userEmployee extends UserEmp, UserAddress, Companies {
    salary: number,
    getDetails: () => string
}

let checkEmployee : userEmployee = {
     
    name :  "Zeeshan",
    age : 22,
    city : "Isl",
    country : "Pak",
    companyName : "Nil",
    salary : 200000,
    getDetails() {
       
    return `
    👤 ${this.name} 
    (${this.age})
    🏙️ ${this.city}, 
    ${this.country}
    🏢 ${this.companyName}
    💰 Salary: ${this.salary}`;
}

}
console.log(checkEmployee.getDetails())