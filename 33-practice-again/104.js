// A finally egy opcionális kulcsszó.
// A catch után írhatjuk egy külön blokk-ként.
// Ez minden esetben lefut. Akár van error, akár nem.

// Mit ír ki a konzol? - Start, Hibakezelés, Mindig lefut, Vége

try {
    console.log("Start");
    throw new Error("Valami baj van");
} catch (error) {
    console.log("Hibakezelés");
} finally {
    console.log("Mindig lefut");
}
console.log("Vége");