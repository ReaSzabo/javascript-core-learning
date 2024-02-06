// Write a function to determine if an array contains only unique elements.

let tombi = [1, 4, 5, 3, 6];
let tombi2 = [1, 4, 5, 3, 6];

function hasUniqueElements(arr) {

    let control = true;

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] == arr[j]) {

                control = false;
            }
        }
    }


    return control;
}


console.log(hasUniqueElements(tombi));