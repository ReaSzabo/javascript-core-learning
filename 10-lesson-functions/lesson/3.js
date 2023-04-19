/////// Írunk egy függvényt, amely mindig hozzáad egy eggyel nagyobb számot a tömbhöz. 
// A végeredmény így nézzen ki: [0, 1, 2, 3, 4, 5, ...]; 
console.log("Excercise #3");

var i = 0;
var tomb = [0];

function addNumberToArray() {
  i++;
  tomb.push(i);
  console.log(tomb);
}

addNumberToArray(); // [0,1]
addNumberToArray();
addNumberToArray();
addNumberToArray();