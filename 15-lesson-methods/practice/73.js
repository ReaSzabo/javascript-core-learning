// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap paraméterként
// és a tömb legkisebb számával tér vissza!
// Teszteld console.log-gal!  

function smallestNumber(array) {
    var min = 10000000;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

var tombi = [3, 4, 6]
console.log(smallestNumber([1, 3, 4]));
console.log(smallestNumber(tombi));