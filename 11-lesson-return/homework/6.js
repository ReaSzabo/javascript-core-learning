console.log("Exercise 2");
// Írj egy függvényt, ami 3 szám paramétert kap és a legnagyobb számmal tér vissza!
// Teszteld console.log-gal!  

function bigger(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else {
        return n3;
    }
}


console.log(bigger(100, 200, 30))