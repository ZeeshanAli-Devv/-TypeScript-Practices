/* 🧩 OBJECTS — 10 Practice Questions */
// 1. Create an object person with name, age, and isStudent (boolean).
var person = {
    name: "shan",
    age: 22,
    isStudent: true
};
console.log(person);
// 2. Create an object product with readonly property id and price as number.
var product = {
    id: 2,
    price: 1200,
};
// console.log(product.id = 5); give me error because it's can't reasign
console.log(product);
// 3. Create a function printBook that accepts a book object with title & author.
function printBook(book) {
    console.log(book.title, book.author);
}
printBook({ title: "Rich Dad Poor Dad", author: "Robart" });
// 4. Create an object car that has a method start() returning "Car started".
var car = {
    start: function () {
        return "Car started";
    }
};
console.log(car.start());
// 5. Create an object student with optional property grade.
var student = {
    grade: "A"
};
console.log({ grade: "A" });
console.log(student);
var user = {
    name: "shan",
    age: 22
};
console.log(user);
// 7. Create an object employee that includes another nested object address.
var employee = {
    emp1: {
        address: "No Way Home"
    }
};
console.log(employee.emp1);
// 8. Create an object with a method getFullName() that returns firstName + lastName.
var userInfo = {
    firstName: "Zee",
    lastName: "Ali",
    getFullName: function () {
        return "First Name: ".concat(userInfo.firstName, " Last Name: ").concat(userInfo.lastName);
    },
};
console.log(userInfo.getFullName());
// 9. Create a function printEmployee that takes an object with name and salary, and returns a formatted string.
function printEmployee(obj) {
    return "Your Name: ".concat(obj.name, ", & Your Salary: ").concat(obj.salary);
}
console.log(printEmployee({ name: "shan", salary: 50000 }));
// 10. Create an object calculator that has functions add, subtract, multiply, and divide.
var calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
};
console.log(calculator.add(4, 6));
console.log(calculator.subtract(4, 6));
console.log(calculator.multiply(4, 6));
console.log(calculator.divide(4, 6));
