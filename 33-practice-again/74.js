// Írj egy függvényt, ami egy szám-tömböt kap paraméterül.
// A visszatérési értéke legyen egy tömb, amiben az eredeti tömb páros értékei vannak.

evenArr = (arr) => {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

let tombi = [1, 2, 3, 4, 5, 6, 7];

console.log(evenArr(tombi));