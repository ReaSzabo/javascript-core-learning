// Tudjuk egy objektum property-eit módosítani?
// Igen, lehetséges hozzáadni, módosítani és törölni őket.

let kenyer = {
  szin: "barna",
}
// 1. Hozzáadni új property-t:
kenyer.suly = 400;
kenyer["kemeny"] = true;

console.log("Property hozzáadás után");
console.log(kenyer);

