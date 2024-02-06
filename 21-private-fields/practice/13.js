// Write a JavaScript program to convert a given number of minutes into hours and minutes.  


function convertIntoHours(n) {

    let hours = n / 60;

    let minutes = n % 60;

    console.log(Math.floor(hours) + " óra " + minutes + " perc");
}

convertIntoHours(95);