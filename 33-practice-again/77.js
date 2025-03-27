// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden magánhangzót.
// Ezt adja vissza.
// oldd meg replace nélkül

removeVowels = (s) => {

    let arr = [];
    let newS = "";

    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "a" || arr[j] == "e" || arr[j] == "i" || arr[j] == "o" || arr[j] == "u") {
            delete arr[j];
        } else {
            newS = newS + arr[j];
        }
    }


    return newS;
}

console.log(removeVowels("Koncz Mate"))
