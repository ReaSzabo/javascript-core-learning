// Tudjuk egy objektum property-eit módosítani?
// Igen, lehetséges hozzáadni, módosítani és törölni őket.

var kenyer = {
  szin: "barna",
}

// 3. Törölni property-t:
delete kenyer.szin;

console.log("Property törlés után");
console.log(kenyer);

