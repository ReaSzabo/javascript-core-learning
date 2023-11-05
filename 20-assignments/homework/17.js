// Write a JavaScript program to extract the first half of a even string.  


extractHalf = (text) => {

    var half;

    if (half % 2 == 0) {

        half = text.length / 2;

    } else {

        half = Math.round(text.length / 2);

    }

    return text.substring(0, half);
}


console.log(extractHalf("radar"));
console.log(extractHalf("alma"));
