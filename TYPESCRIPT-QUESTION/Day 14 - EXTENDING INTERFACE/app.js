// 1. Basic Extension
var employee = { name: "Zeeshan", age: 22, salary: 90000 };
console.log(employee);
var emps = { name: "Ali", city: "Isl", department: "Science" };
console.log(emps);
var clgStudent1 = { name: "Zeeshan", age: 22 };
var clgStudent2 = { name: "Zeeshan", age: 22, major: "English" };
console.log(clgStudent1);
console.log(clgStudent2);
var circle = { radius: 3.4, color: "blue" };
console.log(circle);
var allData = { a: "apple", b: "bat", c: "cat" };
console.log(allData);
var phone = {
    brand: "Nokia",
    call: function () {
        console.log("Calling...");
    },
};
console.log(phone);
var car = { id: 3, model: "Lg", batteryCapacity: 3000 };
console.log(car);
var dog = {
    species: "Wild",
    canWalk: true,
    breed: "Germen",
    bark: function () {
        console.log("Woof!");
    },
};
console.log(dog);
var result = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
};
console.log(result.add(5, 6));
console.log(result.multiply(5, 6));
var checkEmployee = {
    name: "Zeeshan",
    age: 22,
    city: "Isl",
    country: "Pak",
    companyName: "Nil",
    salary: 200000,
    getDetails: function () {
        return "\n        ".concat(this.name, ",\n        ").concat(this.age, ",\n        ").concat(this.city, ",\n        ").concat(this.country, ",\n        ").concat(this.companyName, ",\n        ").concat(this.salary, ",\n       ");
    },
};
console.log(checkEmployee.getDetails());
