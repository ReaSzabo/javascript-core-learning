// Write a JavaScript program to convert a given number of minutes into hours and minutes.  


convert = (x) => {


    if (x < 3600 && x > 0) {

        return "0 hours " + x / 60 + " minutes"

    } else if (x >= 3600) {

        var hours = x / 60 / 60;

        hours = hours.toFixed();

        var minutes = (x % 3600) / 60;

        minutes = minutes.toFixed();

        return hours + " hours " + minutes + " minutes"

    } else if (x == 0) {

        return "0 hours 0 minutes"

    } else {

        "The given number cannot be interpreted into hours and minutes."
    }
}


console.log(convert(0));
console.log(convert(80));
console.log(convert(3601));

