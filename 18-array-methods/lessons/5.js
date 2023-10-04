// FILTER
// Kiszűri a tömb bizonyos elemeit, majd visszaadja az új tömböt.


var array1 = [1, 2, 3, 4].filter(
    function (element) {
        return element % 2 == 0;
    }
)
console.log(array1); // [2, 4]


var array2 = [1, 2, 3, 4].filter((element) => element % 2 == 1);
console.log(array2); // [1, 3]


var array3 = [1, 2, 3, 4].filter((element) => element > 2);
console.log(array3); // [3, 4]
