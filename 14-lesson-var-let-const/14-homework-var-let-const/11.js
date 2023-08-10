// Írj egy osszeg() függvényt, ami egy két dimenziós tömböt kap paraméterül.
// Térj vissza a tömb utolsó sorának elemeinek összegével!

var param1 =
    [[1, 3, 6],
    [4, 2, 6],
    [6, 4, 3]];

var param2 =
    [[1, 2],
    [4, 5]];


osszeg = (tomb) => {
    let ossz = 0;
    for (let i = 0; i < tomb.length; i++) {
        ossz = tomb[tomb.length - 1][i] + ossz;
    }
    return ossz;
}

console.log(osszeg(param1));
console.log(osszeg(param2));