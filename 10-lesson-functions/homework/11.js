console.log("Exercise 11");
/*
ELTE feladat

Írjunk egy függvényt, amely kiszámolja és kiírja, hogy tetszőleges US gallon víz hány kg tömegű! 
(1 gallon =  3,78541 l, 1 l = 0,998  kg)
A paraméter egy gallon mennyiséget jelöl, adj neki tetszőleges nevet.
pl. gallon param: 1, logolni: 3.77783918 kg
*/

function gallonToKg(gallon) {
    console.log(`Kg-ban: ${gallon * 3.78541 * 0.998}`);
}

gallonToKg(1)