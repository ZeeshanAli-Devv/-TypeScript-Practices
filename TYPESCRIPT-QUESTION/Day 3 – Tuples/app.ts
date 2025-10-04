/* 📘 Day 3 – Tuples */

// 1. Ek tuple employee banao jisme id (number), name (string) aur isActive (boolean) ho.

const employee : [id: number, name: string, isActive: boolean] = [1, "shan", true]
console.log(employee);

// 2. Ek tuple location banao jisme city (string), country (string), aur zipCode (number) ho.

const locations : [city: string, country: string, zipCode: number] = ["Wuhan", "China", 90002]
console.log(locations);

// 3. Ek tuple marks banao jisme math, english, aur science ke marks (number) store ho.

const marks: [math: number, english: number, science: number] = [50, 50, 100]
console.log(marks);

// 4. Ek function describeCar banao jo ek tuple [string, number, string] (brand, modelYear, color) accept kare aur ek string return kare:
// "This is a <color> <brand> from <modelYear>."

const describeCar = (car: [brand: string, modelYear: number, color: string]): string => {
    return `This is a ${car[2]} ${car[0]} from ${car[1]}.`
}
console.log(describeCar(["Nissan", 2023, "Red"]));

// 5. Ek tuple book banao jisme title (string), author (string), aur price (number) ho.

const book : [title: string, author: string, price: number] = ["Eat That Frog", "Brain Tracy", 2000]
console.log(book);

// 6. Ek tuple array users banao jisme multiple [string, number, boolean] values store ho (name, age, active).

const users : [name: string, age: number, active: boolean][] = [
    ["Zeeshan", 22, true],
    ["shan", 21, true],
    ["Ali", 19, true],
]
console.log(users);

// 7. Ek function reversePair likho jo ek tuple [string, number] le aur return kare [number, string].

const reversePair = (rev: [FruitName: string, FruitIndex: number] = ["Apple", 1]) => {
    return [rev[1], rev[0]]
}
console.log(reversePair())

// 8. Ek tuple movie banao jisme title (string), rating (number), aur released (boolean) ho.

const movie : [title: string, rating: number, release: boolean] = ["Assasian", 4.5, true]
console.log(movie);

// 9. Ek function formatCoordinate banao jo [number, number] tuple accept kare aur return kare "X: <x>, Y: <y>".

const formatCoordinate = ( num: [number, number]) => {
    return `X: ${num[0]}, Y: ${num[1]}`
}
console.log(formatCoordinate([10, 20]));

// 10. Ek readonly tuple origin banao jisme [0, 0] ho aur ensure karo ke change karne par TypeScript error aaye.'

const origin : readonly [number , number] = [0, 0]
// origin.push(6)      // here he give us error we can't push in readonly property
console.log(origin);