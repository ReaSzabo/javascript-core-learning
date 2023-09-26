function sort(array) {

    for (i = 0; i < array.length - 1; i++) {

        for (k = 0; k < array.length - 1; k++) {

            if (array[k] > array[k + 1]) {

                b = array[k];

                array[k] = array[k + 1];
                array[k + 1] = b;
            }
        }

    }

    return array;
}

var testArray = [10, 3, 2, 6, 9];
var testArray2 = [11, 55, 3, 22];
var testArray3 = [1000, 500, 3000, 220];

console.log(sort(testArray));
console.log(sort(testArray2));
console.log(sort(testArray3));