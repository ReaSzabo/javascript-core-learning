// Írj egy függvényt. Két paramétert kap: az első 
// egy stringeket tartalmazó tömb, a második egy string.
// A függvény térjen vissza egy tömbbel, aminek az 
// elemei tartalmazzák a második paraméterként kapott stringet.
// Szóval a feladat: válogassuk ki azokat a tömb elemeket, 
// amik tartalmazzák a "keresési kifejezést", 
// azaz a második paramétert.

const param1 = ["dagi", "kövér", "csúnya", "bárgyú"];
const param2 = "árgyú";

function doubleParams(tombi, s) {
    return tombi.filter(part => part.includes(s));
}

console.log(doubleParams(param1, param2));