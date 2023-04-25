// Írj egy függvényt, amely kiírja, hogy a paraméterként kapott szám, melyik napot jelöli a héten.
// Pl. hetNapja(1) - ezt írja ki: "Hétfő"
// hetNapja(3) - ezt írja ki: "Szerda"
// hetNapja(7) - ezt írja ki: "Vasárnap"
// hetNapja(10) - ezt írja ki: "Nem megfelelő szám"
// Ha 1-nél kisebb, vagy 7-nél nagyobb a szám, akkor írd ki: "Nem megfelelő szám"

function dayOfWeek(number) {
    if (number == 1) {
        console.log("Hétfő");
    } else if (number == 2) {
        console.log("Kedd")
    } else if (number == 3) {
        console.log("Szerda")
    } else if (number == 4) {
        console.log("Csütörtök")
    } else if (number == 5) {
        console.log("Péntek")
    } else if (number == 6) {
        console.log("Szombat")
    } else if (number == 7) {
        console.log("Vasárnap")
    } else {
        console.log("Nem megfelelő szám")
    }
}

dayOfWeek(6)