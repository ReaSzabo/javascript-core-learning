// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy páros vagy páratlan!

function evenOrOdd(n) {
    if (n % 2 == 0) {
        console.log(n, "A szám páros");
    } else if (n % 2 == 1) {
        console.log(n, "A szám páratlan");
    }
}

evenOrOdd(5)
evenOrOdd(18)
evenOrOdd(0)
evenOrOdd(3)