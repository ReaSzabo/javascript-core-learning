// Írj egy függvényt, ami akkor ad vissza igaz értéket, 
// ha az első paraméterként megadott tömb bármelyik 2 elemének összege 
// egyenlő a második paraméter értékével!


let tombi = [4, 9, 6, 5, 7];
let tombi2 = [4, 9, 6, 5, 7];

let k = 16;


function equalValues(arr, n) {


    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == n) {

                return true;
            }
        }
    }

    return false;
}


console.log(equalValues(tombi, k)); 