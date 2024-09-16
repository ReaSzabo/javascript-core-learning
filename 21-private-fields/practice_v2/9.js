// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy háromjegyű vagy nem!


function three(n) {

    if (n.length == 2 && n[0] != "-") {
        console.log("A szám háromjegyű.");
    } else {
        console.log("A szám nem háromjegyű.");
    }

}


three(12);
three(-44);
three(342);
three(2.5);


