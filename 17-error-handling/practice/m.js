// Az egyenleg bizalmas adattá vált a bankszámla adatait tartalmazó objektumban.
// Töröld ezt a property-t az objektumból.
var bankszamla = {
  currency: "EUR",
  owner: "Dr Szabo, Andrea Anna",
  balance: "csillió-millió"
}

delete bankszamla.balance;
console.log(bankszamla)