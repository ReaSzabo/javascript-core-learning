// Write a function to generate the nth Fibonacci number. 


function getNthFibo(n) {

    if (n == 1) {

        return 0;
    } else if (n == 2) {

        return 1;
    } else {

        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}

function logFirstNFibonacci(m) {

    for (let i = 1; i <= m; i++) {

        console.log(getNthFibo(i));
    }
}

logFirstNFibonacci(3);
