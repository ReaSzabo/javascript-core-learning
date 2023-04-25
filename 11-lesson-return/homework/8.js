console.log("Exercise 4");
// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap
// paraméterként és a tömb legnagyobb számával tér vissza!
// Teszteld console.log-gal!  

function getBigger(tombi) {
    let bigi = 0;
    for (let i = 0; i < tombi.length; i++) {
        if (tombi[i] > bigi) {
            bigi = tombi[i];
        }
    }
    return bigi;
}
console.log(getBigger([3, 5, 8, 2, 4]))