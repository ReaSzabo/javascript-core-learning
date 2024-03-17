/*
Készítsünk egy „Kör” nevű osztályt, amely körök kezelését valósítja meg. Az osztály a következő jellemzőkkel
rendelkezzen:
- Legyen képes tárolni a kör sugarát és középpontját (property-ként)
- Legyen képes a kört nagyítani és kicsinyíteni (set metódussal)
- Legyen képes kiszámítani a saját kerületét és területét (get metódussal)

Származtassunk a fenti Kör osztályból egy „SzínesKör” nevű osztályt, amely a továbbiakkal egészíti ki a Kör osztályt:
- Legyen képes tárolni, visszaadni és módosítani a kör színé
*/

class Circle {
    radius = null; // number
    center = null; // number[]

    constructor(radius, center) {
        this.radius = radius;
        this.center = center;
    }

    setSize(radius) {
        this.radius = radius;
    }

    increaseRadius() {
        this.radius = this.radius + 1;
    }

    getKerulet() {
        // 2 * r * pi
        return 2 * this.radius * 3.14159;
    }

    getTerulet() {
        // r2 * pi
        return this.radius * this.radius * 3.14159265359;
    }
}

var kor1 = new Circle(5, [6, 7]);
kor1.increaseRadius();
kor1.increaseRadius();
kor1.setSize(4);
console.log(kor1.radius);

class ColorCircle extends Circle {
    color = null;

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    constructor(radius, center, color) {
        super(radius, center); // Color(radius, center)
        //this.color = color;
        this.setColor(color);
    }
}

var szinesKor2 = new ColorCircle(5, [6, 7], "csunya");
console.log(szinesKor2);