// Filter words that contain the word "an"

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

var filteredFruits = fruits.filter(fruit => fruit.includes("an"));


// A filter kiszűri azokat az elemeket, amelyek megfelelnek egy feltételnek.
// De akkor mire lehet jó a find() és a findLast()

let gyumi = fruits.find(fruit => fruit.includes("an"));
console.log(gyumi)

let gyumi2 = fruits.findLast(fruit => fruit.includes("an"));
console.log(gyumi2)
