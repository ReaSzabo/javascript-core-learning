// Tudjuk egy objektum property-eit módosítani?
// Igen, lehetséges hozzáadni, módosítani és törölni őket.

var kenyer = {
  szin: "barna",
}

// 2. Módosítani egy meglévő property-t:
kenyer.szin = "fehér";
kenyer["suly"] = 1000;

console.log("Property módosítás után");
console.log(kenyer);
