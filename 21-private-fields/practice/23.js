// Determine if two strings are anagrams of each other.


function isAnagram(word1, word2) {

    word1Arr = [];
    word2Arr = [];

    for (let i = 0; i < word1.length; i++) {

        word1Arr.push(word1[i]);

    }


    for (let j = 0; j < word2.length; j++) {

        word2Arr.push(word2[j]);

    }

    word1 = word1Arr.sort().join('');
    word2 = word2Arr.sort().join('');

    if (word1 == word2) {

        return true;
    }

    return false;
}


console.log(isAnagram("fasz", "fazs"));