// Írj egy függvényt, ami egy szám-tömböt kap paraméterül.
// A visszatérési értéke legyen egy tömb, amiben az eredeti tömb páros értékei vannak.

let tomb1 = [3, 5, 6, 8, 9, 1]

function tombi(numberArray) {
    let numberArray2 = []
    for (i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0) {
            numberArray2.push(numberArray[i]);
        }
    }
    return numberArray2;
}

console.log(tombi(tomb1))