// 📘 Day 7 – void (10 Questions)
// 1️⃣ Ek function sayHello() banao jo console me "Hello TypeScript" print kare.
// (Return type void hona chahiye)
function sayHello() {
    console.log("Hello TypeScript");
}
sayHello();
// 2️⃣ Ek function printSum(a, b) likho jo dono numbers ka sum print kare (return na kare).
function printSum(a, b) {
    console.log(a + b);
}
printSum(4, 5);
// 3️⃣ Ek variable logMessage banao jisme ek arrow function ho jo "Logging..." print kare. Type hint () => void ka use karo.
var logMessage = function () {
    console.log("Logging...");
};
logMessage();
// 4️⃣ Ek function showUser(name: string) banao jo console me "User: <name>" print kare aur kuch return na kare.
function showUser(name) {
    console.log("Name: ".concat(name));
}
showUser("Zeeshan");
// 5️⃣ Ek function warnUser() likho jo "Warning: Low battery!" print kare. Return type void hona chahiye.
function warnUser() {
    console.log("Warning: Low battery!");
}
warnUser();
// 6️⃣ Ek function processData(data: string[]): void likho jo har string ko uppercase me print kare (for loop use karo).
function processData(datas) {
    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
        var data = datas_1[_i];
        console.log(data.toUpperCase());
    }
}
processData(["Ali", "Shan", "Khan"]);
// 7️⃣ Ek function sendNotification(msg?: string) likho — agar msg mile to print kare "Notification: msg", warna "No message".
function sendNotification(msg) {
    if (msg) {
        console.log("Notification ".concat(msg));
    }
    else {
        console.log("No message");
    }
}
sendNotification(""); // mag not received optional
sendNotification("Received!");
// 8️⃣ Ek function executeTask(fn: () => void) likho jo ek callback accept kare aur usko call kare.
function executeTask(fn) {
    console.log(fn());
}
executeTask(function () { return console.log("Task executed!"); });
// 9️⃣ Ek variable emptyFunc banao jiska type void function ho aur usme sirf "Running..." print karo.
// 🔟 Ek function noReturnExample() likho jo console me "This function returns nothing!" likhe — ensure karo ke TypeScript uska return type void infer kare.
