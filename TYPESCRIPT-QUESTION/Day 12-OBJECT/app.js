//  💡 10 Practice Tasks — TypeScript Objects
// 🧩 Basic Object
// 1️⃣ Create an object car with properties brand (string), model (string), and year (number).
// Log the car details.
var car = {
    brand: "Nissan",
    model: "New",
    year: 2025,
};
console.log(car);
// 🧩 Optional Property
// 2️⃣ Create an object student with properties:
// name (string), age (number, optional).
// Log only the name if age is missing.
var student = {
    name: "shan",
};
console.log(student);
// 🧩 Readonly Property
// 3️⃣ Create an object book with readonly property isbn (number) and a normal property title (string).
// Try changing isbn (should show error).
var book = {
    isbn: 2,
    title: "Apple"
};
// console.log(book.isbn = 4) // give me error
console.log(book);
// 🧩 Object with Function
// 4️⃣ Create an object user with properties:
// username (string),
// email (string),
// and a method displayInfo() that returns a formatted string.
var user = {
    username: "shan",
    email: "shan@gmail.com",
    displayInfo: function () {
        return "".concat(user.username, ", ").concat(user.email);
    }
};
console.log(user.displayInfo());
var product1 = {
    name: "watch",
    price: 1200,
    inStock: 20,
};
var product2 = {
    name: "umbrella",
    price: 1400,
    inStock: 10,
};
console.log(product1, product2);
// 🧩 Nested Object
// 6️⃣ Create an object employee that has:
// name (string)
// address (object with city and country)
// getAddress() method that returns full address as string.
var employee = {
    name: "sam",
    address: {
        city: "isl",
        country: "pak"
    },
    getAddress: function () {
        return "Your Name is ".concat(employee.name, " from ").concat(employee.address.city, " ").concat(employee.address.country);
    },
};
console.log(employee.getAddress());
// 🧩 Object as Function Parameter
// 7️⃣ Make a function printCourse() that takes an object with courseName and duration and logs both.
function printCourse(info) {
    console.log(info.courseName, info.duration);
}
printCourse({ courseName: "Math", duration: 2 });
// 🧩 Array of Objects
// 8️⃣ Create an array users that contains multiple objects with id, name, and age.
// Then loop through and print all names.
var users = [
    { id: 1, name: "Ali", age: 21 },
    { id: 2, name: "Shan", age: 22 },
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user_1 = users_1[_i];
    console.log(user_1.name);
}
// 🧩 Object with Optional Function
// 9️⃣ Create an object player with:
// name, score, and optional method celebrate() that logs “🎉 Winner!”
var player = {
    name: "shan",
    score: 25,
    celebrate: function () {
        return "Winner";
    }
};
console.log(player.name, player.score);
// 🧩 Readonly + Nested + Function Combo
// 🔟 Create a complex object account:
// readonly id
// owner (object with name, email)
// method getSummary() → returns "Account of {name}".
var account = {
    id: 2,
    owner: {
        name: "shan",
        email: "shan@gmail.com"
    },
    getSummary: function () {
        return "Account of ".concat(this.owner.name);
    },
};
console.log(account.getSummary());
