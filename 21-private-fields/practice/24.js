// Order an array of integers.

function arrayOrder(arr) {

    let helper = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                helper = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = helper;
            }


        }
    }

    return arr;
}

let tombi = [3, 2, 4, 98, 100, 53, 43, 3];



console.log(arrayOrder(tombi));
