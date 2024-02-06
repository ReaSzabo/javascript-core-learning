// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden angol magánhangzót.
// Ezt adja vissza.
// Tipp: ne használd a replaceAll metódust


function vowels(word) {

    let newWord = "";


    for (i = 0; i < word.length; i++) {


        if (word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i] != "o" && word[i] != "u") {

            newWord = newWord + word[i];
        }
    }

    return newWord;
}

console.log(vowels("Budapest"));