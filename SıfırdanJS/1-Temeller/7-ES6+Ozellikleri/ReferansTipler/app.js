// referans tipler : bellekte belli bir yeri tutan degerler,
// primitive tipler : sadece o degeri tasiyan veri tipi.

// referans tipler : date object, arrayler, objeler
//                    Bir degisken tanimladigimiz zaman bu, bellekte bir yeri gosterir.

let a = "Volkan";
let b = "Volkan";

if( a ===b){
    console.log("Esit"); // Esit
}
// primitive veri tipleri oldugu icin, icindeki verileri kontrol etti.

////////////////////////////////////////////////////////////////////////////////
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1 === array2){
    console.log("Esit"); // Esit
}
else {
    console.log("Esit degil.");
}
// referans veri tipi oldugu icin bellekte ayni adresi gostermedigi icin "Esit Degil" cikti.
////////////////////////////////////////////////////////////////////////////////
const person1 = {
    name_ : "Volkan",
    age : 26
}

const person2 = {
    name_ : "Volkan",
    age : 26
}

if(person1 === person2){
    console.log("Esit"); // Esit
}
else {
    console.log("Esit degil.");
}
// yine adres kiyasladigi icin esit degil cikti.
////////////////////////////////////////////////////////////////////////////////
const cities = new Map();

cities.set("Mugla",48);
cities.set("Ankara",06);
cities.set("Adana",01);

console.log(cities.get("Ankara")); // 6 
//                                     Cunku adres degil, deger tutuyor.

// ama map icindeki deger primitive yerine referans tipli olursa:
cities.set([1,2,3,4],"Array");
console.log(cities.get([1,2,3,4])); // undefined
// bu iki satirdaki [1,2,3,4] icin her array yazilisinda farkli adresler tutuluyor

// bunun cozumu tek adres tutmak, yani bir degere esitlemek
const key = [1,2,3,4];
cities.set(key,"Array2");

console.log(cities.get(key)); // Array2. Simdi bulabildi.

