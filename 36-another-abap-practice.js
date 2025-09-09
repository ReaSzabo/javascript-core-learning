let diagonalSumFun = (n) => {

    let pyramidArray = [[1, 2]];
    let subArray = [];
    let diagonalSum = 0;


    for (let i = 1; i < 10; i++) {
        subArray = [];

        subArray[0] = 1;

        for (let j = 1; j < i + 1; j++) {

            subArray[j] = pyramidArray[i - 1][j] + pyramidArray[i - 1][j - 1];
        }
        subArray.push(2);

        pyramidArray.push(subArray);

    }

    if (n == 0) {
        console.log("error");
    } else if (n == 1) {
        console.log(1)
    } else if (n % 2 == 0) {
        for (let t = n; t > n / 2 - 1; t--) {

            diagonalSum = diagonalSum + pyramidArray[t - 1][n - t];
        }
        console.log(diagonalSum);
    } else {
        for (let t = n; t > n / 2; t--) {

            diagonalSum = diagonalSum + pyramidArray[t - 1][n - t];
        }
        console.log(diagonalSum);

    }
}

diagonalSumFun(10);
diagonalSumFun(3);
diagonalSumFun(0);
diagonalSumFun(1);
