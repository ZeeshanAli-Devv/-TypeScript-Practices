/* 🌑 Day 8 – null & undefined (10 Questions) */
// 1️⃣ Ek variable username banao jiska value initially undefined ho.
// Phir check karo agar wo undefined hai to "No user found" print karo.
var username;
if (username === undefined) {
    console.log("No user found");
}
// 2️⃣ Ek variable age banao jisme null assign ho.
// Console me print karo "Age not provided" agar value null ho.
var age = null;
if (age === null) {
    console.log("Age not provided");
}
// 3️⃣ Ek function getValue() likho jo ek parameter val: string | null le.
// Agar value null hai to "No value" return kare, warna "Value is <val>" return kare.
function getValue(val) {
    if (val === null) {
        return "No value";
    }
    else {
        return "Value is ".concat(val);
    }
}
console.log(getValue("shan"));
// 4️⃣ Ek function findUserName(name?: string) likho — agar name na mile (undefined ho) to "Guest" print karo, warna "Welcome <name>".
function findUserName(name) {
    if (name === undefined) {
        return "Guest";
    }
    else {
        return "Welcome ".concat(name);
    }
}
console.log(findUserName());
console.log(findUserName("Shan"));
// 5️⃣ Ek variable data banao jisme { id: 1, info: null } ho.
// Agar info null hai to "No info available" print karo.
var data = { id: 1, info: null };
if (data.info === null) {
    console.log("No info available");
}
// 6️⃣ Ek function safeMultiply(a?: number, b?: number) likho.
// Agar dono values defined hain to unka multiply print karo, warna "Missing value" print karo.
var safeMultiply = function (a, b) {
    if (a !== undefined && b !== undefined) {
        return a * b;
    }
    else {
        return "Missing value";
    }
};
console.log(safeMultiply()); // Missing value
console.log(safeMultiply(4, 5));
// 7️⃣ Ek function cleanInput(input: string | null | undefined) likho.
// Agar null ya undefined ho to "Invalid input", warna trim() karke print karo.
var cleanInput = function (input) {
    if (input === null || input === undefined) {
        return "Invalid input";
    }
    else {
        return input.trim();
    }
};
console.log(cleanInput("sam"));
// 8️⃣ Ek variable response banao type { data: string | null }.
// Agar data null nahi hai to "Data received", warna "Empty data" print karo.
var response = { data: null };
console.log(response);
// 9️⃣ Ek function checkStatus(status: null | undefined | string) likho.
// Agar status null hai to "Null status", agar undefined hai to "Undefined status", warna "Status: <status>".
function checkStatus(status) {
    if (status === null) {
        return "Null status";
    }
    else if (status === undefined) {
        return "Undefined status";
    }
    else {
        return "Status : ".concat(status);
    }
}
console.log(checkStatus("shan"));
// 🔟 Ek function getUserDetails(user?: { name?: string | null }) likho.
// Agar user ya user.name null/undefined hai to "User info missing" print karo, warna user.name print karo.
function getUserDetails(user) {
    if (user === null || user === undefined || user.name === null || user.name === undefined) {
        return "User info missing";
    }
    else {
        return user === null || user === void 0 ? void 0 : user.name;
    }
}
getUserDetails({ name: "shan" });
