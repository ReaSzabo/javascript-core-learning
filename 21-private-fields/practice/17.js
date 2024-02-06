// Create a function to determine if a given string is a palindrome. 


function isPalindrome(word) {

    let jo = true;

    for (let i = 0; i < word.length / 2; i++) {

        if (word[i] != word[word.length - 1 - i]) {

            jo = false;

        }
    }

    return jo;
}


console.log(isPalindrome("kere"));