// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden angol magánhangzót.
// Ezt adja vissza.
// Tipp: használd a replaceAll metódust. Pl. string.replaceAll("régi", "új")


removeVowels = (string) => {

    let newString = string.replaceAll("a", "").replaceAll("A", "").replaceAll("e", "").replaceAll("E", "").replaceAll("i", "").replaceAll("I", "").replaceAll("o", "").replaceAll("O", "").replaceAll("u", "").replaceAll("U", "");

    return newString;
}


console.log(removeVowels("Andika"));
console.log(removeVowels("olajmezo"));
