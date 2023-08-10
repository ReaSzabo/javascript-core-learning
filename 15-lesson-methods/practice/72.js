// Írj egy függvényt, ami 3 szám paramétert kap és a legnagyobb számmal tér vissza!
// Teszteld console.log-gal!  

function biggerNumber(x, y, z) {

    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    }
    return z;

    // return x > y && x > z ? x : (y > x && y > z ? y : z)

}

console.log(biggerNumber(66, 77, 8));