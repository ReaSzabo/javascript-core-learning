// Írj egy függvényt, amely kiírja, hogy a paraméterként kapott szám páros vagy páratlan!

function evenOrOdd(numero) {
    if (numero == 0) {
        console.log("A szám 0");
    } else if (numero % 2 == 1) {
        console.log("A szám páratlan");
    } else {
        console.log("A szám páros");
    }
}

evenOrOdd(0)
evenOrOdd(1)
evenOrOdd(2)