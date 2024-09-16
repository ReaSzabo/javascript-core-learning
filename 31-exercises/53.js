// A függvény írja ki az első n-edik Fibonacci számot

var n1 = 1;
var n2 = 2;
var nextFibonacci;

for (var i = 0; i < 10; i++) {
    console.log(n1);
    nextFibonacci = n1 + n2;
    n1 = n2;
    n2 = nextFibonacci;
}