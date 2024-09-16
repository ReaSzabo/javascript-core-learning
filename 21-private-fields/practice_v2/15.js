// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

pT = (s) => {

    let pCounter = 0;
    let tCounter = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] == "p" || s[i] == "P") {
            pCounter++;
        } else if (s[i] == "t" || s[i] == "T") {
            tCounter++;
        }
    }

    if (pCounter == tCounter) {
        return true;
    }

    return false;
}


console.log(pT("Potato"));
console.log(pT("Potatop"));