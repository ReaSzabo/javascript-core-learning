// Írj egy függvényt, amely kiírja, hogy a paraméterként kapott szám páros vagy páratlan!

function isParos(number) {
    if (number == 0) {
        console.log("A szám nulla");
    } else if (number % 2 == 0) {
        console.log("A szám páros");
    } else {
        console.log("A szám páratlan");
    }
}

isParos(0)