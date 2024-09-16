// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden angol magánhangzót.
// Ezt adja vissza.
// Tipp: ne használd a replaceAll metódust

removeVowels = (s) => {
    let newString = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i] != "a" && s[i] != "A" && s[i] != "e" && s[i] != "E" &&
            s[i] != "i" && s[i] != "I" && s[i] != "o" && s[i] != "O" &&
            s[i] != "u" && s[i] != "U") {
            newString = newString + s[];
        }
    }

    return newString;
}



console.log(removeVowels("Andika"));
console.log(removeVowels("olajmezo"));
