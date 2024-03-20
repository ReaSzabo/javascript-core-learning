// Filter words that contain the word "an"

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

var filteredFruits = fruits.filter(fruit => fruit.includes("an"));

console.log(filteredFruits);