// 🧩 INTERFACE — 10 Practice Questions
// 1. Basic Interface
var person1 = {
    name: "shan",
    age: 22
};
console.log(person1);
var std1 = {
    name: "English",
    grade: "A"
};
var std2 = {
    name: "English",
    // grade: "A"
};
console.log(std1, std2);
var product = {
    id: 3,
    price: 2000
};
// console.log(product.id = 6); here give us error
console.log(product);
var car = {
    start: function () {
        console.log("Car started");
    },
};
console.log(car.start());
var addNumber = {
    sum: function (a, b) {
        return a + b;
    },
};
console.log(addNumber.sum(4, 5));
var employee = {
    name: "shan",
    address: {
        city: "Isl",
        country: "Pak"
    }
};
console.log(employee);
var machine1 = {
    name: "Tools"
};
var machine2 = {
    name: "Tools",
    start: function () {
        console.log("Machine Start");
    }
};
console.log(machine1);
console.log(machine2.start);
var employeee = {
    name: "shan",
    age: 22,
    salary: 100
};
console.log(employeee);
var library = [
    { title: "Rich Dad Poor Dad", author: "Robart" },
    { title: "Eat That Frog", author: "Brain Tracy" },
];
console.log(library);
var calc = {
    sum: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a + b;
    },
    mul: function (a, b) {
        return a + b;
    },
    div: function (a, b) {
        return a + b;
    },
};
console.log(calc.sum(5, 6));
console.log(calc.sub(5, 6));
console.log(calc.mul(5, 6));
console.log(calc.div(5, 6));
