/////////////// TRIM /////////////////
console.log("TRIM")

// A trim() (lenyír) metódust, akkor használjuk, ha szeretnénk kitörölni minden spacet a string elejéről és végéről.
// Gondoljunk arra, hogy a felhasználó egy weblap formjába beírja az email címét és a végén hagy egy spacet, akkor az így kerül elmentésre.
// pl "szaboandreaannaa@gmail.com "
// Mikor később a programunk szeretné megvizsgálni a stringet, akkor az if helytelenül azt fogja hinni, hogy ez nem a felhasználó email címe.

var megadottEmail = "szaboandreaannaa@gmail.com ";
var megadottJelszo = "123456";


// Mivel azt feltételezzük, hogy a felhasználó nem figyelmes, ezért az alábbi módon egészítjük ki a kódot.
if (megadottEmail.trim() == "szaboandreaannaa@gmail.com" && megadottJelszo.trim() == "123456") {
  console.log("Sikeres belépés");
} else {
  console.log("Nincs ilyen email és jelszó páros az adatbázisban.");
}

// Ezzel törlünk minden whitespace-t a string elejéről és végéről.
// De mi a tök az a whitespace?
// A whitespace character is an empty space (without any visual representation) on screen. 
// Én hármat ismerek: enter (sortörés), space és ... 
// Kitalálod mi a harmadik?


