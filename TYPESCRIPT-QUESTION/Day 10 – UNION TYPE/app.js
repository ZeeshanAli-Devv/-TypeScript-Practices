/* ⚔️ Day 10 – UNION TYPE (NEW SET) ⚔️ */
// 1️⃣ Ek variable value: string | number banao —
// usme pehle string assign karo, phir number assign karo, aur dono print karo.
var value;
console.log(value = "shan");
console.log(value = 22);
// 2️⃣ Ek function printId(id: string | number) likho —
// agar number ho to “ID (number): <id>” print karo,
// agar string ho to “ID (string): <id>” print karo.
var printId = function (id) {
    if (typeof id === "number") {
        return "ID Number: ".concat(id);
    }
    else if (typeof id === "string") {
        return "ID String: ".concat(id);
    }
};
console.log(printId("Ali"));
console.log(printId(22));
// 3️⃣ Ek function formatInput(input: string | number) likho —
// agar number ho to usse string me convert karke return karo,
// agar string ho to “Processed: <input>” return karo.
var formatInput = function (input) {
    if (typeof input === "number") {
        return input.toString();
    }
    else {
        return "Processed: ".concat(input);
    }
};
console.log(formatInput("shan"));
// 4️⃣ Ek function doubleValue(value: number | string) likho —
// agar number ho to uska double return kare,
// agar string ho to usse do baar concatenate karke return kare.
var doubleValue = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value + value;
    }
};
console.log(doubleValue("shan"));
console.log(doubleValue("2"));
// 5️⃣ Ek array data: (string | number)[] banao — 
// usme strings aur numbers dono add karo aur loop se print karo.
var datas;
datas = ["Zeeshan", "Ali", 22,];
for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
    var data = datas_1[_i];
    console.log(data);
}
// 6️⃣ Ek function describeValue(value: string | boolean | number) likho —
// agar string ho to “It’s a string”,
// agar number ho to “It’s a number”,
// agar boolean ho to “It’s a boolean”.
var describeValue = function (value) {
    if (typeof value === "string") {
        return "t’s a string";
    }
    else if (typeof value === "number") {
        return "t’s a number";
    }
    else if (typeof value === "boolean") {
        return "t’s a boolean”";
    }
};
console.log('Ali');
console.log(22);
console.log(true);
// 7️⃣ Ek function combine(a: string | number, b: string | number) likho —
// agar dono number ho to sum karo,
// agar dono string ho to concatenate karo,
// warna “Invalid combination” return karo.
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        return "Invalid combination";
    }
}
console.log(combine("shan", "ali"));
console.log(combine(2, 5));
// 8️⃣ Ek function login(user: string | number) likho —
// agar string ho to “Logging in user: <user>”,
// agar number ho to “Logging in ID: <user>”.
function login(user) {
    if (typeof user === "string") {
        return "Logging in user: ".concat(user);
    }
    else {
        return "Logging in ID:".concat(user);
    }
}
console.log(login("Guest"));
// 9️⃣ Ek function showLength(item: string | any[]) likho —
// agar string ho to string length print karo,
// agar array ho to array length print karo.
function showLength(item) {
    if (typeof item === "string") {
        return item.length;
    }
    else if (Array.isArray(item)) {
        return item.length;
    }
}
console.log(showLength("shan"));
console.log(showLength(['shani', 'ali', 'shan']));
// 🔟 Ek function processValue(value: string | number | boolean) likho —
// har type ke liye alag message print karo aur agar unknown type aaye to error throw karo.
