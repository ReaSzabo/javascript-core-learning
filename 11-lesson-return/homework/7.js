// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap paraméterként
// és a tömb legkisebb számával tér vissza!
// Teszteld console.log-gal!  

function minimum(tombi) {
    let minike = 9999999999;
    for (let i = 0; i < tombi.length; i++) {
        if (tombi[i] < minike) {
            minike = tombi[i]
        }
    }
    return minike;
}

console.log(minimum([-2, 4, 7, 0]))