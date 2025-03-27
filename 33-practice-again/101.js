// Írj egy függvényt, amely paraméterként kap egy másik függvényt és meghívja azt. 
// Ha a függvény végrehajtása során hiba történik, a catch blokk kezelje a hibát!


/*
Az origFunc-nak legyen 2 paramétere.
Az első legyen a paramFunc, a második egy szám, amit a paraméterként kapott paramFunc hív meg paraméterként.
A paramFunc törzsében legyen egy for ciklus. Ha a paramFunc paramétere nem egy szám, akkor dobjon hibát.
Egyébként pedig fusson le a for ciklus.
*/


origFunc = (f, n) => {
    try {
        if (typeof n != "number") {
            throw "A függvényhívás sikertelen!"
        }

        f(n);
    }
    catch (error) {
        console.log(error);
    }
}

paramFunc = (n) => {
    for (let i = 0; i < n; i++) {
        console.log("Hali!");
    }
}

origFunc(paramFunc, 3);
origFunc(paramFunc,);


