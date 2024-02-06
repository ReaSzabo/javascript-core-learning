// Write a program to generate a list of prime numbers up to a given limit.


function prime(x) {

    let controller = true;

    for (let i = 2; i < x; i++) {

        if (x % i == 0) {

            controller = false;
        }
    }

    return controller;
}

function primeGenerator(n) {

    let counter = 0;

    for (let i = 2; i < Infinity; i++) {

        if (prime(i)) {

            console.log(i);

            counter++;
        }

        if (counter == n) {

            break;
        }
    }


}

console.log(prime(7));
console.log(prime(10));
primeGenerator(5);