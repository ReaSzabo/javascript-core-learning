// Írj egy függvényt, amely kiírja, hogy a paraméterként kapott szám, melyik napot jelöli a héten.
// Pl. weeksDay(1) - ezt írja ki: "Hétfő"
// weeksDay(3) - ezt írja ki: "Szerda"
// weeksDay(7) - ezt írja ki: "Vasárnap"
// weeksDay(10) - ezt írja ki: "Nem megfelelő szám"
// Ha 1-nél kisebb, vagy 7-nél nagyobb a szám, akkor írd ki: "Nem megfelelő szám"

function weeksDay(x) {
    if (x == 1) {
        console.log("Hétfő");
    }
    else if (x == 2) {
        console.log("Kedd");
    }
    else if (x == 3) {
        console.log("Szerda");
    }
    else if (x == 4) {
        console.log("Csütörtök");
    }
    else if (x == 5) {
        console.log("Péntek");
    }
    else if (x == 6) {
        console.log("Szombat");
    }
    else if (x == 7) {
        console.log("Vasárnap");
    } else {
        console.log("Nem megfelelő szám");
    }
}

weeksDay(8);
weeksDay(3);