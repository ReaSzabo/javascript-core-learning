// Írj egy függvényt, amely a paraméretként kapott tömb utolsó elemével tér vissza.

const tomb = [1, 3, 5, 6];
const tomb2 = ["valami", "bármi", "akármi"];
const tomb3 = [true, false, true];

lastElement = (arr) => {
    return arr[arr.length - 1];
}

console.log(lastElement(tomb));
console.log(lastElement(tomb2));
console.log(lastElement(tomb3));


