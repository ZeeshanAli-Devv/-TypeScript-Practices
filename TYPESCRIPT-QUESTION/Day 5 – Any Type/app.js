/* 📘 Day 5 – any */
// 1️⃣ Ek variable data banao jiska type any ho aur usme pehle ek string, phir ek number, phir ek boolean assign karke console me print karo.
var data;
console.log(data = "uaer");
console.log(data = 12);
console.log(data = false);
// 2️⃣ Ek array randomValues banao jisme any type ke mixed elements ho jaise — string, number, boolean, aur object.
var randomValues;
console.log(randomValues = ["shan", 22, true]);
// 3️⃣ Ek function showValue banao jo ek parameter value: any accept kare aur "Value is: ___" print kare.
function showValue(value) {
    return "Value is: ".concat(value);
}
console.log(showValue("shan"));
// 4️⃣ Ek variable person banao jiska type any ho aur usme ek object assign karo { name: "Zeeshan", age: 22 }.
// Phir uske properties ko access karke print karo.
var person = {
    name: "Zeeshan",
    age: 22
};
console.log(person);
// 5️⃣ Ek any type variable unknownData banao jisme array assign karo [10, "TypeScript", true].
// Phir for loop se har element print karo.
var unknownData = [10, "TypeScript", true];
for (var _i = 0, unknownData_1 = unknownData; _i < unknownData_1.length; _i++) {
    var data_1 = unknownData_1[_i];
    console.log(data_1);
}
// 6️⃣ Ek any type variable num banao aur usme "123" string assign karo.
// Phir usko number me convert karke print karo.
var num = "123";
console.log(Number(num));
// 7️⃣ Ek function addValues banao jisme do parameters ho a: any, b: any.
// Agar dono number ho to sum karo, agar string ho to concatenate karo.
function addValues(a, b) {
    return a + b;
}
console.log(addValues(5, 6));
console.log(addValues("Zeeshan", "Ali"));
// 8️⃣ Ek variable info banao jisme pehle ek object {id: 1} ho, phir usme dynamically ek naya property name: "Ali" add karo. (type any ka use karna)
// let info :  {
//     id: number,
//     name: any
// } = {
//     id: 1,
//     name: "Ali"
// }
// console.log(info);
var info = { id: 1 };
info.name = "Ali";
console.log(info);
// 9️⃣ Ek array mixedArray banao jisme any[] ho aur usme objects, numbers, aur strings mix karo.
// Phir loop chala ke sab print karo.
var mixedArrays;
mixedArrays = [12, "shan", { name: "apple" }];
for (var _a = 0, mixedArrays_1 = mixedArrays; _a < mixedArrays_1.length; _a++) {
    var mixed = mixedArrays_1[_a];
    console.log(mixed);
}
console.log(mixedArrays);
// 🔟 Ek any variable result banao aur usme ek function assign karo (x, y) => x + y.
// Phir us function ko call karke output print karo.
var result = function (x, y) {
    return x + y;
};
console.log(result(3, 5));
