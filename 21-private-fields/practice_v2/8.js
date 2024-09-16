// Írj egy függvényt, ami egy számokat tartalmazó tömböt kap
// paraméterként és a tömb legnagyobb számával tér vissza!
// Teszteld console.log-gal!  


maxNumber = (numberArr) => {

    var max = -999999999999999;

    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > max) {
            max = numberArr[i];
        }
    }

    return max;
}


console.log(maxNumber(tombi));