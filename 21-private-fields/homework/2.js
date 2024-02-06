// Készíts egy osztályt a való világ valamilyen dolga alapján. 
// A mezői legyenek ezen dolog tulajdonságai.
// A metódusai legyenek azok a műveletek, amit a dolog tud végezni vagy rajta el tudnak végezni.

// Ezzel megvalósítod az absztrakciót.


class Sofa {

    static logHello() {
        console.log("Hello");
    }

    size = null;
    color = null;
    material = null;

    getColor() {
        return this.color;
    }

    setMaterial(material) {
        this.material = material;
    }

    logSize() {
        console.log(this.size);
    }
}


let peldany = new Sofa();

peldany.logSize();

Sofa.logHello()