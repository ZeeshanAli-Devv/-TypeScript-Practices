/* 🧩 Type Alias — 10 Practice Questions */

// 1️⃣ Create a type alias Person with properties name (string) and age (number).
// Make one object using it.

type Person = {
    name: string,
    age : number
}

let person: Person = {name: "Ali", age: 22}
console.log(person);

// 2️⃣ Create a type alias Status that can be "pending" | "approved" | "rejected".
// Make one variable using it.

type Status = "pending" | "approved" | "rejected"
let checkStatus : Status = "approved"
console.log(checkStatus);

// 3️⃣ Create a type alias UserID that can be string | number.
// Make two variables using it — one string and one number.

type UserID = string | number
let numberId : UserID = 22
let stringId : UserID = "Ali"
console.log(numberId, stringId);

// 4️⃣ Create a type alias ProductList that represents an array of strings.
// Make a variable with multiple product names.

type ProductList = string[]
let productList: ProductList = ["Watch", "Toy", "Ball"]
console.log(productList);

// 5️⃣ Create a type alias Multiply for a function that takes two numbers and returns their product.
// Implement that function.

type Multiply = (a: number, b: number) => number
let mul : Multiply = (a,b) => {
    return a * b
}
console.log(mul(5,6));

// 6️⃣ Create a type alias Book with title (string), author (string), and optional price (number).
// Make two book objects — one with and one without price.

type Book = {
    title: string,
    author: string,
    price?: number
}

let book1 : Book = {
    title: "Eat That Frog",
    author: "Brain Tracy",
    price: 200
}

let book2 : Book = {
    title: "Eat That Frog",
    author: "Brain Tracy",
    // price: 200
}

console.log(book1, book2);

// 7️⃣ Create a type alias Vehicle with readonly id (number) and model (string).
// Try reassigning id and observe the error.

type Vehicle = {
    readonly id: number,
    model: string
}

let vehicle : Vehicle = {
    id: 3,
    model: "BMW"
}
console.log(vehicle);
// console.log(vehicle.id = 5); give us error

// 8️⃣ Create two types — Student with name, and Marks with score.
// Then combine them into one type Result using intersection.
// Make one object using it.

type Student = {
    name: string
}

type Marks = {
    score: number
}

type Result = Student & Marks

let result: Result = {
    name: "Football",
    score: 5
}

console.log(result);

// 9️⃣ Create a type alias InputType as string | number.
// Write a function showType that logs whether input is a string or number (using typeof).

type InputType = string | number
function showType(input: InputType) {
    if(typeof input === "string")
    {
        console.log("Function Type")
    }
    else if(typeof input === "number")
    {
        console.log("Number Type")
    }
    else{
        console.log("Invalid")
    }
}
console.log(showType(4))

// 🔟 Create three types:

// User with name and email

// Address with city and country

// Account with balance and method getDetails() that returns formatted string
// Combine all using intersection and make one object.

type User = {
    name: string,
    email: string
}
type Address = {
    city: string,
    country: string
}
type Account = {
    balance: number,
    getDetails: () => string
}

type AllData = User & Address & Account

let alldata: AllData = {
    name: "Ali",
    email: "abc@gmail.com",
    city: "Lyon",
    country: "France",
    balance: 2000,
    getDetails() {
       return `
       Name: ${this.name},
       Email: ${this.email},
       City: ${this.city},
       Country: ${this.country},
       Balance: ${this.balance},
       `
    },
}

console.log(alldata.getDetails());