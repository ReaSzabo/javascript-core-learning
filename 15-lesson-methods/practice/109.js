// Máté

// Write a JavaScript function that takes in a string 
//  and returns the number of characters in an object.

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

function getCharacters(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        obj[string[i]] = 0;
    }
    for (let i = 0; i < string.length; i++) {
        obj[string[i]] += 1;
    }
    return obj;
}

console.log(getCharacters("hello"))