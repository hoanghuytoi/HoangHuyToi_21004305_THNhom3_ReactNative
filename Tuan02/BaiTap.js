// 1. JavaScript Array map()
const numbers1 = [45,4,9,16,25];
const numbers2 = numbers1.map(myFunction)

function myFunction(value, index, array){
    return value*2
}
console.log(numbers2) // [90, 8, 18, 32, 50]

// 2. JavaScript Array flatMap()
const myArr = [1,2,3,4,5];
const myArr2 = myArr.flatMap(x => [x, x*2]);

console.log(myArr2) // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// 3. JavaScript Array filter()
const numbers = [45,4,9,16,25];
const over18 = numbers.filter(myFunction2);

function myFunction2(value, index, array){
    return value > 18;
}

console.log(over18) // [45, 25]

// 4. JavaScript Array reduce()
const numbers3 = [45,4,9,16,25];
const sum = numbers3.reduce(myFunction3);

function myFunction3(total, value, index, array){
    return total + value;
}

console.log(sum) // 99

// 5. JavaScript Array find()
const numbers4 = [45,4,9,16,25];
const first = numbers4.find(myFunction4);

function myFunction4(value, index, array){
    return value > 18;
}

console.log(first) // 45

// 6. JavaScript Array every()
const numbers5 = [45,4,9,16,25];
const allOver18 = numbers5.every(myFunction5);

function myFunction5(value, index, array){
    return value > 18;
}

console.log(allOver18) // false

// 7. JavaScript Array some()
const numbers6 = [45,4,9,16,25];
const someOver18 = numbers6.some(myFunction6);

function myFunction6(value, index, array){
    return value > 18;
}

console.log(someOver18) // true

// 8. JavaScript Array forEach()
const numbers7 = [45,4,9,16,25];
numbers7.forEach(myFunction7);

function myFunction7(value, index, array){
    console.log(value);
}// 45 4 9 16 25

// 9. JavaScript Array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
const a = fruits.indexOf("Apple");

console.log(a) // 0 

// 10. JavaScript Array lastIndexOf()
const fruits2 = ["Apple", "Orange", "Apple", "Mango"];
const b = fruits2.lastIndexOf("Apple");

console.log(b) // 2

// 11. JavaScript Array .from()
const myArr3 = Array.from("ABCDEFG");
console.log(myArr3) // ["A", "B", "C", "D", "E", "F", "G"]

// 12. JavaScript Array keys()
const myArr4 = ["Apple", "Orange", "Mango"];
const arrKeys = myArr4.keys();

for (let x of arrKeys){
    console.log(x);
}// 0 1 2

// 13. JavaScript Array entries()
const myArr5 = ["Apple", "Orange", "Mango"];
const arrEntries = myArr5.entries();

for (let x of arrEntries){
    console.log(x);
}// [0, "Apple"] [1, "Orange"] [2, "Mango"]

// 14. JavaScript Array values()
const myArr6 = ["Apple", "Orange", "Mango"];
const arrValues = myArr6.values();

for (let x of arrValues){
    console.log(x);
}// Apple Orange Mango

// 15. JavaScript Array with() Method
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

console.log(myMonths) // Januar Februar March April


