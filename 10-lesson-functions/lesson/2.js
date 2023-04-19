/////// Nézzünk meg egy másik példát. Írunk egy függvényt, amely meg fogja növelni a számláló (counter) változó értékét eggyel.
console.log("Excercise #2");

var counter = 0; // számláló

// Így növeljük meg az értékét:
counter = counter + 1; // mi a rövidített alakja? 

console.log(counter); // mit ír ki?




// Deklaráljunk egy függvényt, amely megnöveli eggyel az értéket és ki is írja a változást.
function increaseCounter() {
  counter = counter + 1;
  console.log(counter);
}

// Hívjuk meg a függvényt, és ezzel növeljük meg az értéket eggyel.
increaseCounter();

// Növeljük meg az értéket mégeggyel.
increaseCounter();

// És mégeggyel.
increaseCounter();