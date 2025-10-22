// ⚔️ Day 9 – never (NEW SET v2)
// 1️⃣

// Ek function alwaysFail() likho jo hamesha "Fatal Error!" throw kare (type: never).

const alwaysFail = (): never => {
    throw new Error("Fatal Error!");
}
alwaysFail()

// 2️⃣

// Ek function runForever() likho jo continuously "Working..." print karta rahe (use while(true)), type: never.

const runForever = (): never => {
    while(true)
    {
        console.log("Working...")
    }
}
runForever()

// 3️⃣

// Ek function stopApp(reason: string) likho jo diya gaya reason ke saath error throw kare (type: never).

const stopApp = (reason: string): never => {
    throw Error (reason)
}
stopApp("done")

// 4️⃣

// Ek function analyzeType(value: string | number | boolean) likho —

// agar string ho → print "Got a string"

// agar number ho → print "Got a number"

// agar boolean ho → print "Got a boolean"

// warna ek never function call karo.

function checkValue(val: never): never{
    throw new Error (val)
}

const analyzeType = (value: string | number | boolean): void => {
    
    if(typeof value === "string")
    {
        console.log("Got a string")
    }

    else if(typeof value === "number")
    {
        console.log("Got a number")
    }

    else if(typeof value === "boolean")
    {
        console.log("Got a boolean")
    }
    else{
        checkValue(value)
    }
}


console.log(analyzeType("shan"))

// 5️⃣

// Ek variable nothingHere: never banao aur usme string value assign karne ki koshish karo (error ana chahiye).

let nothingHere: never 
// nothingHere = "error" //  yha error da ga mujhe becuase never ma string nhi add kar sakte ha
// console.log(nothingHere)

// 6️⃣

// Ek function crashSystem() likho jo "System failure!" throw kare (type: never).

const crashSystem = (): never => {
    throw new Error("System failure!");
}

console.log(crashSystem())

// 7️⃣

// Ek function repeatInfinitely() likho jo infinite loop me "Loading..." print kare (type: never).

const repeatInfinitely = (): never => {
    while(true)
    {
        console.log("Loading...")
    }
}
console.log(repeatInfinitely())

// 8️⃣

// Ek function tryCatchDemo() likho —

// try me ek error throw karo (never type function ke zariye)

// catch me "Handled safely" print karo.

const tryCatchDemo = () => {
    try{
        throw Error("Error")
    }
    catch{
        console.log("Handled safely")
    }
}
console.log(tryCatchDemo())

// 9️⃣

// Ek function typeGuard(value: string | number | object) likho —

// agar string ho to "String type"

// agar number ho to "Number type"

// agar object ho to "Object type"

// warna never function call karo.

const checkValues = (val: never): never => {
    throw new Error (val + "Crashed!")
}

const typeGuard = (value: string | number | object)=>{
    
    if(typeof value === "string")
    {
        console.log("String type")
    }

    else if(typeof value === "number")
    {
        console.log("Number type")
    }

    else if(typeof value === "object")
    {
        console.log("Object type")
    }
    else{
        checkValues(value)
    }
}

console.log(typeGuard(22))

// 🔟

// Ek function shutdown() likho jo "Shutting down..." print kare aur turant "Power off" error throw kare (return type never).

function shutdown(): never{
    console.log("Shutting down...")
    throw new Error("Power off");
}       