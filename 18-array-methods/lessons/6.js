// SOME
// Megvizsgálja a tömb elemeit, hogy valamelyik megfelel-e a feltételnek, majd visszaad egy boolean értéket.

var array3 = [1, 2, 3, 4].some((element) => element % 3 == 0) // true
console.log(array3);



// EVERY
// Megvizsgálja a tömb elemeit, hogy mind megfelel-e a feltételnek, majd visszaad egy boolean értéket.

var array4 = [1, 2, 3, 4].every((element) => element % 3 == 0) // false
console.log(array4);