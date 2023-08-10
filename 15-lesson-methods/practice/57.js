/*

Írjunk egy függvényt, amely kiszámolja és kiírja, hogy tetszőleges gallon víz hány kg tömegű! 
1 gallon =  3,78541 liter 
1 liter = 0,998  kg
A paraméter egy gallon mennyiséget jelöl, adj neki tetszőleges nevet.
pl. 
gallon paraméter: 1
ezt logolja ki: 3.77783918 kg
*/

function gallonToKg(x) {
    console.log(x * 3.78541 * 0.998);
}

gallonToKg(1);