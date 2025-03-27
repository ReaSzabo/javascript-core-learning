// mire való a try-catch block?
// nagyon egyszerű: "megpróbálja" lefuttatni a try blokkban lévő kódot
// fut szépen, amíg hibába nem bukkan
// - ha talál hibát, akkor a catch blokkban lévő kód kezd el futni
// - ha nem talál hibát, akkor fut tovább szépen a try blokkban lévő kód és a catch blokk kimarad
// a lényeg: ha számíítunk rá, hogy lehet, hogy lesz egy hiba, akkor használjuk a try-catcht
// a catch blokknak van egy paramétere is, mégpedig az error

try {
    console.loooog("Hali");
} catch (errorka) {
    console.error("Hibát találtunk. Ez a hiba: " + errorka);
}

console.log("Try-catch block utáni kód futás folytatódik");
