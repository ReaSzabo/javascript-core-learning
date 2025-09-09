/*
Készítsünk egy „Kör” nevű osztályt, amely körök kezelését valósítja meg. Az osztály a következő jellemzőkkel
rendelkezzen:
- Legyen képes tárolni a kör sugarát és középpontját (property-ként)
- Legyen képes a kört nagyítani és kicsinyíteni (set metódussal)
- Legyen képes kiszámítani a saját kerületét és területét (get metódussal)

Származtassunk a fenti Kör osztályból egy „SzínesKör” nevű osztályt, amely a továbbiakkal egészíti ki a Kör osztályt:
- Legyen képes tárolni, visszaadni és módosítani a kör színé
*/

class Kor {
    constructor(r, c) {
        this.r = r;
        this.c = c;
    }

    setR(n) {
        this.r += n;
    }

    getT() {
        return this.r * this.r * 3.14;
    }

    getK() {
        return 2 * this.r * 3.14;
    }
}

class SzinesKor extends Kor {
    constructor(r, c, color) {
        super(r, c);
        this.color = color;
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getColor() {
        return this.color;
    }
}