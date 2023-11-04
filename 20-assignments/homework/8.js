// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  


checkStrict = (a, b, c) => {

    if (a < b && b < c) {

        return "strict";

    } else if (a <= b && b <= c) {

        return "soft";

    } else {

        return "not increasing sequence"
    }
}


console.log(checkStrict(33, 33, 65));
console.log(checkStrict(33, 65, 33));
console.log(checkStrict(33, 34, 35));