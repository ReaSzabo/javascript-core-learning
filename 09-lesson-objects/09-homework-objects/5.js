console.log("Exercise 5");
// A sugár (r) alapján számold ki a kör kerületét.
// Hozz létre egy circumference (kerület) property-t a circle objektumban és add neki értékül a kör kerületét.
// (A PI értékeként használd a 3.14-et.)

var circle = {
  r: 12
}

console.log("Kor kerület: " + circle.r * 2 * Math.PI)
console.log("Kor terület: " + circle.r * circle.r * Math.PI)
