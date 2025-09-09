// Write a JavaScript program to convert a given number of minutes into hours and minutes.  


hoursAndMinutes = (x) => {
    let hours = x / 60;
    hours = Math.floor(hours);
    let minutes = x % 60;

    if (hours == 0) {
        console.log(`00:${x}`);
    } else if (hours < 10) {
        minutes < 10 ? console.log("0" + hours + ":0" + minutes) : console.log("0" + hours + ":" + minutes);
    } else {
        minutes < 10 ? console.log(hours + ":0" + minutes) : console.log(hours + ":" + minutes);
    }
}

hoursAndMinutes(148);
hoursAndMinutes(54);
hoursAndMinutes(180);