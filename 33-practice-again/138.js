// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

checkPandT = (s) => {
    let counterP = 0;
    let counterT = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "p" || s[i] == "P") {
            counterP++;
        } else if (s[i] == "t" || s[i] == "T") {
            counterT++;
        }
    }

    counterP == counterT ? console.log("The given string contains equal number of p's and t's.") : console.log("The given string doesn't contain equal number of p's and t's.")
}

checkPandT("pereputty");
checkPandT("paplan");