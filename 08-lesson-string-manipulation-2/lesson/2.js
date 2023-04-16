
// Vegyük észre, hogy a replaceAll metódussal módosított eredeti változó nem változik meg.
// Értékül kell adnunk egy másik stringnek vagy akár önmagának.

// Nem elég:
var greetings = "Szevasz";
greetings.replaceAll("e", "i");
console.log(greetings); // Szevasz

// Helyesen:
var greetings2 = "Szevasz";
greetings2 = greetings2.replaceAll("e", "i");
console.log(greetings2); // Szivasz
