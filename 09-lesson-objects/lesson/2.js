////////// NUMBER TÍPUS ///////////

// egész szám - angolul "integer" (röviden "int")
var egeszSzam = 100;

// Tört szám - angolul float (azért mert "lebegőpontos" kódolással van tárolva a kettes számrendszerben)
// Tizedes pontot használunk, nem vesszőt(!) - ez fontos.
// Miért? Egyrészt azért, mert a vesszőt másra használjuk (pl. tömb elemeit választjuk el)
// Illetve angol nyelvterületen a tizedes jel a pont (12.3), nem a tizedes vessző (12,3)
var tortSzam = 12.2;


// speciális számok

// NaN - Not a Number
var nemSzam = 100 / "Andi";   // elosztok egy számot egy nem számmal, pl stringgel
console.log(nemSzam);           // ezt írja ki: "NaN"

// Infinity
var vegtelen = 42 / 0;      // elosztok egy számot nullával
console.log(vegtelen);      // ezt írja ki: "Infinity"

// -Infinity
var minuszVegtelen = 42 / -0;     // elosztok egy számot egy minusz nullával
console.log(minuszVegtelen);      // ezt írja ki: "-Infinity"

// Érdekesség: létezik 0 és -0 szám is. Mindkettő ugyanannyi értékű.

console.log(0 == -0) // true