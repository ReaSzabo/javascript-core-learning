function faktorialis(number) {
    if (number == 1) {
        return 1;
    } else {
        return number * faktorialis(number - 1);
    }
}

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
