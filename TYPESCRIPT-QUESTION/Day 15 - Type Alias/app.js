/* 🧩 Type Alias — 10 Practice Questions */
var person = { name: "Ali", age: 22 };
console.log(person);
var checkStatus = "approved";
console.log(checkStatus);
var numberId = 22;
var stringId = "Ali";
console.log(numberId, stringId);
var productList = ["Watch", "Toy", "Ball"];
console.log(productList);
var mul = function (a, b) {
    return a + b;
};
console.log(mul(5, 6));
var book1 = {
    title: "Eat That Frog",
    author: "Brain Tracy",
    price: 200
};
var book2 = {
    title: "Eat That Frog",
    author: "Brain Tracy",
    // price: 200
};
console.log(book1, book2);
var vehicle = {
    id: 3,
    model: "BMW"
};
console.log(vehicle);
var result = {
    name: "Football",
    score: 5
};
console.log(result);
function showType(input) {
    if (typeof input === "string") {
        console.log("Function Type");
    }
    else if (typeof input === "number") {
        console.log("Number Type");
    }
    else {
        console.log("Invalid");
    }
}
console.log(showType(4));
var alldata = {
    name: "Ali",
    email: "abc@gmail.com",
    city: "Lyon",
    country: "France",
    balance: 2000,
    getDetails: function () {
        return "\n       Name: ".concat(this.name, ",\n       Email: ").concat(this.email, ",\n       City: ").concat(this.city, ",\n       Country: ").concat(this.country, ",\n       Balance: ").concat(this.balance, ",\n       ");
    },
};
console.log(alldata.getDetails());
