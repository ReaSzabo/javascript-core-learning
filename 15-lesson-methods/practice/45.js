// Adott egy tömb, amiben tömbök vannak.
// Írd ki, hogy hány (al)tömbben szerepel a 0 szám.
// Így vizsgáljuk meg, hogy egy tömb tartalmazza-e a 0-t? [0,1,2].includes(0); 
// Ha true, akkor tartalmazza, ha false akkor nem.

var tombocske = [
  [1, 3, 5, 6, 7],
  [0, 4, 5, 6, 0],
  [7, 3, 0, 6, 7],
  [1, 3, 5, 6, 0]
]


for (let i = 0; i < tombocske.length; i++) {
  if (tombocske[i].includes(0)) {
    szamlalo++;
  }
}

console.log(szamlalo);

/*var szamlalo = 0;

for (let i = 0; i < tombocske.length; i++) {
  for (let k = 0; k < tombocske[i].length; k++) {
    if (tombocske[i][k] == 0) {
      szamlalo++;
    }
  }
}

console.log(szamlalo)
*/
