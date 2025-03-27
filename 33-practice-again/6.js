

console.log("Exercise #4");
// Write a program to log all even numbers between 0 to 11. (even = páros)

for (let i = 0; i < 12; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


console.log("Exercise #5");
// Write a program to log all odd numbers between 0 to 7. (odd = páratlan)

for (let i = 0; i < 8; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}



console.log("Exercise #6");
// Write a program to find sum of all natural numbers between 1 to 10.
// (Az 1 és 10 közötti természetes számok összege.)

let sum = 0;

for (let i = 1; i < 11; i++) {
    sum = sum + i;
}

console.log(sum);





console.log("Exercise #7");
// Write a program to find sum of all even numbers between 1 to 10.

let evenSum = 0;

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        evenSum = evenSum + i;
    }
}

console.log(evenSum);





console.log("Exercise #8");
// Write a program to find sum of all odd numbers between 10 to 100. 

let oddSum = 0;

for (let i = 10; i < 101; i++) {
    if (i % 2 == 1) {
        oddSum = oddSum + i;
    }
}

console.log(oddSum);




console.log("Exercise #9");
// Írd ki a három többszöröseit 30 alatt! (3, 6, 9, 12, 15 ...)
// (Egy szám a 3 többszöröse, ha elosztva 3-mal a maradék 0.)

for (let i = 0; i < 31; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}





console.log("Exercise #10");
// Írd ki 12-szer a csillag karaktert külön sorokba!

for (let i = 0; i < 12; i++) {
    console.log("*");
}





console.log("Exercise #11");
// Írd ki a tömb azon elemeit, amelyek páratlanok!
var tombocske1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 200];
var tombocske2 = [];

for (let i = 0; i < tombocske1.length; i++) {
    if (tombocske1[i] % 2 == 1) {
        tombocske2.push(tombocske1[i]);
    }
}

console.log(tombocske2);





console.log("Exercise #12");
// Írd ki a tömb azon elemeit, amelyek párosak!
var tombocske2 = [200, 300, 333, 411, 12, 2, 32, 33, 41, 39, 10];

for (let i = 0; i < tombocske2.length; i++) {
    if (tombocske2[i] % 2 == 0) {
        console.log(tombocske2[i]);
    }
}





console.log("Exercise #13");
// Írd ki a tömb első és utolsó elemét!
var tombocske3 = [-1, 200, 300, 333, 411, 334];

console.log(tombocske3[0]);
console.log(tombocske3[tombocske3.length - 1]);





console.log("Exercise #14");
// Írd ki a tömb minden második elemét!
var tombocske4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < tombocske4.length; i = i + 2) {
    console.log(tombocske4[i]);
}


console.log("Exercise #15");
// Írd ki a tömb azon elemeit, amelyek nagyobbak, mint 5!
var szamok = [3, 4, 1, 5, 7, 1, 0, 2];

for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] > 5) {
        console.log(szamok[i]);
    }
}
