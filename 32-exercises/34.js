console.log("Exercise 7");
// Andika feljegyezte hány órás edzéseket tartott a héten.
// Egy tömbben tárolta el ezeket.
// Töltsd fel az "edzesekPercben" tömböt, amiben percként vannak eltárolva ezek az edzés hosszok, nem pedig órában.
var edzesekOraban = [1, 4, 3, 2, 5, 6, 7, 1, 3];
var edzesekPercben = [];


for (let i = 0; i < edzesekOraban.length; i++) {
    edzesekPercben.push(edzesekOraban[i] * 60);
}

console.log(edzesekPercben);