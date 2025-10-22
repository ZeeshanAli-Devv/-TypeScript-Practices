// 📌 10 Advanced Type Narrowing Tasks with Headings
// Task 1 – typeof
// string → "This is a string: <value>"
// number → "This is a number: <value>"
// boolean → "This is a boolean: <value>"
function describeInput(input) {
    if (typeof input === "string") {
        console.log("This is a string: ".concat(input.toUpperCase()));
    }
    else if (typeof input === "number") {
        console.log("This is a number: ".concat(input * 12));
    }
    else if (typeof input === "boolean") {
        console.log("This is a boolean: ".concat(input));
    }
}
describeInput('shan');
describeInput(22);
describeInput(true);
// Task 2 – instanceof
// Date → "Created on: <toDateString()>"
// string → "Date as string: <value>"
function showCreatedDate(data) {
    if (data instanceof Date) {
        return "Created on: ".concat(data.toDateString());
    }
    else {
        return "Date as string: ".concat(data);
    }
}
console.log(showCreatedDate(new Date()));
console.log(showCreatedDate('Ali'));
function showDevice(device) {
    if ("ram" in device) {
        console.log("Laptop Brand Name : ".concat(device.brand, " & Ram is ").concat(device.ram));
    }
    else {
        console.log("Phone Brand Name : ".concat(device.brand, " & Sim Number is ").concat(device.simCount));
    }
}
showDevice({ brand: 'Dell', ram: 16 });
showDevice({ brand: 'Vivo', simCount: 123 });
function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.width * shape.height;
    }
}
console.log(calculateArea({ kind: "circle", radius: 12 }));
console.log(calculateArea({ kind: "rectangle", width: 12, height: 12 }));
function isAdmin(person) {
    return person.role === "admin";
}
function showDetails(person) {
    if (isAdmin(person)) {
        return person.permissions;
    }
    else {
        return person.name;
    }
}
console.log(showDetails({ role: "admin", permissions: ['Dashboard', 'Settings'] }));
console.log(showDetails({ role: "member", name: "Ali" }));
function handleStatus(status) {
    if (status === "success") {
        console.log('Operation successful');
    }
    else if (status === "loading") {
        console.log('Please wait...');
    }
    else if (status === "error") {
        console.log('Something went wrong');
    }
}
handleStatus("success");
// Task 7 – Nullable + Optional Chaining
// print user.name agar exist kare, else "User Not Found"
function checkUser(user) {
    if (!(user === null || user === void 0 ? void 0 : user.name)) {
        console.log('User Not Found');
    }
    else {
        console.log(user.name);
    }
}
checkUser({ name: 'Ali', age: 22 });
// Task 8 – Unknown Type
// string → uppercase
// number → square
// boolean → "Yes"/"No"
// else → "Invalid"
function handleInput(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value * value);
    }
    else if (typeof value === "boolean") {
        console.log(value === true ? 'Yes' : 'No');
    }
    else {
        console.log('Invalid');
    }
}
handleInput('Ali');
handleInput(11);
handleInput(false);
handleInput(null);
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function calculateShape(shape) {
    // exhaustive check use kare aur assertNever call kare agar unknown type
}
function handleResponse(res) {
    // custom type guard ya discriminated union use karke data/error print kare
}
