// A tömb összes elemét formázd meg, azaz töröld ki az elején és a végén lévő felesleges whitespaceket.
var szavak2 = ["   Megéget", " a", "Sun", " Full  ", "Classic ", " ez", "a", "  Track   "];

for (let i = 0; i < szavak2.length; i++) {
    szavak2[i] = szavak2[i].trim();
}

console.log(szavak2);