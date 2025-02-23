// A függvény írja ki az első n-edik Fibonacci számot

fibonacci = (n) => {
    var n1 = 1;
    var n2 = 2;
    var nextFibonacci;

    for (var i = 0; i < n; i++) {
        if (i == n - 1) {
            console.log(n1);
        }
        nextFibonacci = n1 + n2;
        n1 = n2;
        n2 = nextFibonacci;
    }

}

fibonacci(3);