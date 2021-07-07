console.log(this); // window objesi 

// window objesinin icinde setTimeout ve setInterval methodlari var.


// SetTimeout
//   belli bir islemi belli bir saniye sonra baslatabiliyoruz
setTimeout(function(){
    console.log("Naber");
},2000); // sayfayi yeniledikten 2 saniye sonra console'a naber yazdirdik.


// SetInterval
//  verilen deger araliklarinda fonksiyonu tekrar tekrar calistir.

let i = 0 ;
let value = setInterval(function(){
    i++;
    console.log("Sayi :",i);
},1000);

// setInterval'i clearInterval ile durdurabiliriz
// butona basildiginda clearInterval'in calismasini istiyorsak 
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
})