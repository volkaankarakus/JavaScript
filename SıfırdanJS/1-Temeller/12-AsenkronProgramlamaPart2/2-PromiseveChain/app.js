// JS'te callback ve promise kullanabiliyoruz. (ikisi de tercih edilebilir ama promise daha avantajli)
// promise yapisi Vuejs gibi javascript frameworklerinde oldukca fazla karsimiza cikar.

function getData(data){ // Promise objesi donduren fonksiyon

    return new Promise(function(resolve,reject){ // diyerek promise objesi donduruyoruz ve icine bir tane callback fonksiyon alir.
        // olumlu donusu yani veriyi resolve ile gonderiyoruz, olumsuz donusu yani hatayi reject ile donduruyoruz

        // promise'in 5sn sonra calismasini istiyorum
        setTimeout(function(){

            resolve("Olumlu sonuc..");
            // reject("Olumsuz sonuc..");

        },5000);



    }); 
}

console.log(getData("Merhaba")); 
/*
10 saniye bekledikten sonra console'daki cikti :
Promise
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Olumlu sonuc.."
*/

getData("Merhaba").then(function(response){ // promise'in olumlu dondugu value degerinde "Olumlu sonuc.." oldugu icin bu response bu stringe esit olucak
    console.log(response) ; // Olumlu sonuc..
})

///////////////////////////////////////////////////////////////////////////////////////////
function getData2(data){ 
    return new Promise(function(resolve,reject){ 
        setTimeout(function(){
            reject("Olumsuz sonuc..");
        },5000);
    }); 
}

getData2("Merhaba").catch(function(err){
    console.log(err); // Olumsuz sonuc..
})
///////////////////////////////////////////////////////////////////////////////////////////
// resolve ve rejecti beraber kullanalim
// int geldiginde hata donsun, string gonderildiginde string donsun 
function getData3(data){ 
    return new Promise(function(resolve,reject){ 
        setTimeout(function(){

            if(typeof data === "string"){
                // Olumlu
                resolve(data);
            }

            else{
                // Olumsuz 
                // reject("Lutfen string bir deger giriniz.."); yerine bunu daha guzel yazabiliriz. error objesi seklinde
                reject(new Error("Lutfen string bir deger girin.."));

            }

        },5000);
    }); 
}

// then ve catch arka arkaya baglanabilir
getData3("Merhaba").then(function(response){
    console.log("Gelen deger :", response);
}).catch(function(err){
    // console.log(err) yerine bunu kirmizi yazdiralim : console.error ile
    console.error(err);
}); // Gelen deger : Merhaba

getData3(24).then(function(response){
    console.log("Gelen deger :", response);
}).catch(function(err){
    console.error(err);
}); // Error: Lutfen string bir deger girin..

// bu fonksiyonu arrow function seklinde yazalim
getData3(35)
.then(response => console.log("Gelen deger :", response))
.catch(err => console.error(err));

///////////////////////////////////////////////////////////////////////////////////////////
// Istersek then icinden de returnle bir deger dondurebiliriz
//     returnle bir deger donduruyorsak bu yine bize bir promise dondurur

function addTwo(number){
    
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            
            if(typeof number ==="number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lutfen bir sayi girin.."));
            }

        },3000);

    });
}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
})                                        // then icinde return dondurdugumuz icin bu da promise olarak geldi. yani tekrar then yapiabilir 
.then(response2 => console.log(response2))
.catch(err => console.error(err));
/*
12
14
*/

// promiselerde yalnizca bir tane catch, birden cok then kullanabiliriz.
// PROMISE CHAIN mantigi






