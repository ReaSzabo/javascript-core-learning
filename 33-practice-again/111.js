// A map() egy array metódus.
// Csinál valamit a tömb elemeivel, majd visszaadja az új tömböt.
// A paramétere egy függvény. Ez hajtja végre a tömb manipulációt.
// Ez természetesen lehet hagyományos function vagy arrow function is.

var array1 = [1, 2, 3, 4].map(
    function (element) {
        return element * 3;
    }
);
console.log(array1); // [3, 6, 9, 12]


// Mit írnak ki a console.log-ok?

var array2 = [1, 2, 3, 4].map((element) => element * 2); // 2, 4, 6, 8
console.log(array2);


var array3 = [1, 2, 3, 4].map(element => element + 1); // 2, 3, 4, 5
console.log(array3);

var array4 = [3, 4, 5];

array4 = array4.map(elem => elem * 0); // 0, 0, 0

console.log(array4);