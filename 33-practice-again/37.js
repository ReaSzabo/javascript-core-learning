// Számold meg a true értékeket a tömbben.

var szamlalo = 0;
var dontesek = [true, false, true, true, false, true, false, true, false];


for (let i = 0; i < dontesek.length; i++) {
    if (dontesek[i] == true) {
        szamlalo++;
    }
}

console.log(szamlalo);