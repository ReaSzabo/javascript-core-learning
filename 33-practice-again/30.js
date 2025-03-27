// Tudjuk egy objektum property-eit módosítani?
// Igen, lehetséges hozzáadni, módosítani és törölni őket.

let kenyer = {
  szin: "barna",
  suly: 500
}

// 2. Módosítani egy meglévő property-t:
kenyer.szin = "fehér";
kenyer["suly"] = 1000;

console.log("Property módosítás után");
console.log(kenyer);
