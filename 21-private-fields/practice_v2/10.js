// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy páros vagy páratlan!

evenOrOdd = (n) => {
    if (n == 0) {
        console.log("A kapott szám a nulla.")
    } else if (n % 2 == 0) {
        console.log("A kapott szám a páros.");
    } else {
        console.log("A kapott szám páratlan.")
    }
}


evenOrOdd(-5);
evenOrOdd(0);
evenOrOdd(89);
evenOrOdd(1000);