// Írj egy osszeg() függvényt, ami egy két dimenziós tömböt kap paraméterül.
// Térjen vissza az összes elem összegével!

var param1 =
    [[1, 3, 6],
    [4, 2, 6],
    [6, 4, 3]];

var param2 =
    [[1, 2],
    [4, 5]];


osszeg = (matrix) => {
    let ossz = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            ossz = ossz + matrix[i][j];
        }
    }
    return ossz;
}

console.log(osszeg(param1));
console.log(osszeg(param2));