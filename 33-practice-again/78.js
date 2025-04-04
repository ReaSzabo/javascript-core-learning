// Write a JavaScript function that takes in a string 
//  and returns the number of characters in an object.

// nehéz feladat, nézzük meg együtt

/* example: 
 
parameter: hello
 
returns: 
{
 h: 1,    
 e: 1,
 l: 2,
 o: 1
}
*/

stringToObj = (s) => {

    let theObj = {};

    for (let i = 0; i < s.length; i++) {
        if (theObj[s[i]] === undefined) {
            theObj[s[i]] = 1;
        } else {
            theObj[s[i]]++;
        }
    }

    return theObj;
}

console.log(stringToObj("hello"));

