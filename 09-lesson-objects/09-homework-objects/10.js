console.log("Exercise 10");
// Számold meg a true értékeket a tömbben.

var szamlalo = 0;
var dontesek = [true, false, true, true, false, true, false, true, false];

for (let i = 0; i < dontesek.length; i = i + 1) {
  if (dontesek[i] == true) {
    szamlalo = szamlalo + 1; // szamlalo++;
  }
}
console.log(szamlalo)