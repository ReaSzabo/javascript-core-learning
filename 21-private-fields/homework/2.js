function faktorialis(number) {
    if (number == 1) {
        return 1;
    } else {
        return number * faktorialis(number - 1);
    }
}

console.log(faktorialis(4));
console.log(faktorialis(3)); // 6
console.log(faktorialis(2)); // 2
console.log(faktorialis(1)); // 1

for (i = 0; i < 10; i++) {
    console.log(faktorialis(i));
}

// 4 * 3 * 2 * 1