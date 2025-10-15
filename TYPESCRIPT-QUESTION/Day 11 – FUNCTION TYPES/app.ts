/* 🧠 FUNCTIONS — 10 Practice Questions */

// 1. Create a function addNumbers that takes two numbers and returns their sum.

const addNumbers = (a: number, b: number) : number => {
    return a + b
}

console.log(addNumbers(3,5))

// 2. Create a function greetUser that takes a string name and logs a greeting.

const greetUser = (name: string): string => {
    return `Name: ${name}`
}

console.log(greetUser("shan"))

// 3. Create a function calculateArea with default parameter pi = 3.14 that calculates circle area.

function calculateArea(radius: number, pi: number = 3.14): void{
    console.log(pi * radius * radius)
}

calculateArea(5)

// 4. Create a function multiply where the second parameter is optional.

const multiply = (a: number, b?: number): number => {
    if(b !== undefined)
    {
        return a * b
    }
    else{
        return a
    }
}
console.log(multiply(12,22))

// 5. Create an arrow function isEven that returns true if a number is even.

const isEven = (num: number): boolean => {
    if(num % 2 === 0)
    {
        return true
    }
    else{
        return false
    }
}

console.log(isEven(6))

// 6. Create a function getLength that can accept either a string or an array and returns its length (union type).

function getLength(myLen: string | any[]): number {
    return myLen.length
}

console.log(getLength("shan"))

// 7. Create a function displayUser that returns void but logs user details.

function displayUser(user: string): void{
    console.log(`User: ${user}`)
}

console.log(displayUser("Ali"))

// 8. Create a function throwError that always throws an error (use never type).

function throwError(): never{
    throw new Error ("App Crashed!")
}
// console.log(throwError())  //give us error

// 9. Create a function convertToUpper that takes a string | null and returns uppercase (handle nullable type).

function convertToUpper(word: string | null){
    if(typeof word === "string")
    {
        return word.toUpperCase()
    }
    else{
        return null
    }
}
console.log(convertToUpper("shan"))
console.log(convertToUpper(null))

// 10. Create a function sumAll that takes rest parameters and returns their total.

function sumAll(...num: number[]): number{
    let sum = 0

    for(let i=0; i<num.length; i++)
    {
        sum += num[i]!
    }
    return sum
}

sumAll(2, 4, 6, 10)
