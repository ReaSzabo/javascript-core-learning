// Spread operator
// elemeire bont egy tömböt

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array3 = [...array1]; // [1, 2, 3]
console.log(array3); // 1, 2, 3

let array4 = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
console.log(array4); // 1, 2, 3, 4, 5, 6

// Mi kerül a tömbbe?
let array5 = [1, ...array1] // 1, 1, 2, 3

// Mi kerül a tömbbe?
let array6 = [...array2, 10] // 4, 5, 6, 10

// Mi kerül a tömbbe?
let array7 = [...array2, 10, ...array1] // 4, 5, 6, 10, 1, 2, 3



let arr1 = ['A', 'B', 'C'];
let arr2 = ['X', 'Y', 'Z'];
let result = [...arr1, ...arr2];

let fruits = ['Apple', 'Orange', 'Banana'];
let newFruits = ['Cherry', ...fruits];
// Mi lesz a tartalma? - cherry, appla, orange, banana


const isSummer = true;
const fruits2 = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
console.log(fruits2)
// Mit ír ki? - apple, banana, watermelon
