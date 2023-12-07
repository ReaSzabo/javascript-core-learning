// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy háromjegyű vagy nem!

function hasThreeDigits(numero) {
    if (numero >= 100 && numero < 1000) {
        console.log("A szám háromjegyű")
    } else {
        console.log("A szám nem háromjegyű")
    }
}

hasThreeDigits(99)
hasThreeDigits(100)
hasThreeDigits(999)
hasThreeDigits(1000)