/*let tombi = [3, 54, 9, 12, 6, 20, 5, 7, 45];
let sum = 99;

findSubArr = (arr, n) => {
    let subArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            if (arr[i] + arr[j] == n) {
                subArr = [arr[i], arr[j]];
            }
        }
    }

    return subArr;
}

console.log(findSubArr(tombi, sum));*/

let tombi = [123, 3, 54, 9, 12, 6, 20, 5, 7, 45];



/*for (let i = 0; i < tombi.length - 1; i++) {
    for (let j = 0; j < tombi.length - i - 1; j++) {
        if (tombi[j] > tombi[j + 1]) {
            [tombi[j], tombi[j + 1]] = [tombi[j + 1], tombi[j]];
        }
    }
}

console.log(tombi);*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j;

        // Második for ciklussal megvalósított beszúrás
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(tombi));

