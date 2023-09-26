// Írj egy függvényt, ami egy szám-tömböt kap paraméterül.
// A visszatérési értéke legyen egy tömb, amiben az eredeti tömb páros értékei vannak.

let tomb1 = [3, 5, 6, 8, 9, 1];

/*
evenArray = (array) => {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
*/

evenArray = (array) => {
    return array.filter(arrayItem => !(arrayItem % 2))
}

console.log(evenArray(tomb1));