// Hallottál már a Fibonacci számokról?
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Minden szám az előző 2 szám összegéből áll. (n1 + n2 = n3)
// Alább találsz egy algoritmust, amely kiírja az első 10 fibonacci számot.
// Írj egy függvényt, amely egy "n" nevű (szám) paramétert kap!
// A függvény írja ki az első "n" fibonacci számot!

var n1 = 1;
var n2 = 2;
var nextFibonacci;

/* 
for(var i = 0; i < 10; i++) {
  console.log(n1);
  nextFibonacci = n1 + n2;
  n1 = n2;
  n2 = nextFibonacci;
} 
*/
