console.log("Exercise 8");
// Írj egy levonas() nevű függvényt, ami egy egyenleg nevű számot kap paraméterként!
// A függvény vonjon le 5000Ft-t az egyenlegből és térjen vissza az 
// aktualizált az egyenleggel!
// Teszteld console.log-gal!  

function levonas(egyenleg) {
    return egyenleg - 5000
}

var ujegyenleg = levonas(10000);

console.log(ujegyenleg)