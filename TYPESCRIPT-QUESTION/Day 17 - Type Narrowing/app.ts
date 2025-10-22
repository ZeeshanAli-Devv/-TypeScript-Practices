// 📌 10 Advanced Type Narrowing Tasks with Headings
// Task 1 – typeof
// string → "This is a string: <value>"
// number → "This is a number: <value>"
// boolean → "This is a boolean: <value>"

function describeInput(input: string | number | boolean) {
    if(typeof input === "string")
    {
        console.log(`This is a string: ${input.toUpperCase()}`)
    }
    else if(typeof input === "number")
    {
        console.log(`This is a number: ${input * 12}`)
    }
    else if(typeof input === "boolean"){
        console.log(`This is a boolean: ${input}`)
    }
}

describeInput('shan');
describeInput(22);
describeInput(true);


// Task 2 – instanceof
// Date → "Created on: <toDateString()>"
// string → "Date as string: <value>"

function showCreatedDate(data: Date | string) {
    if(data instanceof Date)
    {
        return `Created on: ${data.toDateString()}`
    }
    else{
        return `Date as string: ${data}`
    }
}
console.log(showCreatedDate(new Date()))
console.log(showCreatedDate('Ali'))

// Task 3 – in operator
// "ram" in device → print Laptop info
// else → print Phone info

type Laptop = { brand: string; ram: number }
type Phone = { brand: string; simCount: number }

function showDevice(device: Laptop | Phone) {
    if("ram" in device)
    {
        console.log(`Laptop Brand Name : ${device.brand} & Ram is ${device.ram}`)
    }
    else{
        console.log(`Phone Brand Name : ${device.brand} & Sim Number is ${device.simCount}`)
    }
}
showDevice({brand: 'Dell', ram: 16})
showDevice({brand: 'Vivo', simCount: 123})

// Task 4 – Discriminated Union
// kind ke basis pe area calculate kare

type Circle = { kind: "circle"; radius: number }
type Rectangle = { kind: "rectangle"; width: number; height: number }

function calculateArea(shape: Circle | Rectangle) {
    if(shape.kind === "circle")
    {
        return Math.PI * shape.radius * shape.radius
    }
    else
    {
        return  shape.width * shape.height
    }
}

console.log(calculateArea({kind: "circle", radius: 12}))
console.log(calculateArea({kind: "rectangle",width: 12 , height: 12}))

// Task 5 – Custom Type Guard

type Admin = { role: "admin"; permissions: string[] }
type Member = { role: "member"; name: string }

function isAdmin(person: Admin | Member): person is Admin {
  return person.role === "admin"
}
function showDetails(person: Admin | Member) {
    if(isAdmin(person))
    {
        return person.permissions
    }
    else{
        return person.name
    }
}

console.log(showDetails({role: "admin", permissions: ['Dashboard', 'Settings']}))
console.log(showDetails({role: "member", name: "Ali"}))

// Task 6 – Literal Type Narrowing

type Status = "success" | "error" | "loading"
function handleStatus(status: Status) {
    if(status === "success")
    {
        console.log('Operation successful')
    }
    else if(status === "loading")
    {
        console.log('Please wait...')
    }
    else if(status === "error")
    {
        console.log('Something went wrong')
    }
}

handleStatus("success")

// Task 7 – Nullable + Optional Chaining
// print user.name agar exist kare, else "User Not Found"

function checkUser(user: { name: string; age: number } | null | undefined) {
    if(!user?.name)
    {
        console.log('User Not Found')
    }
    else{
        console.log(user.name)
    }
}

checkUser({name: 'Ali', age: 22})

// Task 8 – Unknown Type
// string → uppercase
// number → square
// boolean → "Yes"/"No"
// else → "Invalid"

function handleInput(value: unknown) {
    if(typeof value === "string")
    {
        console.log(value.toUpperCase())
    }
    else if(typeof value === "number")
    {
        console.log(value * value)
    }
    else if(typeof value === "boolean")
    {
        console.log(value === true ? 'Yes' : 'No')
    }
    else{
        console.log('Invalid')
    }
}

handleInput('Ali')
handleInput(11)
handleInput(false)
handleInput(null)


// Task 9 – Never Type + Exhaustive Check
// exhaustive check use kare aur assertNever call kare agar unknown type

type Shape = Circle | Rectangle

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x)
}

function calculateShape(shape: Shape): number {

    if(shape.kind === "circle") {

        return Math.PI * shape.radius * shape.radius
    
    } else if(shape.kind === "rectangle") {
        
        return shape.width * shape.height
    
    } else {
        return assertNever(shape)
    }
}

console.log(calculateShape({ kind: "circle", radius: 12 }))
console.log(calculateShape({ kind: "rectangle", width: 12, height: 12 }))

// Task 10 – Mixed Advanced
// custom type guard ya discriminated union use karke data/error print kare

type SuccessResponse = { status: "success"; data: string }
type ErrorResponse = { status: "error"; message: string }

function handleResponse(res: SuccessResponse | ErrorResponse) {
    if(res.status === "success")
    {
        return res.data
    }
    else{
        return res.message
    }
}

console.log(handleResponse({status: "success", data: 'Connect'}))
console.log(handleResponse({status: "error", message: 'Failed'}))