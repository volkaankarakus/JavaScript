const kisiler = [

    {id:1,ad:'volkan'},
    {id:2,ad:'volkan1'},
    {id:3,ad:'volkan2'},
    {id:4,ad:'volkan3'},
    {id:5,ad:'volkan4'},
    {id:6,ad:'volkan5'},
    {id:7,ad:'volkan6'},
    {id:8,ad:'volkan7'},
    {id:9,ad:'volkan8'},
    {id:10,ad:'volkan9'},
]

const ucuncuID = kisiler.find(function (kisi)){
    return kisi.id===3            //id:3 olan kisiyi bulma
}

console.log(ucuncuID)

/////////////////////////////////////////////////////////
///////// find methodunu kendimiz yazalim.

function findMethod (kisiler) {
    for(let i=0;i<kisiler.length;i++){
        if(kisiler[i].id===11){
            return kisiler
        }
    }
}
console.log(findMethod(kisiler))

/////////////////////////////////////////////////////////
// hem diziyi hem de bulucagimiz elemani alan find fonksiyonumuzu yazalim.

function kendiFindMethodum(kisiler,aranilanDeger){
    let bulunanEleman=undefined
    for (let i=0;i<kisiler.length;i++){
        if(aranilanDeger(kisiler[i])){
            return kisiler[i]
        }
    }
    return bulunanEleman
}

const sonuc = kendiFindMethodum(kisiler,function (kisi){
    return kisi.id===5
})

console.log(sonuc)

/////////////////////////////////////////////////////////////////////////////////////////////////

///////////////// EVERY METHODU /////////////////////////////////////////

//bir dizide butun elemanlarin sarta uymasi durumunda True, uymazsa False dondurur.
const sayilar =[3,5,6,8,10,20]

const sonuc = sayilar.every(function (sayi){
    return sayi<15
})
console.log(sonuc)

///////////////// SOME METHODU /////////////////////////////////////////
// dizide bir elemanin bile sarta uymasi yeterli.

const sayilar2 =[3,5,6,8,10,20]

const sonucSome= sayilar2.some(function (sayi){
    return sayi<15
})
console.log(sonucSome)





