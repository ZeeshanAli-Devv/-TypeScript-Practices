/* 📘 Day 3 – Tuples */
// 1. Ek tuple employee banao jisme id (number), name (string) aur isActive (boolean) ho.
var employee = [1, "shan", true];
console.log(employee);
// 2. Ek tuple location banao jisme city (string), country (string), aur zipCode (number) ho.
var locations = ["Wuhan", "China", 90002];
console.log(locations);
// 3. Ek tuple marks banao jisme math, english, aur science ke marks (number) store ho.
var marks = [50, 50, 100];
console.log(marks);
// 4. Ek function describeCar banao jo ek tuple [string, number, string] (brand, modelYear, color) accept kare aur ek string return kare:
// "This is a <color> <brand> from <modelYear>."
var describeCar = function (car) {
    return "This is a ".concat(car[2], " ").concat(car[0], " from ").concat(car[1], ".");
};
console.log(describeCar(["Nissan", 2023, "Red"]));
// 5. Ek tuple book banao jisme title (string), author (string), aur price (number) ho.
var book = ["Eat That Frog", "Brain Tracy", 2000];
console.log(book);
// 6. Ek tuple array users banao jisme multiple [string, number, boolean] values store ho (name, age, active).
var users = [
    ["Zeeshan", 22, true],
    ["shan", 21, true],
    ["Ali", 19, true],
];
console.log(users);
// 7. Ek function reversePair likho jo ek tuple [string, number] le aur return kare [number, string].
var reversePair = function (rev) {
    if (rev === void 0) { rev = ["Apple", 1]; }
    return [rev[1], rev[0]];
};
console.log(reversePair());
// 8. Ek tuple movie banao jisme title (string), rating (number), aur released (boolean) ho.
var movie = ["Assasian", 4.5, true];
console.log(movie);
// 9. Ek function formatCoordinate banao jo [number, number] tuple accept kare aur return kare "X: <x>, Y: <y>".
var formatCoordinate = function (num) {
    return "X: ".concat(num[0], ", Y: ").concat(num[1]);
};
console.log(formatCoordinate([10, 20]));
// 10. Ek readonly tuple origin banao jisme [0, 0] ho aur ensure karo ke change karne par TypeScript error aaye.'
var origin = [0, 0];
origin.push(6);
console.log(origin);
