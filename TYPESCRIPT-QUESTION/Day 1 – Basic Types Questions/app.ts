// 1. Ek variable username banao jo sirf string type accept kare. Usme apna naam store karo.

let username : string = "zeeshan"
console.log(username);

// 2. Ek variable age banao jo sirf number type accept kare. Usme apni age store karo.

let age : number = 22
console.log(age);

// 3. Ek variable isAdmin banao jo sirf boolean type ho. Default value false do.

const isAdmin : boolean = false
console.log(isAdmin);

// 4. Ek function getUserInfo banao jo ek string (name) aur ek number (age) accept kare aur ek sentence return kare "My name is ___ and I am ___ years old."

function getUserInfo(myName: string, age: number){
    return `My name is ${myName} and I am ${age} years old.`
}

console.log(getUserInfo("Zeeshan", 22))

// 5. Ek function isEven banao jo ek number accept kare aur boolean return kare (true agar even number ho, warna false).

function isEven(num: number) {
    
    if(num%2 === 0)
    {
        return true    
    }
    else{
        return false
    }
}
console.log(isEven(6))
console.log(isEven(7))

// 6. Ek variable pi banao jo number type ho aur value 3.1416 ho. Is variable ko re-assign kar ke string dene ki koshish karo aur dekho TypeScript error deta hai ya nahi.

// let pi : number = 3.1416
// pi = "giving error"

// console.log(pi);

// 7. Ek function toUpperCaseString banao jo string input le aur usko uppercase return kare.

function toUpperCaseString(input : string){
    return input.toUpperCase()
}
console.log(toUpperCaseString("shan"))

// 8. Ek function sum banao jo do numbers accept kare aur unka sum return kare.

function sum(a: number, b: number){
    return a + b
}

console.log(sum(5,7))

// 9. Ek function checkLogin banao jo ek boolean parameter loggedIn le aur return kare:

// "Welcome user!" agar true ho

// "Please login" agar false ho

function checkLogin(loggedIn : boolean){
   return loggedIn ? "Welcome user!" : "Please login"
}

checkLogin(true)
checkLogin(false)

// 10. Ek example banao jisme ek variable randomValue initially string ho aur phir number assign karne ki koshish karo. TypeScript ki error message samajhne ki koshish karo. 

// let randomValue : string
// randomValue = 12