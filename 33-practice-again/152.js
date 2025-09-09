// Mit ír ki a kód? - 1000 ms-onként logolja, hogy csá, összesen 5x

let counter = 0;

const interval = setInterval(() => {
    console.log("Csá");
    counter++;
    if (counter == 5) {
        clearInterval(interval)
    }
}, 1000);
