/* 📘 Day 6 – unknown */

// 1️⃣ Ek variable mysteryValue banao jiska type unknown ho.
// Usme "TypeScript" assign karo aur type check karke sirf tab print karo jab wo string ho.

let mysteryValue: unknown
mysteryValue = "TypeScript"

if(typeof mysteryValue === "string")
{
    console.log(mysteryValue)
}

// 2️⃣ Ek function checkType likho jo ek parameter input: unknown le.
// Agar wo number ho to "Number found", agar boolean ho to "Boolean found" return kare.

function checkType(input: unknown){
    if(typeof input === "number")
    {
        return "Number found"
    }
    else if(typeof input === "boolean")
    {
        return "Boolean found"
    }
}

console.log(checkType(true))
console.log(checkType(112))

// 3️⃣ Ek variable temp banao type unknown ke saath aur usme true assign karo.
// Type check karke agar boolean ho to "Yes" print karo.

let temp: unknown = true
if(typeof temp === "boolean")
{
    console.log("Yes")
}

// 4️⃣ Ek function convertToNumber likho jo ek parameter val: unknown le.
// Agar wo string number ho (e.g. "45") to number me convert karke return karo, warna "Not convertible" return karo.

function convertToNumber(val: unknown){
    if(typeof val === "string")
    {
        return Number(val)
    }
    else{
        return "Not convertible"
    }
}
console.log(convertToNumber("45"))

// 5️⃣ Ek unknown variable record banao jisme ek object ho {id: 5, title: "Book"}.
// Type check karke sirf tab title print karo jab wo object ho.

let record: unknown = { id: 5, title: "Book" }
if(typeof record === "object" && typeof record !== null)
{
    console.log((record as {id: number, title: string}).title)
}

// 6️⃣ Ek variable dataList banao jisme [10, 20, 30] assign ho (type unknown).
// Agar wo array ho to har element ko loop se print karo.

let dataList : unknown[] = [10, 20, 30]
for(let data of dataList)
{
    console.log(data)
}

// 7️⃣ Ek function isObjectType likho jo ek unknown parameter le aur true return kare agar wo object ho (null ko exclude karna).

function isObjectType(val: unknown){
    if(typeof val === "object")
    {
        return true
    }
    else{
        return false
    }
}
console.log(isObjectType({name: "shan", age: 22}))

// 8️⃣ Ek unknown variable apiResponse banao jisme JSON string ho {"status":"OK"}.
// Try-catch use karke JSON parse karo, agar valid ho to object return karo warna "Invalid JSON".

let apiResponse : unknown = '{"status":"OK"}'
try{
    if(typeof apiResponse === "string")
    {
        console.log(JSON.parse(apiResponse))
    }
    else{
        console.log("Invalid JSON")
    }
}
catch{
    console.log("Invalid JSON")
}

// 9️⃣ Ek variable randomInput: unknown banao aur usme ek number assign karo.
// Type check karke uska square print karo.

let randomInput : unknown = 12
if(typeof randomInput === "number")
{
    console.log(randomInput * randomInput)
}

// 🔟 Ek function processData likho jo ek parameter value: unknown accept kare.
// Agar wo string ho to uppercase return kare, agar number ho to uska double, warna "Unsupported type" return kare.

function processData(value: unknown)
{
    if(typeof value === "string")
    {
        return value.toUpperCase()
    }
    else if(typeof value === "number")
    {
        return value + value
    }
    else{
        return "Unsupported type"
    }

}

processData("ali")
processData(2)