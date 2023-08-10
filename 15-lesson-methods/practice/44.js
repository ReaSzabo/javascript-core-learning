// Számold meg a true értékeket a tömbben.

var szamlalo = 0;
var dontesek = [true, false, true, true, false, true, false, true, false];

for (i = 0; i < dontesek.length; i++) {
    if (dontesek[i]) {
        szamlalo++;
    }
}

console.log(szamlalo);