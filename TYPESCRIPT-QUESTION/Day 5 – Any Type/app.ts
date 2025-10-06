/* 📘 Day 5 – any */
// 1️⃣ Ek variable data banao jiska type any ho aur usme pehle ek string, phir ek number, phir ek boolean assign karke console me print karo.

let data : any 
console.log(data = "uaer")
console.log(data = 12)
console.log(data = false)

// 2️⃣ Ek array randomValues banao jisme any type ke mixed elements ho jaise — string, number, boolean, aur object.

let randomValues: any[]
console.log(randomValues = ["shan", 22,true])

// 3️⃣ Ek function showValue banao jo ek parameter value: any accept kare aur "Value is: ___" print kare.

function showValue(value: any){
    return `Value is: ${value}`
}
console.log(showValue("shan"))

// 4️⃣ Ek variable person banao jiska type any ho aur usme ek object assign karo { name: "Zeeshan", age: 22 }.
// Phir uske properties ko access karke print karo.

let person : any = {
    name: "Zeeshan", 
    age: 22
}
console.log(person);


// 5️⃣ Ek any type variable unknownData banao jisme array assign karo [10, "TypeScript", true].
// Phir for loop se har element print karo.

let unknownData : any[] = [10, "TypeScript", true]
for(let data of unknownData)
{
    console.log(data);
}

// 6️⃣ Ek any type variable num banao aur usme "123" string assign karo.
// Phir usko number me convert karke print karo.

let num : any = "123"
console.log(Number(num));

// 7️⃣ Ek function addValues banao jisme do parameters ho a: any, b: any.
// Agar dono number ho to sum karo, agar string ho to concatenate karo.

function addValues(a: any, b: any){
    return a + b
}

console.log(addValues(5,6))
console.log(addValues("Zeeshan", "Ali"))

// 8️⃣ Ek variable info banao jisme pehle ek object {id: 1} ho, phir usme dynamically ek naya property name: "Ali" add karo. (type any ka use karna)

// let info :  {
//     id: number,
//     name: any
// } = {
//     id: 1,
//     name: "Ali"
// }

// console.log(info);

    /*    OR    */

// let info : any = {id: 1}
// info.name = "Ali"
// console.log(info);


// 9️⃣ Ek array mixedArray banao jisme any[] ho aur usme objects, numbers, aur strings mix karo.
// Phir loop chala ke sab print karo.

let mixedArrays : any[] 

mixedArrays = [12, "shan", {name: "apple"}]

for(let mixed of mixedArrays)
{
    console.log(mixed);
    
}
console.log(mixedArrays);

// 🔟 Ek any variable result banao aur usme ek function assign karo (x, y) => x + y.
// Phir us function ko call karke output print karo.

let result : any = function(x: any, y: any){
    return x + y
}

console.log(result(3,5));
