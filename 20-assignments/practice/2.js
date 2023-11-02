// Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function check(x, y) {
    if ((x >= 0 && y < 0) || (x < 0 && y >= 0)) {
        return true;
    } else {
        return false;
    }
}

check = (x, y) => {
    if ((x >= 0 && y < 0) || (x < 0 && y >= 0)) {
        return true;
    } else {
        return false;
    }
}

check = (x, y) => {
    return (x >= 0 && y < 0) || (x < 0 && y >= 0) ? true : false;
}

check = (x, y) => {
    return (x >= 0 && y < 0) || (x < 0 && y >= 0);
}

check = (x, y) => {
    return x >= 0 && y < 0 || x < 0 && y >= 0;
}

check = (x, y) => (x >= 0 && y < 0 || x < 0 && y >= 0);


console.log(check(6, -8));
console.log(check(0, 0));
console.log(check(1, 0));
console.log(check(0, 1));
console.log(check(0, -1));
console.log(check(-100, 100));