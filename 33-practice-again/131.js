// Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

checkLastDigit = (a, b, c) => {
    a = a.toString();
    b = b.toString();
    c = c.toString();

    return a[a.length - 1] == b[b.length - 1] && b[b.length - 1] == c[c.length - 1] ? true : false;
}


console.log(checkLastDigit(765, 895, 5215));
console.log(checkLastDigit(4233, 423, 285));
console.log(checkLastDigit(346, 42443, 346));