// Írj egy osszeg() függvényt, ami egy két dimenziós tömböt kap paraméterül.
// Térj vissza a tömb utolsó sorának (utolsó résztömb) elemeinek összegével!

const param1 =
    [[1, 3, 6],
    [4, 2, 6],
    [6, 4, 3]];

osszeg = (matr) => {
    let sum = 0;
    for (let i = 0; i < matr.length; i++) {
        if (matr[i] == matr[matr.length - 1]) {
            for (let j = 0; j < matr[i].length; j++) {
                sum = sum + matr[i][j];
            }
        }
    }
    return sum;
}

console.log(osszeg(param1));