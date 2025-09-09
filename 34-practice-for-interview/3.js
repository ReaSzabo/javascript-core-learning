/*factorial1 = (x) => {
    if (x == 0) {
        return 0;
    }

    let result = 1;

    for (let i = 2; i <= x; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial1(4));
console.log(factorial1(1));
console.log(factorial1(5));

factorial2 = (n) => {

    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    return n * factorial2(n - 1);
}

console.log(factorial2(4));
console.log(factorial2(1));
console.log(factorial2(5));*/


/*getNthFib = (n) => {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    }

    return getNthFib(n - 1) + getNthFib(n - 2);
}

console.log(getNthFib(3));
console.log(getNthFib(4));

logFirstNFib = (m) => {

    for (let i = 1; i <= m; i++) {
        console.log(getNthFib(i));
    }
}

logFirstNFib(5);
logFirstNFib(2);*/


let tombi = [123, 3, 54, 9, 12, 6, 20, 5, 7, 45];


/*insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort(tombi));*/


/*bubbleSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}


console.log(bubbleSort(tombi));*/


bubble = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubble(tombi));
