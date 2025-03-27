// Írj egy függvényt, ami a paraméterül kapott stringből kivesz minden magánhangzót. (elég csak az angol szavakat kezelni)
// Ezt adja vissza.
// Tipp: használd a replaceAll metódust. Pl. string.replaceAll("régi", "új")


removeVowels = (s) => {
    return s.replaceAll("a", "").replaceAll("e", "").replaceAll("i", "").replaceAll("o", "").replaceAll("u", "");
}

console.log(removeVowels("Koncz Mate"));