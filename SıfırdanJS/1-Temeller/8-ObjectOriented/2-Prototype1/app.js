// PROTOTYPE

// JS'in C#, Java gibi dillerden farki: javada class olusturup 
//                                        sonra bu classtan obje olusturuyoruz.

//JS'te class tabanli bir dil degil. Prototype tabanli bir dil.
//   ES6'da class gibi yazicaz ama arka tarafta Prototype'a donusturulecek.

// JS'de constructor olusurup daha sonra buradan obje olusturduk.
//   Bu objelerin de icinde bir prototype ozelligi bulunur.


// en temel obje uretme sekli :
const obje = new Object();
obje.name = "Mustafa";
console.log(obje);
/*
Objectname: "Mustafa"
           __proto__: Object
                constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

Icerisinde prototype varmis. prototype de object oldugu icin icinde metodlar var.
*/

// Olusturulan her object icinde ortak prototypeler oldugunu gorduk.
//  Her object'de bu ortaksa : bizim yapicagimiz projede ortak olan metodlar varsa
//    bunu prototype icine koyabiliriz. 
//      Boylece yeni olusturulacak her object icinde hazir olusturulmus olur.

// Prototype icinde de bir prototype vardir. 
//     Bu sayede de kalitimi gerceklestirebiliyoruz.


