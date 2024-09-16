

console.log("Exercise #4");
// Write a program to log all even numbers between 0 to 11. (even = páros)

for (let i = 0; i < 11; i = i + 2) {
    console.log(i);
}


console.log("Exercise #5");
// Write a program to log all odd numbers between 0 to 7. (odd = páratlan)




// Új típusú feladat
// Adjuk össze a számokat 1-től 5-ig (1+2+3+4+5)

// Így néz ki for ciklus nélkül

var osszeg = 0; // Először deklaráljuk a változót.
osszeg = osszeg + 1; // Utána hozzáadunk egyet az összeg aktuális értékéhez.
osszeg = osszeg + 2; // Utána hozzáadunk kettőt az összeg aktuális értékéhez.
osszeg = osszeg + 3; // és így tovább...
osszeg = osszeg + 4;
osszeg = osszeg + 5;
console.log("Összeg: " + osszeg); // Kiírjuk az összeget


// Így néz ki for ciklussal

var osszeg = 0; // Először deklaráljuk a változót és 0 értéket adunk neki.
for (var i = 1; i <= 5; i = i + 1) {
    osszeg = osszeg + i; // Utána hozzáadunk i-t az összeg aktuális értékéhez.
}
console.log("Összeg2: " + osszeg); // Kiírjuk az összeget




console.log("Exercise #6");
// Write a program to find sum of all natural numbers between 1 to 10.
// (Az 1 és 10 közötti természetes számok összege.)



console.log("Exercise #7");
// Write a program to find sum of all even numbers between 1 to 10.



console.log("Exercise #8");
// Write a program to find sum of all odd numbers between 10 to 100. 


console.log("Exercise #9");
// Írd ki a három többszöröseit 30 alatt! (3, 6, 9, 12, 15 ...)
// (Egy szám a 3 többszöröse, ha elosztva 3-mal a maradék 0.)



console.log("Exercise #10");
// Írd ki 12-szer a csillag karaktert külön sorokba!


console.log("Exercise #11");
// Írd ki a tömb azon elemeit, amelyek páratlanok!
var tombocske1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 200];
var tombocske2 = [];

for (let i = 0; i < tombocske1.length; i++) {
    if (tombocske1[i] % 2 == 1) {
        console.log(tombocske1[i]);
    }
};

console.log(tombocske2);




console.log("Exercise #12");
// Írd ki a tömb azon elemeit, amelyek párosak!
var tombocske2 = [200, 300, 333, 411, 12, 2, 32, 33, 41, 39, 10];


console.log("Exercise #13");
// Írd ki a tömb első és utolsó elemét!
var tombocske3 = [-1, 200, 300, 333, 411, 334];







console.log("Exercise #14");
// Írd ki a tömb minden második elemét!
var tombocske4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];




console.log("Exercise #15");
// Írd ki a tömb azon elemeit, amelyek nagyobbak, mint 5!
var szamok = [3, 4, 1, 5, 7, 1, 0, 2];



