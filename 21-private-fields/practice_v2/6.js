// Írj egy függvényt, ami egy "ehes" nevű booleant kap paraméterként!
// Ez a Andika éhségét jelzi.
// A függvény írja ki, hogy "Andika eszik", ha éhes és 
// "Andika alszik", ha nem éhes! (console.log())

isEating = (ehes) => {
    if (ehes == true) {
        console.log("Andika eszik.");
    } else {
        console.log("Andika alszik.");
    }
}


isEating(false);
isEating(true);