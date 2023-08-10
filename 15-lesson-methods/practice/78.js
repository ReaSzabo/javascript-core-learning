// Írj egy levonas() nevű függvényt, ami egy egyenleg nevű számot kap paraméterként!
// A függvény vonjon le 5000Ft-t az egyenlegből és térjen vissza az 
// aktualizált az egyenleggel!
// Teszteld console.log-gal!  

function levonas(egyenleg) {
    let x = egyenleg;
    x = x - 5000;
    return x;
}
console.log(levonas(10000));