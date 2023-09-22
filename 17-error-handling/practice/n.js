// Írj egy függvényt, amely a paraméretként kapott tömb utolsó elemével tér vissza.
var tomb = [1, 3, 5, 6];
var tomb2 = ["valami", "bármi", "akármi"];
var tomb3 = [true, false, true];


function lastItem(array) {
    return array[array.length - 1];
}

console.log(lastItem(tomb3));