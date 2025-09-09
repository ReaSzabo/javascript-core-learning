// Write a JavaScript program to concatenate two strings except for their first character. 


concatenateStrings = (s1, s2) => {
    let newS = s1.substring(1) + s2.substring(1);

    return newS;
}

console.log(concatenateStrings("poppy", "seed"));
console.log(concatenateStrings("the", "boyz"));