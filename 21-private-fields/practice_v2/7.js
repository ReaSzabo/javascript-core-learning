// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap paraméterként
// és a tömb legkisebb számával tér vissza!
// Teszteld console.log-gal!  



minNumber = (numberArr) => {
    var min = 999999999999999999;

    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < min) {
            min = numberArr[i];
        }
    }

    return min;
}



let tombi = [4, -3, 255, 9, 0, -8, 1];


console.log(minNumber(tombi));
