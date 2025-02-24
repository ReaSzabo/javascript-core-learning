/*
Írjunk függvényt, amely kiírja az összes "n" alatti természetes számot! 
(0, 1, 2, 3, 4, 5 ...)
"n" a függvény paramétere legyen.
*/

naturalNumbersBelow = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

naturalNumbersBelow(16);