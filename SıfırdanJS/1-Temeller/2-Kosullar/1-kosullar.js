// Karsilastirma Operatorleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log(2==2); //true
console.log("js"=="java"); //false
console.log(2=="2"); //string number karsilastirmasinda, number'i stringe cevirir. cevap : true.
console.log(2==="2"); // bu false doner.

// MANTIKSAL BAGLACLAR
// Not Operatoru
console.log(!(2 == 2));

// And Operatoru
console.log((2==2) && ("Volkan"=="Volkan"));

// Or Operatoru
console.log((2==2) || ("Volkan"=="Volkan"));

//////////////////////////////////////////////////////////////////////////
const error=true;

if(error==true){
    console.log("Hata Olustu..");
}
else{
    console.log("Hata Olusmadi..");
}

// Ternary Operator
const number =120;
console.log(number === 100 ? "Sayi 100dur" : "Sayi 100 degil.");
