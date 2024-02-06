// Írj egy függvényt, amely a paraméretként kapott tömb utolsó elemével tér vissza.
var tomb = [1, 3, 5, 6];
var tomb2 = ["valami", "bármi", "akármi"];
var tomb3 = [true, false, true];


function lastElement(arr) {

    return arr[arr.length - 1];

}


console.log(lastElement(tomb3));

