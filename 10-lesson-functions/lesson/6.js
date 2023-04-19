// Akkor készítünk egy függvényt, ha valamit többször is akarunk használni és nem akarjuk a kódot másolni.

// Pl. több feladatban is meg kell vizsgálni, hogy egy szó tartalmazza-e az "Andika" substringet.

///// Hagyományos megoldás

console.log("Excercise #6");

// Vizsgáld meg, hogy a változó tartalmazza-e az "Andika" substringet.
var mondat = "Andika eszik";

if (mondat.includes("Andika")) {
  console.log(mondat + ": tartalmazza az Andika szót");
} else {
  console.log(mondat + ": nem tartalmazza az Andika szót");
}

console.log("Excercise #7");
// Írd ki, hogy a tömb elemei tartalmazzák-e az "Andika" substringet.
var mondatok = ["Andika eszik", "Andika iszik", "Andi és Undi"]
for (var i = 0; i < mondatok.length; i++) {
  if (mondatok[i].includes("Andika")) {
    console.log(mondatok[i] + ": tartalmazza az Andika szót.");
  } else {
    console.log(mondatok[i] + ": nem tartalmazza az Andika szót");
  }
}


///// Ezt megoldhatjuk úgy is, hogy írunk egy függvényt, ami a közös részeket "kiemeli"

function andikaVizsgalat(vizsgalandoString) {
  if (vizsgalandoString.includes("Andika")) {
    console.log(vizsgalandoString + ": tartalmazza az Andika szót");
  } else {
    console.log(vizsgalandoString + ": nem tartalmazza az Andika szót");
  }
}

console.log("Excercise #6 v2");
// Vizsgáld meg, hogy a változó tartalmazza-e az "Andika" substringet.
var mondat = "Andika eszik";
andikaVizsgalat(mondat);

console.log("Excercise #7 v2");
// Írd ki a tömb elemei tartalmazzák-e az "Andika" substringet.
var mondatok = ["Andika eszik", "Andika iszik", "Andi és Undi"]
for (var i = 0; i < mondatok.length; i++) {
  andikaVizsgalat(mondatok[i]);
}

