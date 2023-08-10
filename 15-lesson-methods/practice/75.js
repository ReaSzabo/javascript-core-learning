// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy háromjegyű vagy nem!

console.log(100 + "Kóku")

function threeDigits(x) {
    console.log(x >= 100 && x < 1000 || x <= -100 && x > -1000 ? "A szám háromjegyű" : "A szám nem háromjegyű");
}

function threeDigits(x) {
    var x = x + "";
    console.log(x.length === 3 ? "A szám háromjegyű" : "A szám nem háromjegyű");
}

threeDigits(20);
threeDigits(200);
threeDigits(2000);
threeDigits(-2000);
threeDigits(-200);
threeDigits(-20);
