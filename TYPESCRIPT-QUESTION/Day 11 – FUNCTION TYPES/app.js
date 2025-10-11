// 1️⃣
// Ek function greet() likho —
// jo "Hello, World!" return kare.
// Return type string rakho.
function greet() {
    return "Hello, World!";
}
console.log(greet());
// 2️⃣
// Ek function addNumbers(a: number, b: number) likho —
// jo dono ka sum return kare.
// Return type number rakho.
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 7));
// 3️⃣
// Ek function sayHello(name: string, age?: number) likho —
// jo name zarur le, lekin age optional ho.
// Agar age di gayi ho to "Hello <name>, age <age>" print kare,
// warna "Hello <name>".
function sayHello(name, age) {
    if (age !== undefined) {
        return "Hello: ".concat(name, ", Age: ").concat(age);
    }
    else {
        return "Hello ".concat(name);
    }
}
console.log(sayHello("shan"));
console.log(sayHello("shan", 22));
// 4️⃣
// Ek function multiply(a: number, b: number = 5) likho —
// agar second argument na mile to default 5 le aur result return kare.
function multiply(a, b) {
    if (b === void 0) { b = 5; }
    return a * b;
}
console.log(multiply(3));
console.log(multiply(3, 2));
// 5️⃣
// Ek arrow function divide likho —
// jo do numbers le aur division ka result return kare.
// Return type number ho.
var divide = function (x, y) {
    return x / y;
};
console.log(divide(4, 5));
// 6️⃣
// Ek function printMessage(message: string): void likho —
// jo bas console me "Message: <message>" print kare.
// Return kuch nahi (void).
function printMessage(message) {
    console.log("Welcome: ".concat(message));
}
printMessage("Back");
// 7️⃣
// Ek function getFullName(first: string, last: string) likho —
// jo full name return kare "first last" format me.
// Arrow function version bhi likho.
var getFullName = function (first, last) {
    return "".concat(first, " ").concat(last);
};
console.log(getFullName("Zee", "Ali"));
// 8️⃣
// Ek function calculate(operation: string, a: number, b: number) likho —
// agar "add" ho to sum return kare,
// agar "subtract" ho to difference return kare,
// warna "Invalid operation" return kare.
var calculate = function (operation, a, b) {
    if (operation === "add") {
        return a + b;
    }
    else if (operation === "subtract") {
        return a - b;
    }
    else {
        return "Invalid operation";
    }
};
console.log(calculate("add", 4, 6));
var multiplyNumbers = function (x, y) {
    return x * y;
};
// 🔟
// Ek higher-order function executeTwice(fn: () => void) likho —
// jo diye gaye function ko 2 baar call kare.
function executeTwice(fn) {
    fn();
    fn();
}
function greets() {
    console.log("Hello");
}
executeTwice(greets);
