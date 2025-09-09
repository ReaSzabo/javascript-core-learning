let pyramidArray = [[1, 2]];
let subArray = [];
let firstNum = 1;
let lastNum = 2;
let n = 10;
let diagonalSum = 0;


if (n = 1) {
    return firstNum;
} else {
    
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < i + 1; j++) {

            subArray[j] = firstNum;
            subArray[j + 1] = pyramidArray[i - 1][j - 1] + pyramidArray[i - 1][j - 1];
        }

        pyramidArray.push(subArray);

        subArray = [];
    }

    console.log(pyramidArray);

    for (let k = pyramidArray.length - 1; k > 0; k--) {

        for (let h = pyramidArray[k].length - 1; h > 0; h--) {

            diagonalSum = diagonalSum + pyramidArray[k][h].length - n;
        }
    }

}

