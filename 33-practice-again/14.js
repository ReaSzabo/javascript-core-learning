// Használd a replaceAll metódust, hogy a "stringecske" változóben minden állat "cat" legyen!
let stringecske = "The quick brown fox jumps over the lazy dog.";

stringecske = stringecske.replaceAll("fox", "cat").replaceAll("dog", "cat");

console.log(stringecske);