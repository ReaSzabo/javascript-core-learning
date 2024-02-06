// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden angol magánhangzót.
// Ezt adja vissza.
// Tipp: használd a replaceAll metódust. Pl. string.replaceAll("régi", "új")


function vowels(word) {

    word = word.replaceAll("a", "").;

    return word;
}


console.log(vowels("Budapest"));