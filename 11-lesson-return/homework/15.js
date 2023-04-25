console.log("Exercise 11");
// Írj egy függvényt, ami egy "ehes" nevű booleant kap paraméterként!
// Ez a Andika éhségét jelzi.
// A függvény írja ki, hogy "Andika eszik", ha éhes és 
// "Andika alszik", ha nem éhes! (console.log())

function isHungry(ehes) {
    if (ehes == true) {
        console.log("Andika eszik")
    } else {
        console.log("Andika alszik")
    }
}

isHungry(true)
isHungry(false)