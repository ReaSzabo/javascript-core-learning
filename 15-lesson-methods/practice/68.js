// Írj egy függvényt, amely a paraméretként kapott tömb utolsó elemével tér vissza.
var tomb = [1, 3, 5, 6];
var tomb2 = ["valami", "bármi", "akármi"];
var tomb3 = [true, false, true];

function lastElement(tombi) {
    //console.log(tombi[tombi.length - 1]);
    var last;
    for (i = 0; i < tombi.length; i++) {
        last = tombi[i];
    }
    console.log(last)
}

lastElement(tomb)
lastElement(tomb2)
lastElement(tomb3)