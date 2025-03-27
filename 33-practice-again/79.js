// Írj egy benneVan() függvényt, ami 3 szám paramétert kap: min, max, value
// Vizsgáld meg, hogy a value szám a min és a max érték között van-e.
// Ha igen térjen vissza true-val, ha nem, akkor false-zal.
// Pl. benneVan(1, 10, 5) => true, mert az value (5) a min (1) és a max (10) közötti 
//    számtartományban

/*benneVan = (min, max, value) => {
    if (min < value && max > value) {
        return true;
    }

    return false;
}*/

benneVan = (min, max, value) => min < value && max > value ? true : false;

console.log(benneVan(1, 10, 5));
console.log(benneVan(1, 10, 12));

// a megoldás szuperséges, meg tudod csinálni egysorosra?
