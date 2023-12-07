// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. 

// Írj egy függvényt, ami kap 2 pozitív egész szám paramétert.
// Ha az egyikük (nem mindkettő) a 7 vagy a 11 többszöröse, akkor térj vissza true-val, egyébként false-szal.

a = 11
b = 7
false

a = 7
b = 3
true

a = 12
b = 11
true

check = (a, b) => {
    if ((a % 7 == 0 && (b % 7 != 0 && b % 11 != 0)) || (a % 11 == 0 && (b % 7 != 0 && b % 11 != 0)) ||
        (b % 7 == 0 && (a % 7 != 0 && a % 11 != 0)) || (b % 11 == 0 && (a % 7 != 0 && a % 11 != 0))) {
        return true
    } else {
        return false;
    }
}

console.log(check(1, 7));
console.log(check(7, 11));
console.log(check(7, 7));
console.log(check(7, 1));


function isMultipleOf7Or11(num) {
    return (num % 7 === 0) || (num % 11 === 0);
}

function checkMultiples(num1, num2) {
    const isMultiple1 = isMultipleOf7Or11(num1);
    const isMultiple2 = isMultipleOf7Or11(num2);

    if ((isMultiple1 || isMultiple2) && !(isMultiple1 && isMultiple2)) {
        console.log("Exactly one of the numbers is a multiple of 7 or 11.");
    } else {
        console.log("Either both numbers are multiples or none is a multiple of 7 or 11.");
    }
}