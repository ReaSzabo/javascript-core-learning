
/////////////// TRIM /////////////////
console.log("TRIM")

// A trim() (lenyír) metódust, akkor használjuk, ha szeretnénk kitörölni minden spacet a string elejéről és végéről.
// Gondoljunk arra, hogy a felhasználó egy weblap formjába beírja az email címét és a végén hagy egy spacet, akkor az így kerül elmentésre.
// pl "szaboandreaannaa@gmail.com "
// Mikor később a programunk szeretné megvizsgálni a stringet, akkor az if helytelenül azt fogja hinni, hogy ez nem a felhasználó email címe.

var megadottEmail = "szaboandreaannaa@gmail.com ";
var megadottJelszo = "123456";

if (megadottEmail == "szaboandreaannaa@gmail.com" && megadottJelszo == "123456") {
  console.log("Sikeres belépés");
} else {
  console.log("Nincs ilyen email és jelszó páros az adatbázisban.");
}
