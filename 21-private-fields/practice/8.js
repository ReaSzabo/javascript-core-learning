// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap
// paraméterként és a tömb legnagyobb számával tér vissza!
// Teszteld console.log-gal!  

let tombi = [-5, -14, -1, -33];


function largestNumber(arr) {

    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
        }
    }

    return max;
}


console.log(largestNumber(tombi));