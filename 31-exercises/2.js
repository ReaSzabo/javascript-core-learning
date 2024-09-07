
// Példa a string vizsgálatára if feltételként: if(a == "szoveg")

// 1. feladat
// Deklarálj egy változót "szin1" néven.
// Add neki az alábbi értéket: "barna"
// Egy if feltételes utasításban írd ki, hogy "kaka színe", ha a szin1 változó értéke barna.
var szin1 = "barna";

if (szin1 == "barna") {
    console.log("kaka színe " + szin1);
};



// 2. feladat
// Ha a matekjegy jobb, írd ki "Reálos vagyok", egyébként: "A humán tárgyak rédekelnek."


var nyelvtanJegy = 4;
var matekJegy = 2;

if (nyelvtanJegy < matekJegy) {
    console.log("Reálos vagyok");
} else {
    console.log("A humán tárgyak érdekelnek");
};



// 3. feladat
// Ha a tanuló rajz, ének és tesi jegye 5-ös, írd ki: "Legalább a szar tárgyak jól mennek."

var rajzJegy = 5;
var enekJegy = 5;
var tesiJegy = 5;



// 4. feladat 
// Ha a tanuló 3-ast vagy 4-es kapott irodalomból, akkor írd ki: "Közepes vagyok"
// vagy: || (alt+W)
var irodalomJegy = 4;




// 5. feladat 
// Ha a tanuló legalább 4-est kapott németből és angolból, akkor írd ki: "Mennek a nyelvek.", egyébként: "Még gyakorolni kell.".
var nemetJegy = 5;
var angolJegy = 3;




// 6. feladat
// Ha a tanuló vonalzója 10 cm alatti, akkor írd ki: "Csepp", egyébként "Jó lesz."
var hossz = 11;




// ÚJ INFÓ: az if-eket halmozni is lehet, ilyenkor az else után írunk még egy if-et és egy feltételt: 
//... else if (feltétel) { ....
// lásd:

var franciaJegy = 1;


// esetünkben szerepel 
// - 1db sima IF
// - 4db ELSE IF


// 7. feladat
// Egészítsd ki a feladatot úgy, hogy kezelje a hiányzó "Elégtelen" esetet.
// Ne az előző példában látott ELSE IF-et használd, hanem csak egy ELSE-t.

var olaszJegy = 1;
if (olaszJegy == 5) {
    console.log("Jeles");
} else if (olaszJegy == 4) {
    console.log("Jó");
} else if (olaszJegy == 3) {
    console.log("Közepes");
} else if (olaszJegy == 2) {
    console.log("Elégséges");
} else {
    console.log("Elégtelen");
}
// Ide írd a kódrészletet.



// 8. feladat
// Adott egy nap nevű változó. Ha az értéke 1, írd ki "Hétfő", ha 2: "Kedd", s rendre így tovább 7-ig.
var nap = 1;





// 9. feladat
// Mit ír ki a program?
// Ide írd a válaszod: 

// var kaja = "krumplisteszta";
//
// if (kaja == "krumplis" + "teszta") {
//     console.log("Hami");
// }


// 10. feladat
// Mit ír ki a program?
// Ide írd a válaszod: 

// var szam1 = 32;
// var szam2 = 3;
// var szam3 = 137;
//
// if (szam1 == 30 + 2 && szam2 < 5 - 1 && szam3 != 137 * 1) {
//     console.log("Szevasz");
// } else {
//     console.log("Hali");
// }


// 11. feladat
// Mi a hiba?
// Ide írd a válaszod: 

// var szam4 = 4;
//
// if (szam1 = 4) {
//     console.log("Ez a szám egy 4-es.");
// } 


var koncz = "egy csicska"

if (koncz == "egy csicska") {
    console.log("Ide nézz!")
};
