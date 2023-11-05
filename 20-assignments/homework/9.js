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