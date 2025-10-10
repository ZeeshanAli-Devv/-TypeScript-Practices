// ⚔️ Day 9 – never (NEW SET v2)
// 1️⃣
// Ek function alwaysFail() likho jo hamesha "Fatal Error!" throw kare (type: never).
// const alwaysFail = (): never => {
//     throw new Error("Fatal Error!");
// }
// alwaysFail()
// 2️⃣
// Ek function runForever() likho jo continuously "Working..." print karta rahe (use while(true)), type: never.
var runForever = function () {
    while (true) {
        console.log("Working...");
    }
};
runForever();
// 3️⃣
// Ek function stopApp(reason: string) likho jo diya gaya reason ke saath error throw kare (type: never).
// 4️⃣
// Ek function analyzeType(value: string | number | boolean) likho —
// agar string ho → print "Got a string"
// agar number ho → print "Got a number"
// agar boolean ho → print "Got a boolean"
// warna ek never function call karo.
// 5️⃣
// Ek variable nothingHere: never banao aur usme string value assign karne ki koshish karo (error ana chahiye).
// 6️⃣
// Ek function crashSystem() likho jo "System failure!" throw kare (type: never).
// 7️⃣
// Ek function repeatInfinitely() likho jo infinite loop me "Loading..." print kare (type: never).
// 8️⃣
// Ek function tryCatchDemo() likho —
// try me ek error throw karo (never type function ke zariye)
// catch me "Handled safely" print karo.
// 9️⃣
// Ek function typeGuard(value: string | number | object) likho —
// agar string ho to "String type"
// agar number ho to "Number type"
// agar object ho to "Object type"
// warna never function call karo.
// 🔟
// Ek function shutdown() likho jo "Shutting down..." print kare aur turant "Power off" error throw kare (return type never).
