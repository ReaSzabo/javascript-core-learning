// Írj egy függvényt, amely a paraméretként kapott tömb utolsó elemével tér vissza.

var tomb = [1, 3, 5, 6];
var tomb2 = ["valami", "bármi", "akármi"];
var tomb3 = [true, false, true];

function last(tömbi) {
  return tömbi[tömbi.length - 1];
}

console.log(last(tomb))
console.log(last(tomb2))
console.log(last(tomb3))