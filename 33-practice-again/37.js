// Számold meg a true értékeket a tömbben.

let szamlalo = 0;
const dontesek = [true, false, true, true, false, true, false, true, false];


for (let i = 0; i < dontesek.length; i++) {
    if (dontesek[i]) {
        szamlalo++;
    }
}


console.log(szamlalo);