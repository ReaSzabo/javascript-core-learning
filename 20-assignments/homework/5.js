// Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

checkLastDigit = (a, b, c) => {

    if (a.toString()[2] == b.toString()[2] && b.toString()[2] == c.toString()[2]) {

        return true;

    } else {

        return false;

    }
}


console.log(checkLastDigit(765, 895, 525));
console.log(checkLastDigit(423, 423, 285));
console.log(checkLastDigit(346, 423, 346));