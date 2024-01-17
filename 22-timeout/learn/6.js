let counter = 0;

const interval = setInterval(() => {
    console.log("Csá");
    counter++;
    if (counter == 5) {
        clearInterval(interval)
    }
}, 1000);
