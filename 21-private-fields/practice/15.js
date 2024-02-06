// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  


function pT(word) {

    let counterP = 0;
    let counterT = 0;


    for (let i = 0; i < word.length; i++) {

        if (word[i].toLowerCase() == "p") {

            counterP++;
        } else if (word[i].toLowerCase() == "t") {

            counterT++;
        }
    }

    if (counterP == counterT) {

        return true;
    }

    return false;
}


console.log(pT("Puputeve"));
console.log(pT("PapaTata"));