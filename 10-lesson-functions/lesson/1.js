///////// Function-ök
// Mi is az a function (függvény)?


// Egy function csinál valamit. Azt amit mi akarunk, amire kitaláltuk.

// Először deklaráljuk, majd amikor akarjuk, meghívhatjuk a kódban.

console.log("Excercise #1");

function andikaLog() {
  console.log("Szabó Andrea 1995-ben született egy téli napon, Kazincbarcikán. Az egyetemi évei alatt megismerkedett későbbi férjével.");
}


// Meghívás:

andikaLog(); // Akárhányszor meghívhatjuk a függvényt, és logolni fog.

andikaLog();
andikaLog();
andikaLog();
andikaLog();
andikaLog();


// Nézzük meg miből épül fel egy function:

// 1. A function kulcsszó jelzi, hogy függvényt készítünk.
// 2. Adunk neki egy nevet, ami jelzi más programozóknak, hogy mit csinál a függvény. Esetünkben logol.
// 3. A kerek zárójelek szintén a függvény részei a neve után.
// 4. A kapcsos zárójelek közé bármilyen kódrészletet írhatunk, akár nagyon hosszút is. 
//    Ez fog végrehajtódni minden egyes függvényhívásnál.


// De mire jók?
// Akkor készítünk egy függvényt, ha valamit többször is akarunk használni és nem akarjuk a kódot másolni.
// Pl. itt egy nagyon hosszú stringet kellene minden egyes helyre bemásolni, de le tudjuk rövíteni egy 4 karakter hosszú függvénynévvel (andikaLog).

