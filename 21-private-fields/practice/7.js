// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap paraméterként
// és a tömb legkisebb számával tér vissza!
// Teszteld console.log-gal!  

let tombi = [1, 3, 6, 0, 9, 36, -3];

function smallestNumber(arr) {

    let min = Infinity;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];
        }
    }

    return min;
}


console.log(smallestNumber(tombi)); 