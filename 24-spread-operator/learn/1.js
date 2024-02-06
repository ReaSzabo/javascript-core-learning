// Spread operator
// ...valami

function sum(a, b, c) {
    console.log(a + b + c);
}

sum(5, 5, 5);

let array = [1, 2, 3];

sum(...array); // sum(1, 2, 3);