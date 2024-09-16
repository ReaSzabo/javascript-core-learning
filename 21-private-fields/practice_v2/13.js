// Write a JavaScript program to convert a given number of minutes into hours and minutes.  

convert = (n) => {
    let hours = n / 60;
    let minutes = n % 60;

    if (n < 60) {
        console.log("00:" + n);
    } else if (n < 600) {
        console.log("0" + Math.floor(hours) + ":" + minutes)
    } else {
        console.log(Math.floor(hours) + ":" + minutes)
    }
}


convert(39);
convert(95);