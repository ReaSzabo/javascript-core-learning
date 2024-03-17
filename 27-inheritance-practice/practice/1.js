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