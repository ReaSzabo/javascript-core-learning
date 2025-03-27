// Cseréld ki a változók értékét (nem kell függvényt írnod)
let a = 10;
let b = 20;

/*let c = a;
a = b;
b = c;*/

[a, b] = [b, a]

console.log(a);
console.log(b);


// ez működik minden nyelven:

let x = 5;
let y = 4;
x = x + y;
y = x - y;
x = x - y;
console.log('x', x);
console.log('y', y);
