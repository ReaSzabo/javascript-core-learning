let counter = 0;

const interval = setInterval(() => {
    console.log("Csá");
    counter++;
}, 1000);

if (counter == 5) {
    clearInterval(interval)
}