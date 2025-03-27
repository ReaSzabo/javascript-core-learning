// A sugár (r) alapján számold ki a kör kerületét.
// Hozz létre egy circumference (kerület) property-t a circle objektumban és add neki értékül a kör kerületét.
// (A PI értékeként használd a 3.14-et.)

const circle = {
  r: 12
}

circle.circumference = 2 * circle.r * 3.14;

console.log(circle);

