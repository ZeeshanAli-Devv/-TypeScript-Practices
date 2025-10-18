/* 🧩 Type vs Interface — Practice Questions (No OOP, Promise!) */
var personI = { name: "Ali", age: 22 };
var personT = { name: "Ali", age: 22 };
console.log(personI);
console.log(personT);
var productI1 = { name: "Ball", price: 500, discount: 10 };
var productI2 = { name: "Ball", price: 500 };
var productT1 = { name: "Ball", price: 500, discount: 10 };
var productT2 = { name: "Ball", price: 500 };
console.log(productI1, productI2);
console.log(productT1, productT2);
var userI = { city: "Lyon", country: "France", name: "Anonymous" };
var userT = { city: "Lyon", country: "France", name: "Anonymous" };
console.log(userI, userT);
var bookI = { id: 1, title: "Book", author: "User" };
var bookT = { id: 1, title: "Book", author: "User" };
console.log(bookI);
// console.log(bookI.id = 12); here give us error
console.log(bookT);
var addI = function (a, b) { return a + b; };
var addT = function (a, b) { return a + b; };
console.log(addI(3, 4));
console.log(addT(5, 9));
var studentI1 = { subject: "Math" };
var studentI2 = { subject: undefined };
console.log(studentI1, studentI2);
var studentT1 = { subject: "Urdu" };
var studentT2 = { subject: undefined };
console.log(studentT1, studentT2);
var empI = { name: "Ali", age: 22, salary: 5000 };
var empT = { name: "Shan", age: 21, salary: 9000 };
console.log(empI, empT);
var responseT = "loading";
console.log(responseT);
function showType(input) {
    if (typeof input === "string") {
        console.log("String Type");
    }
    else if (typeof input === "number") {
        console.log("Number Type");
    }
    else {
        console.log("Invalid");
    }
}
console.log(showType(3));
var allData = {
    name: "ABC",
    age: 22,
    city: "California",
    country: "USA",
    salary: 222,
    getDetail: function () {
        return "\n        Name: ".concat(this.name, ",\n        Age: ").concat(this.age, ",\n        City: ").concat(this.city, ",\n        Country: ").concat(this.country, ",\n        Salary: ").concat(this.salary, ",\n\n        ");
    },
};
console.log(allData.getDetail());
