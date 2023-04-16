
// Egy stringen természetesen többször is végre tudjuk hajtani a replaceAll metódust.
var hamika = "Minden reggel eszek egy szelet kenyeret.";
hamika = hamika.replaceAll("reggel", "este"); // Minden este eszek egy szelet kenyeret.
hamika = hamika.replaceAll("egy", "három"); // Minden este eszek három szelet kenyeret.
console.log(hamika);


