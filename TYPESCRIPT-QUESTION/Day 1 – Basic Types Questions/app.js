// 1. Ek variable username banao jo sirf string type accept kare. Usme apna naam store karo.
var username = "zeeshan";
console.log(username);
// 2. Ek variable age banao jo sirf number type accept kare. Usme apni age store karo.
var age = 22;
console.log(age);
// 3. Ek variable isAdmin banao jo sirf boolean type ho. Default value false do.
var isAdmin = false;
console.log(isAdmin);
// 4. Ek function getUserInfo banao jo ek string (name) aur ek number (age) accept kare aur ek sentence return kare "My name is ___ and I am ___ years old."
function getUserInfo(myName, age) {
    return "My name is ".concat(myName, " and I am ").concat(age, " years old.");
}
console.log(getUserInfo("Zeeshan", 22));
// 5. Ek function isEven banao jo ek number accept kare aur boolean return kare (true agar even number ho, warna false).
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(6));
console.log(isEven(7));
// 6. Ek variable pi banao jo number type ho aur value 3.1416 ho. Is variable ko re-assign kar ke string dene ki koshish karo aur dekho TypeScript error deta hai ya nahi.
// 7. Ek function toUpperCaseString banao jo string input le aur usko uppercase return kare.
// 8. Ek function sum banao jo do numbers accept kare aur unka sum return kare.
// 9. Ek function checkLogin banao jo ek boolean parameter loggedIn le aur return kare:
// "Welcome user!" agar true ho
// "Please login" agar false ho
// 10. Ek example banao jisme ek variable randomValue initially string ho aur phir number assign karne ki koshish karo. TypeScript ki error message samajhne ki koshish karo. 
