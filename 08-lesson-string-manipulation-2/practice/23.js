// Adott egy tömb. 
// Ha a tömb mérete nagyobb, mint 7, akkor töröld ki az utolsó elemét!
var napok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap", "sétanap"];

for (let i = 0; i < napok.length; i++) {
    if (napok.length > 7) {
        napok.pop();
    }
}
console.log(napok)