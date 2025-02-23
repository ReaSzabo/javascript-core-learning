
console.log("Exercise 11");
// Adott egy tömb, amiben tömbök vannak.
// Így vizsgáljuk meg, hogy hányszor tartalmazza a 0-t?
var tombocske = [
  [1, 3, 5, 6, 7],
  [0, 4, 5, 6, 0],
  [7, 3, 0, 6, 7],
  [1, 3, 5, 6, 0]
]
var szamlalo = 0;

for (let i = 0; i < tombocske.length; i++) {
  for (let j = 0; j < tombocske[i].length; j++) {
    if (tombocske[i][j] == 0) {
      szamlalo++;
    }
  }
}

console.log(szamlalo);