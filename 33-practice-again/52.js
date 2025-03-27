// Hallottál már a Fibonacci számokról?
// 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Minden szám az előző 2 szám összegéből áll. (n1 + n2 = n3)
// Alább találsz egy algoritmust, amely kiírja az első 10 fibonacci számot.
// Írj egy függvényt, amely egy "n" nevű (szám) paramétert kap!
// A függvény egyesével logolja ki az első "n" fibonacci számot!


function getNthFibonacci(n) {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    } else {
        return getNthFibonacci(n - 1) + getNthFibonacci(n - 2);
    }
}

function logFirstNFibonacci(m) {
    for (let i = 1; i <= m; i++) {
        console.log(getNthFibonacci(i));
    }
}

logFirstNFibonacci(10);
