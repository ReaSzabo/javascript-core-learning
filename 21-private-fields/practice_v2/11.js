// Írj egy függvényt, ami akkor ad vissza igaz értéket, 
// ha az első paraméterként megadott tömb bármelyik 2 elemének összege 
// egyenlő a második paraméter értékével!

sum = (numberArr, n) => {
    for (let i = 0; i < numberArr.length - 1; i++) {
        for (let j = i + 1; j < numberArr.length; j++) {
            if (numberArr[i] + numberArr[j] == n) {
                return true;
            }
        }
    }

    return false;
}



let tombi = [2, 6, -5, 56, 4, 39, 155];

console.log(sum(tombi, 211));
console.log(sum(tombi, 210));