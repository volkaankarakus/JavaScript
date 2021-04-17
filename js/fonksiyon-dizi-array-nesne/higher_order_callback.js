let person = {

    ad : 'volkan',
    yas : 30,
    evliMi : false,
}

console.log(person.ad)

//person'un ne olduguna bakalim.
console.log(typeof person)

//bu kontrolu tersten de yapabiliriz. Acaba person object mi degil mi diye . false ya da true doner
console.log(person instanceof Object)

//****************************************************************
let renk=['kirmizi']
console.log(renk[0])
console.log(typeof renk)
console.log(renk instanceof Object) // Aslinda bizim baska konu gibi gordugumuz Array'ler de birer Object'mis.
console.log(renk instanceof Array) // object icin de array icin de true doner.

//****************************************************************
const fonksiyon=function(){
    console.log('merhaba dunya')
}

fonksiyon()
console.log(typeof fonksiyon) //function doner.
console.log(fonksiyon instanceof Object) // fonksiyonlar da Object'tir. true dondu.

//****************************************************************
// SORU 
// Asagidaki kod cikisinda 'sayi' ciktisinin degeri nedir ?

let sayi=5
const fonk =function(sayi){
    sayi=sayi*2
    return sayi
}
console.log(fonk(sayi))      // 10
console.log(sayi)            // 5

// sayinin degeri degismedi hala 5 kaldi. Cunku primitive tiplerde sayinin kendisini degil
//  kopyasini olusturuyoruz.
let myDizi=[1,2,6,80,4]
const diziElemanlariniIkiyleCarp = function(dizi){
    let geciciDizi=[]
    for (let i=0;i<dizi.length;i++){
        geciciDizi[i]=dizi[i]*2
    }
    return geciciDizi 
}             // ana array bozulmasin diye boyle yaptik.

console.log(diziElemanlariniIkiyleCarp(myDizi))
console.log(myDizi) 

