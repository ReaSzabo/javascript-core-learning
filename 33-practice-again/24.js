////////// STRING TÍPUS ///////////


// double quotes
const kivansag = "Jóétvágyat, Andi!";
// single quotes
const kivansag2 = 'Jóétvágyat, Máté!';

// Létezik többsoros string is.
// Erre az úgynevezett backtick-et használjuk. Ez a karakter: `
const uzenet = ` Szia
                    Mi a helyzet?

                    BR,
                    Máté `;

const nev = "Bence";
let mondat = "A nevem " + nev + ". Érted, hogy " + nev + "?";
console.log(mondat)

// string template
let mondat2 = `A nevem ${nev}. Érted, hogy ${nev}?`
console.log(mondat2)
