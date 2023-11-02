let a = 11;
let b = "asdasd";
let c = true;

let d = a;
d = 12;

let kokuObject = {
    meno: true
}

let andiObject = kokuObject;

andiObject.meno = false;

console.log(andiObject);
console.log(kokuObject);
