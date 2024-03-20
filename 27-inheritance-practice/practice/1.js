/*
Készítsünk egy háttértároló osztályt, amely fájlok listáját kezeli az alábbi módon:
- A háttértárolónak van egy maximális tárolókapacitása, melyet csak konstruktorban lehet beállítani
- Van egy Format() metódusa, mely üríti a fájlok listáját
- Van egy MaximálisKapacitás tulajdonsága, amellyel le lehet kérdezni a maximális kapacitás értékét
- Van egy SzabadKapacitás tulajdonsága, amellyel le lehet kérdezni a meghajtó szabad kapacitását
- Van egy FoglaltKapacitás tulajdonsága, amellyel le lehet kérdezni a tárolt fájlok összméretét
- Van egy Hozzáad() metódusa, amellyel új fájlt lehet hozzáadni, ha ugyanilyen nevű fájl nincs még a
háttértárolón, illetve az új fájl elfér a háttértárolón
- Van egy Keres() metódusa, amely egy megadott fájlnév alapján megkeresi és visszaadja a fájlt - Van egy
Töröl() metódusa, amely letörli a megadott fájlt, amennyiben létezik 

A fájlok jellemzői a következők:
- Van nevük és méretük
- Van egy-egy CsakOlvasható, Rendszer és Rejtett attribútumuk


Fejlesszük tovább az alap háttértároló osztályt Floppy osztállyá az alábbi módosítások szerint:
- A floppy mérete 1440KB
- A floppy-nak van írásvédő tolókája, amely ha „írásvédett'”állapotba kerül, akkor a floppyn sem a Format(),
sem a Hozzáad(), sem a Törlés() nem működik
*/


class Storage {
    fileArray = [];

    maxCapacity = null;
    freeCapacity = null;
    reservedCapacity = null;

    constructor(maxCapacity) {
        this.maxCapacity = maxCapacity;
     };

    Format() {
        this.fileArray = [];
    }

    getMaxCapacity() {
        return this.maxCapacity;
    };

    getFreeCapacity() {
        return this.freeCapacity = this.maxCapacity - this.reservedCapacity;
    }

    getReservedCapacity() {
        return this.reservedCapacity = this.maxCapacity - this.freeCapacity;
    };

    Plus(x) {

        let controller = true;

        for(let i = 0; i < this.fileArray.length; i++) {

            if(this.fileArray[i].name == x.name) {

                controller = false;

            } else if(this.fileArray[i].size + this.reservedCapacity <= this.maxCapacity) {

                controller = true;
            }

        }
        
        if(controller == true) {

            this.fileArray.push(x)

            this.reservedCapcity = 0;

            for(let i = 0; i < this.fileArray.length; i++) {
    
                this.reservedCapacity = this.reservedCapacity + this.fileArray[i].size;
    
            }

            this.freeCapacity = this.maxCapacity - this.reservedCapacity;
        }

      

    }

    Search(y) {

        for(let i = 0; i < this.fileArray.length; i++) {

            if(this.fileArray[i].name == y) {

                return this.fileArray[i];
            }
        }
    }

    Delete(z) {

        for(let i = 0; i < this.fileArray.length; i++) {

            if(this.fileArray[i].name == z) {

                delete this.fileArray[i];
            }
        }

    }

    
}