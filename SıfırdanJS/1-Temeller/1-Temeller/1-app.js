alert("Javascripte Hosgeldiniz");
var a=10;
alert(a);

console.log("Merhaba Javascript");

// Degisken Olusturma 
var a=20;

//Primitive Veri Tipleri

var a=10;
var name="Volkan"
var esmerMi=true;
var d =null;

var e;
e=30;

//Reference Veri Tipleri (typeof'u object olan hersey reference veri tipidir)

var numbers=[1,2,3,4,5]

var person={
    name:"Volkan",
    age:"25",
    department:"IoT"
}

var merhaba=function() {
    console.log("Merhaba");
}

console.log(merhaba);


///////////////// examples /////////////////
var a=10;
var b=a;

console.log(a,b);

a=20;
console.log(a,b);
// a ve b degeri primitive olarak tuttugu icin artik a=20, b=10 olarak kaldi.(adresini tutmadi, degerini tuttu)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var c=[1,2,3,4]
var d=c;

c.push(5);
console.log(c,d);  // adres tuttugu icin hem c hem de d degisti.

