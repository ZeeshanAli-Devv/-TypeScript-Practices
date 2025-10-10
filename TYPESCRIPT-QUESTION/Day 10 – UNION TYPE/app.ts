/* ⚔️ Day 10 – UNION TYPE (NEW SET) ⚔️ */

// 1️⃣ Ek variable value: string | number banao —
// usme pehle string assign karo, phir number assign karo, aur dono print karo.

let value : string | number
console.log(value = "shan")
console.log(value = 33)


// 2️⃣ Ek function printId(id: string | number) likho —
// agar number ho to “ID (number): <id>” print karo,
// agar string ho to “ID (string): <id>” print karo.

const printId = (id: string | number) => {
    
    if(typeof id === "number")
    {
        return `ID Number: ${id}`
    }
    else if(typeof id === "string")
    {
        return `ID String: ${id}`
    }
}

console.log(printId("Ali"))
console.log(printId(22))


// 3️⃣ Ek function formatInput(input: string | number) likho —
// agar number ho to usse string me convert karke return karo,
// agar string ho to “Processed: <input>” return karo.

const formatInput = (input: string | number) => {
    if(typeof input === "number"){
        return input.toString();
    }
    else{
        return `Processed: ${input}` 
    }
}

console.log(formatInput("shan"))

// 4️⃣ Ek function doubleValue(value: number | string) likho —
// agar number ho to uska double return kare,
// agar string ho to usse do baar concatenate karke return kare.

const doubleValue = (value: number | string) => {
    if(typeof value === "number")
    {
        return value * 2
    }
    else{
        return  value + value
    }
}

console.log(doubleValue("shan"))
console.log(doubleValue("2"))

// 5️⃣ Ek array data: (string | number)[] banao — 
// usme strings aur numbers dono add karo aur loop se print karo.

let datas: (string | number)[];
datas = ["Zeeshan", "Ali", 22,]

for(let data of datas)
{
    console.log(data)
}

// 6️⃣ Ek function describeValue(value: string | boolean | number) likho —
// agar string ho to “It’s a string”,
// agar number ho to “It’s a number”,
// agar boolean ho to “It’s a boolean”.

const describeValue = (value: string | boolean | number) => {
    
    if(typeof value === "string")
    {
        return "It’s a string"   
    }
    else if(typeof value === "number")
    {
        return "It’s a number"   
    }
    else if(typeof value === "boolean")
    {
        return "It’s a boolean”"   
    }
}

console.log(describeValue('Ali'))
console.log(describeValue(22))
console.log(describeValue(true))

// 7️⃣ Ek function combine(a: string | number, b: string | number) likho —
// agar dono number ho to sum karo,
// agar dono string ho to concatenate karo,
// warna “Invalid combination” return karo.

function combine(a: string | number, b: string | number){
    
    if(typeof a === "number" && typeof b === "number")
    {
        return a + b
    }
    else if(typeof a === "string" && typeof b === "string")
    {
        return a + b
    }
    else{
        return "Invalid combination"
    }
}
console.log(combine("shan", "ali"))
console.log(combine(2,5))


// 8️⃣ Ek function login(user: string | number) likho —
// agar string ho to “Logging in user: <user>”,
// agar number ho to “Logging in ID: <user>”.

function login(user: string | number){
    
    if(typeof user === "string")
    {
        return `Logging in user: ${user}`
    }
    else{
        return `Logging in ID:${user}`
    }
}
console.log(login("Guest"))

// 9️⃣ Ek function showLength(item: string | any[]) likho —
// agar string ho to string length print karo,
// agar array ho to array length print karo.

function showLength(item: string | any[]) {
    if(typeof item === "string")
    {
        return item.length
    }
    else if(Array.isArray(item)){
        return item.length
    }
}

console.log(showLength("shan"))
console.log(showLength(['shani','ali','shan']))

// 🔟 Ek function processValue(value: string | number | boolean) likho —
// har type ke liye alag message print karo aur agar unknown type aaye to error throw karo.

function processValue(value: string | number | boolean){
    
    if(typeof value === "string")
    {
        return "That's a string"   
    }
    else if(typeof value === "number")
    {
        return "That's a number"   
    }
    else if(typeof value === "boolean")
    {
        return "That's a boolean"   
    }
    else{
        throw new Error("Unknown")
    }
}

processValue(true)