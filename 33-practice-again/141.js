// Primitive values

let a = 11;
let b = "asdasd";
let c = true;

let d = a;
d = 12;

console.log(a); // what is the log? - 11
console.log(d); // what is the log? - 12

// Objects

let kokuObject = {
    meno: true
}

let andiObject = kokuObject;

andiObject.meno = false;

console.log(andiObject); // what is the log?
console.log(kokuObject); // what is the log?