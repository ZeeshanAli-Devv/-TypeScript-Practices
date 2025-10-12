//  💡 10 Practice Tasks — TypeScript Objects
// 🧩 Basic Object

// 1️⃣ Create an object car with properties brand (string), model (string), and year (number).
// Log the car details.

const car : {
    brand : string,
    model : string,
    year  : number
} = {

    brand : "Nissan",
    model : "New",
    year  : 2025,
}

console.log(car);


// 🧩 Optional Property

// 2️⃣ Create an object student with properties:
// name (string), age (number, optional).
// Log only the name if age is missing.

const student : {
    name: string,
    age? : number,
} = {
    name: "shan",
}
console.log(student)

// 🧩 Readonly Property

// 3️⃣ Create an object book with readonly property isbn (number) and a normal property title (string).
// Try changing isbn (should show error).


const book : {
    readonly isbn: number,
    title : string
} = {
    isbn : 2,
    title: "Apple"
}
// console.log(book.isbn = 4) // give me error
console.log(book) 

// 🧩 Object with Function

// 4️⃣ Create an object user with properties:
// username (string),
// email (string),
// and a method displayInfo() that returns a formatted string.

const user : {

    username: string,
    email: string,
    displayInfo: () => string
} = {
    username: "shan",
    email: "shan@gmail.com",
    displayInfo() {
        return `${user.username}, ${user.email}`
    } 
}

console.log(user.displayInfo())

// 🧩 Object Type Reuse

// 5️⃣ Create a type Product that defines name, price, and inStock.
// Then make two objects (p1, p2) using that type.

type Product =  {
    name: string, 
    price: number, 
    inStock: number,
}

let product1 : Product = {
    name: "watch", 
    price: 1200, 
    inStock: 20,
}

let product2 : Product = {
    name: "umbrella", 
    price: 1400, 
    inStock: 10,
}

console.log(product1, product2)

// 🧩 Nested Object

// 6️⃣ Create an object employee that has:

// name (string)

// address (object with city and country)

// getAddress() method that returns full address as string.

const employee : {
    name: string,
    address : {
        city: string,
        country: string
    },
    getAddress : () => string
} = {

    name: "sam",
    address: {
        city: "isl",
        country: "pak"
    },
    getAddress() {
        return `Your Name is ${employee.name} from ${employee.address.city} ${employee.address.country}`
    },
}

console.log(employee.getAddress())

// 🧩 Object as Function Parameter

// 7️⃣ Make a function printCourse() that takes an object with courseName and duration and logs both.

function printCourse(info: {courseName: string, duration: number}){
    console.log(info.courseName,info.duration)
}

printCourse({courseName: "Math", duration: 2})

// 🧩 Array of Objects

// 8️⃣ Create an array users that contains multiple objects with id, name, and age.
// Then loop through and print all names.

let users :{id: number, name: string, age: number}[] = [
    
    {id: 1, name: "Ali", age: 21},
    {id: 2, name: "Shan", age: 22},

] 

for(let user of users) {
    console.log(user.name)
}

// 🧩 Object with Optional Function

// 9️⃣ Create an object player with:
// name, score, and optional method celebrate() that logs “🎉 Winner!”

const player : {
    name: string,
    score: number,
    celebrate?: () => string
} = {
    name: "shan",
    score: 25,
    celebrate(){
        return "Winner"
    }
}

console.log(player.name, player.score)

// 🧩 Readonly + Nested + Function Combo

// 🔟 Create a complex object account:

// readonly id

// owner (object with name, email)

// method getSummary() → returns "Account of {name}".

const account : {
    readonly id: number,
    owner: {
        name : string,
        email: string
    },
    getSummary: () => string
} = {
    id: 2,
    owner: {
        name: "shan",
        email: "shan@gmail.com"
    },
    getSummary() {
        return `Account of ${this.owner.name}`
    },
}

console.log(account.getSummary())