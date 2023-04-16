console.log("Exercise 8");
// Így írjuk ki egy tomb legkisebb elemét.
// A feladatod csak annyi, hogy megértsd. 

var szamok = [4, 3, 6, 8, 12, 13];

var minNumber = 9999999999; // Ide írunk egy jó nagy számot, ami tuti, hogy nagyobb minden elemnél.

for (let i = 0; i < szamok.length; i++) {
  // megnézzük, hogy az i-edik elem kisebb-e, mint a minNumber változó
  if (szamok[i] < minNumber) {
    // ha az i-edik elem kisebb, akkor az lesz a minNumber változó új értéke
    minNumber = szamok[i];
  }
  // ezután a for ciklusban minden egyes elemet összehasonlítunk az minNumber-rel
}
console.log(minNumber);