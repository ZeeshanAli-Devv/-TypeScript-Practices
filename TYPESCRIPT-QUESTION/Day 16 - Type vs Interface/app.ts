/* 🧩 Type vs Interface — Practice Questions (No OOP, Promise!) */

// 1️⃣

// Create an interface PersonI and a type alias PersonT,
// both having name and age.
// Make two objects — one for each.

interface PersonI {
    name: string,
    age: number
}

type PersonT = {
    name: string,
    age: number
}

let personI : PersonI = {name: "Ali", age: 22}
let personT : PersonT = {name: "Ali", age: 22}

console.log(personI)
console.log(personT)

// 2️⃣

// Create an interface ProductI with name and price,
// and a type alias ProductT with the same structure.
// Add an optional discount in both and make one object of each.

interface ProductI { 
    name: string,
    price: number,
    discount?: number
}
type ProductT = { 
    name: string,
    price: number,
    discount?: number
}

let productI1 : ProductI = {name: "Ball", price: 500, discount: 10}
let productI2 : ProductI = {name: "Ball", price: 500}

let productT1 : ProductT = {name: "Ball", price: 500, discount: 10}
let productT2 : ProductT = {name: "Ball", price: 500}

console.log(productI1, productI2);
console.log(productT1, productT2);


// 3️⃣

// Create an interface AddressI with city and country.
// Then create another interface UserI that extends AddressI and adds name.
// Do the same thing using types with intersection (&).

interface AddressI {
    city: string,
    country: string
}

interface UserDataI extends AddressI {
    name: string
}

type AddressT = {
    city: string,
    country: string
}

type UserDataT = AddressT & {name: string}

let userI : UserDataI = {city: "Lyon", country: "France", name: "Anonymous"}
let userT : UserDataT = {city: "Lyon", country: "France", name: "Anonymous"}

console.log(userI, userT);

// 4️⃣

// Make an interface BookI and type alias BookT,
// each having a readonly id, title, and author.
// Try reassigning id (comment it out).

interface BookI {
    readonly id: number, 
    title: string,
    author: string
}

type BookT = {
    readonly id: number, 
    title: string,
    author: string
}

let bookI: BookI = {id: 1, title: "Book", author: "User"}
let bookT: BookT = {id: 1, title: "Book", author: "User"}

console.log(bookI);
// console.log(bookI.id = 12); here give us error
console.log(bookT);
// console.log(bookT.id = 12); here give us error

// 5️⃣

// Create an interface AddI and a type alias AddT
// for a function that takes two numbers and returns their sum.
// Implement both.

interface AddI {(a: number, b: number): number} // Interface
type AddT = (a: number, b: number) => number   // Type Alias

let addI: AddI = (a,b) => {return a + b}
let addT: AddT = (a,b) => {return a + b}

console.log(addI(3,4));
console.log(addT(5,9));

// 6️⃣

// Create an interface StudentI and a type alias StudentT
// where each has an optional subject property.
// Make two objects — one with subject and one without.

interface StudentI { subject?: string | undefined }
let studentI1: StudentI = {subject: "Math"}
let studentI2: StudentI = {subject: undefined}
console.log(studentI1, studentI2)

type StudentT = { subject?: string | undefined }
let studentT1 : StudentT = { subject: "Urdu"}
let studentT2 : StudentT = { subject: undefined}
console.log(studentT1, studentT2);

// 7️⃣

// Create an interface PersonI and extend it into EmployeeI.
// Add properties name, age, and salary.
// Do the same thing using type alias intersection.

interface personI { name: string, age: number }
interface EmployeeI extends personI { salary: number }

type personT = { name: string, age: number }
type EmployeeT = personT & { salary: number }

let empI : EmployeeI = {name: "Ali", age: 22, salary: 5000}
let empT : EmployeeT = {name: "Shan", age: 21, salary: 9000}

console.log(empI, empT);

// 8️⃣

// Create a union type ResponseStatus that can be "success" | "error" | "loading".
// Try to do the same with an interface (see what happens 😏).

type ResponseStatusT = "success" | "error" | "loading"
let responseT : ResponseStatusT = "loading"
console.log(responseT);
// interface ResponseStatusI {} //  this giving me error we can't assign union types 
 
// 9️⃣

// Create a type alias Input that can be string | number.
// Make a function showType() that logs "String input" or "Number input" using typeof.

type Input = string | number

function showType(input: Input){

    if(typeof input === "string")
    {
        console.log("String Type")
    }
    else if(typeof input === "number")
    {
        console.log("Number Type")
    }
    else{
        console.log("Invalid")
    }
}

console.log(showType(3));

// 🔟

// Combine Everything:

// Interface: UserI → name, age

// Interface: AddressI → city, country

// Type: SalaryT → salary
// Now make a new type alias that joins them all (&) and includes a getDetails() function returning a string.
// Make one object and call the function.

interface userI {
    name: string,
    age: number
}

interface AddressI {
    city: string,
    country: string
}

type SalaryT = {
    salary: number
}

type AllData = userI & AddressI & SalaryT & { getDetail : () => string }

let allData : AllData = {
    
    name: "ABC",
    age: 22,
    city: "California",
    country: "USA",
    salary: 222,
    getDetail() {
        return `
        Name: ${this.name},
        Age: ${this.age},
        City: ${this.city},
        Country: ${this.country},
        Salary: ${this.salary},

        `
    },
}
console.log(allData.getDetail());
