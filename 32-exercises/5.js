
// 1. feladat
// Adott egy tömb. 
// Add a tömbhöz a születési éved!
// Használd a push() metódust!
var fontosEvszamok = [1848, 1956, 1000, 1222];




// 2. feladat
// Adott egy tömb. 
// Ha a hossza nagyobb, mint 7, akkor töröld ki az utolsó elemét! ( pop() )



// 3. feladat
// Adott egy tömb. A várt vendégeket tartalmazza.
// A vendéglátónak megy a hasa, ezért nem akar egy vendéget sem fogadni.
// A vendéglistát tedd egyenlővé üres tömbbel!
var vendegLista = ["Sanyiék", "Pityujék", "Böbe", "Karcsika", "Béla bácsi", "muzsikus cigányok, akik 260 km-t utaztak"];




// 4. feladat
// Írd ki a konzolra, hogy ”Hello world!"




// 5. feladat
// Adott egy vendég neve.
// Köszönj neki, azaz írd ki "Szia, xy!" !
var nev = "Andika";

console.log("Szia, " + nev + "!");


// 6. feladat
// Írd ki egyesével a tömb elemeit! (for ciklus)
var nevek = ["Domcsi", "Csomag", "Era"];




// 7. feladat
// Adott 5 vendég neve.
// Köszönj nekik egyesével, azaz írd ki mindenki nevével "Szia, xy!" ! (for ciklus)
var vendegNevek = ["Doroti", "Papó", "Mama", "István", "Lili"];



// 8. feladat
// Adott 5 vendég neve.
// Köszönj nekik egyesével, kivéve Pistinek! 
// (Azaz csak akkor írd ki a konzolra, ha a for ciklus i-edig eleme nem egyenlő "Pisti"-val.)
var regiBanda = ["Bence", "Kóku", "Koncz", "Szabi", "Tünde,", "Pisti", "Gyurka"];




// 9. feladat
// Írd ki a tömb elemeinek kétszeresét!
var szamok = [1, 2, 3, 4, 5, 6, 8];




// 10. feladat
// Írd ki a tömb elemeinek összegét!
// Ez is bonyesz, szólj, ha beszéljük meg!
var osszeg = 0;
var szamok2 = [1, 5, 6, 8];

for (let i = 0; i < szamok2.length; i++) {
    osszeg = osszeg + szamok2[i];
}

console.log(osszeg);


// 11. feladat
// Írd ki a tömb olyan elemeit, amelyek nagyobbak, mint 5!
var szamok3 = [1, 2, 3, 4, 5, 6, 7];




// 12. feladat
// Írd ki a tömb olyan elemeit, amelyek kisebbek, mint 10!
var szamok4 = [-1, 20, 3, 40, -5, 6, 70];




// 13. feladat
// Írd ki a tömb olyan elemeit, amelyek pozitív egész számok vagy 0!
var szamok5 = [0, -10, 230, 13, -40, -5, 16, 7, 0];



// 14. feladat
// Írd ki a tömb olyan elemeit, amelyek negatív egész számok!
var szamok6 = [-3, -2, -1, 0, 1, 2, 3, 4];



// 15. feladat
// Írd ki az "limit" változó értéke alatti pozitív egész számokat! (egyesével)
var limit = 10; // 1, 2, 3, 4, 5, 6, 7, 8, 9

for (let i = limit; i >= 1; i--) {
    console.log(i);
}





// 16. feladat
// Adott egy szám.
// - ha pozitív, írd ki: "P"
// - ha negatív: "N"
// - ha 0, akkor "0"
var szam = 11;



// 17. feladat
// Adott néhány szám.
// Menj végig a tömbön egy for ciklussal.
// (Ezt úgy mondjuk, "járd be a tömböt"!)
// Minden szám esetében: 
// - ha pozitív, írd ki: "P"
// - ha negatív: "N" 
// - ha 0, akkor "0"
var szamok7 = [11, 0, -1, 2, 1234, -3, 4, 44, 0];

