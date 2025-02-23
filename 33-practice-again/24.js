////////// STRING TÍPUS ///////////


// double quotes
var kivansag = "Jóétvágyat, Andi!";
// single quotes
var kivansag2 = 'Jóétvágyat, Máté!';

// Létezik többsoros string is.
// Erre az úgynevezett backtick-et használjuk. Ez a karakter: `
var uzenet = ` Szia
                    Mi a helyzet?

                    BR,
                    Máté `;

var nev = "Bence";
var mondat = "A nevem " + nev + ". Érted, hogy " + nev + "?";
console.log(mondat)

// string template
var mondat2 = `A nevem ${nev}. Érted, hogy ${nev}?`
console.log(mondat2)
