// Írj egy függvényt, ami egy szám-tömböt kap paraméterül.
// A visszatérési értéke legyen egy tömb, amiben az eredeti tömb páros értékei vannak.

let tomb1 = [3, 5, 6, 8, 9, 1]

evenArray = (tombi) => {
    var returnTombi = [];
    for (i = 0; i < tombi.length; i++) {
        if (tombi[i] % 2 == 0) {
            returnTombi.push(tombi[i]);
        }
    }
    return returnTombi;
}

console.log(evenArray(tomb1))