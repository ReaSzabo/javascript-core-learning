// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy páros vagy páratlan!


function evenOrOdd(n) {

    if (n % 2 == 0 && n != 0) {

        console.log("A szám páros.");
    } else if (n == 0) {

        console.log("A szám a nulla.")
    } else {

        console.log("A szám páratlan.")
    }
}

evenOrOdd(2);
evenOrOdd(-3);
evenOrOdd(0);
evenOrOdd(3);
evenOrOdd(14);