// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap
// paraméterként és a tömb legnagyobb számával tér vissza!
// Teszteld console.log-gal!  

function biggerNumber(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

var tombi = [3, 4, 6]
console.log(biggerNumber([1, 3, 4]));
console.log(biggerNumber(tombi));