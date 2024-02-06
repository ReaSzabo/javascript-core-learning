let arr1 = ['A', 'B', 'C'];
let arr2 = ['X', 'Y', 'Z'];
let result = [...arr1, ...arr2];


let fruits = ['Apple', 'Orange', 'Banana'];
let newFruits = ['Cherry', ...fruits];

const isSummer = true;
const fruits2 = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
console.log(fruits2)