// 1. Ek array fruits banao jisme 5 strings store ho ("apple", "banana", etc.) aur usko print karo.]

let fruits : string[] = ["apple", "banana", "Mango", "Orange", 'Banana']
console.log(fruits);

// 2. Ek array numbers banao jisme sirf number type values allowed ho. Usme [10, 20, 30, 40] store karo.

let num : number[] = [10, 20, 30, 40]
console.log(num);

// 3. Ek function getFirstElement banao jo ek string array le aur uska pehla element return kare.

function getFirstElement( arr: string[] = ['a', 'b', 'c'] ){
    return arr[0]
}

console.log(getFirstElement())

// 4. Ek function getLastElement banao jo ek number array le aur uska last element return kare.

function getLastElement(num: number[] = [2, 4, 5, 7, 8]){
    return num.pop()
}

console.log(getLastElement());


// 5. Ek array mixedArray banao jo number aur string dono store kar sake. Usme "zeeshan" aur 22 store karo.

let mixedArray : (number | string)[] = ['Zeeshan', 22]
console.log(mixedArray);

// 6. Ek function sumArray banao jo ek number array le aur sab numbers ka sum return kare.

function sumArray(num : number[] = [2, 4, 6, 8]){
    
    let sum = 0

    for(let i=0; i < num.length; i++)
    {
        console.log(num[i])
        sum += num[i]!
    }

    return sum
}
console.log(sumArray())

// 7. Ek function printArray banao jo string array le aur har element ko alag line me print kare.

function printArray( colors: string[] = ['red', 'blue', 'green', 'yellow'] ){
    for(let color of colors)
    {
        console.log(color);
    }
}

console.log(printArray())

// 8. Ek array readonlyArray banao jisme [1, 2, 3, 4] ho aur usko readonly banado taake modify na kar sako.

// let readonlyArray : readonly number[] =   [1, 2, 3, 4]
// readonlyArray.push(5)
// console.log(readonlyArray);


// 9. Ek array booleanArray banao jisme sirf true aur false values allowed ho. Usme [true, false, true] store karo.

let booleanArray : boolean[] = [true, false, true]
console.log(booleanArray);

// 10. Ek function findMax banao jo ek number array le aur usme se sabse bada number return kare.

function findMax(num: number[]= [20, 40, 12, 200, 240, 160]){
    return Math.max(...num)
}
console.log(findMax())