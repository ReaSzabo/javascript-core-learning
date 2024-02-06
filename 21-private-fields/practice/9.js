// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy háromjegyű vagy nem!


function hasThreeDigits(n) {

    if (n.toString().length == 3) {

        console.log("Az adott szám háromjegyű.");
    } else {

        console.log("Az adott szám nem háromjegyű.");
    }

}


hasThreeDigits(1450);
hasThreeDigits(123);
hasThreeDigits(1);