// Írd ki a tömb legnagyobb elemét!
// Használj forEach-et!

let szamok2 = [41, 3, 6, 8, 12, 13];
let max = -9999999999;

szamok2.forEach(element => {
    if (element > max) {
        max = element;
    }
});

console.log(max);