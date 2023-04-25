console.log("Exercise 7");
/*
ELTE feladat

Írjunk egy függvényt, amely kiszámítja és kiírja a téglalap terü-
letét és kerületét!
(A paraméterek az "a" és "b" oldal.)
*/

function kerTer(a, b) {
    console.log(`Kerület: ${2 * (a + b)}`)
    console.log(`Terület: ${a * b}`)
}

kerTer(5, 2)