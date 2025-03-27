// Használd a replaceAll metódust (kétszer), hogy az "eb" változó értéke "Gisgugya" legyen!
// Azaz cserélj ki minden "k" betűt "g"-re, majd minden "t" betűt "g"-re!
let eb = "Kiskutya";

eb = eb.replaceAll("k", "g").replaceAll("K", "G").replaceAll("t", "g");

console.log(eb);