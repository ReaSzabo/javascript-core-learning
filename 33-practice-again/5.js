
// 1. feladat
// Adott egy tömb. 
// Add a tömbhöz a születési éved!
// Használd a push() metódust!
let fontosEvszamok = [1848, 1956, 1000, 1222];

fontosEvszamok.push(2001);



// 2. feladat
// Adott egy tömb. 
// Ha a hossza nagyobb, mint 7, akkor töröld ki az utolsó elemét! ( pop() )
let fontosEvszamok2 = [1848, 1956, 1000, 1222, 1148, 1156, 1100, 1122];

if (fontosEvszamok2.length > 7) {
    fontosEvszamok2.pop();
}


// 3. feladat
// Adott egy tömb. A várt vendégeket tartalmazza.
// A vendéglátónak megy a hasa, ezért nem akar egy vendéget sem fogadni.
// A vendéglistát tedd egyenlővé üres tömbbel!
let vendegLista = ["Sanyiék", "Pityujék", "Böbe", "Karcsika", "Béla bácsi", "muzsikus cigányok, akik 260 km-t utaztak"];


vendegLista = [];


// 4. feladat
// Írd ki a konzolra, hogy ”Hello world!"

console.log("Hello world!");


// 5. feladat
// Adott egy vendég neve.
// Köszönj neki, azaz írd ki "Szia, xy!" !
const nev = "Andika";

console.log("Szia, " + nev + "!");
console.log(`Szia, ${nev}!`);


// 6. feladat
// Írd ki egyesével a tömb elemeit! (for ciklus)
const nevek = ["Domcsi", "Csomag", "Era"];


for (let i = 0; i < nevek.length; i++) {
    console.log(nevek[i]);
}

nevek.forEach(element => {
    console.log(element);
});


// 8. feladat
// Adott 5 vendég neve.
// Köszönj nekik egyesével ("Szia, [név]!"), kivéve Pistinek! 
// (Azaz csak akkor írd ki a konzolra, ha a for ciklus i-edig eleme nem egyenlő "Pisti"-val.)
const regiBanda = ["Bence", "Kóku", "Koncz", "Szabi", "Tünde", "Pisti", "Gyurka"];


for (let i = 0; i < regiBanda.length; i++) {
    if (regiBanda[i] != "Pisti") {
        console.log(`Szia, ${regiBanda[i]}!`);
    }
}

regiBanda.forEach(element => {
    if (element != "Pisti") {
        console.log(`Szia, ${element}!`);
    }
});




// 9. feladat
// Írd ki a tömb elemeinek kétszeresét!
const szamok = [1, 2, 3, 4, 5, 6, 8];

for (let i = 0; i < szamok.length; i++) {
    console.log(szamok[i] * 2);
}

szamok.forEach(element => {
    console.log(element * 2);
});


// 10. feladat
// Írd ki a tömb elemeinek összegét!
let osszeg1 = 0;
const szamok2 = [1, 5, 6, 8];


for (let i = 0; i < szamok2.length; i++) {
    osszeg1 = osszeg1 + szamok2[i];
}

console.log(osszeg1);


let osszeg2 = 0;

szamok2.forEach(element => {
    osszeg2 = osszeg2 + element;
});

console.log(osszeg2);


// 11. feladat
// Írd ki a tömb olyan elemeit, amelyek nagyobbak, mint 5!
const szamok3 = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < szamok3.length; i++) {
    if (szamok3[i] > 5) {
        console.log(szamok3[i]);
    }
}

szamok3.forEach(element => {
    if (element > 5) {
        console.log(element);
    }
});


// 12. feladat
// Írd ki a tömb olyan elemeit, amelyek kisebbek, mint 10!
const szamok4 = [-1, 20, 3, 40, -5, 6, 70];


for (let i = 0; i < szamok4.length; i++) {
    if (szamok4[i] < 10) {
        console.log(szamok4[i]);
    }
}

szamok4.forEach(element => {
    if (element < 10) {
        console.log(element);
    }
});


// 13. feladat
// Írd ki a tömb olyan elemeit, amelyek pozitív egész számok vagy 0!
const szamok5 = [0, -10, 230, 13, -40, -5, 16, 7, 0];

for (let i = 0; i < szamok5.length; i++) {
    if (szamok5[i] >= 0) {
        console.log(szamok5[i]);
    }
}

szamok5.forEach(element => {
    if (element >= 0) {
        console.log(element);
    }
});


// 14. feladat
// Írd ki a tömb olyan elemeit, amelyek negatív egész számok!
const szamok6 = [-3, -2, -1, 0, 1, 2, 3, 4];

for (let i = 0; i < szamok6.length; i++) {
    if (szamok6[i] < 0) {
        console.log(szamok5[i]);
    }
}

szamok6.forEach(element => {
    if (element < 0) {
        console.log(element);
    }
});


// 15. feladat
// Írd ki az "limit" változó értéke alatti pozitív egész számokat! (egyesével)
const limit = 10; // 1, 2, 3, 4, 5, 6, 7, 8, 9

for (let i = 1; i < limit; i++) {
    console.log(i);
}



// 16. feladat
// Adott egy szám.
// - ha pozitív, írd ki: "P"
// - ha negatív: "N"
// - ha 0, akkor "0"
const szam = 11;

if (szam == 0) {
    console.log("0");
} else if (szam < 0) {
    console.log("N");
} else {
    console.log("P");
}



// 17. feladat
// Adott néhány szám.
// Menj végig a tömbön egy for ciklussal.
// (Ezt úgy mondjuk, "járd be a tömböt"!)
// Minden szám esetében: 
// - ha pozitív, írd ki: "P"
// - ha negatív: "N" 
// - ha 0, akkor "0"
const szamok7 = [11, 0, -1, 2, 1234, -3, 4, 44, 0];

for (let i = 0; i < szamok7.length; i++) {
    if (szamok7[i] == 0) {
        console.log("0");
    } else if (szamok7[i] < 0) {
        console.log("N");
    } else {
        console.log("P");
    }
}