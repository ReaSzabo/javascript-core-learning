// Rendezd a tömböt csökkenő sorrendben!

let testArray = [3, 2, 6, 9];

testArray.sort();
testArray.reverse();

testArray.sort((a, b) => b - a);

console.log(testArray);
