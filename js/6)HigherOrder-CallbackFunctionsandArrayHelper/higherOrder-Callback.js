//fonksiyonlar bir Object'tir ve bu sayede bunu degiskene atayabiliyorum.
// hatta fonksiyona bir parametre olarak bile yollayabiliriz.

let Dizi=[1,2,3,4]

const diziyiKopyalaveIkiyleCarp=function (dizi){

    let gecicibirDizi=[]
    for(let i=0;i<dizi.length;i++){
        gecicibirDizi[i]=Dizi[i]*2   // ***************************
    }
    console.log(gecicibirDizi)
}

diziElemanlariniIkiyleCarp(Dizi)
 
//ikiyle carpma, 3le bölme gibi islemlerde sadece yukaridaki ********** satiri degisiyor.
// o zaman bunu daha kisa ve verimli sekilde yazabiliriz. 

// *************************************************************************************************************
let Dizi=[1,2,3,4]

const diziIslemleri=function (dizi,islem){

    let gecicibirDizi=[]
    for(let i=0;i<dizi.length;i++){
        gecicibirDizi[i]=islem(dizi[i])   // ***************************
    }
    console.log(gecicibirDizi)
}


// asagidaki fonksiyonlar first-class function'lardir.
const ikiyleCarp=function (sayi){
    return sayi*2
}

const ikiyeBol=function(sayi){
    return sayi/2
}

const ucEkle=function(sayi){
    return sayi+3
}

//higher-order functionlar : parametre olarak fonksiyon alıp, return olarak fonksiyon donduren fonksiyonlardir.
diziIslemleri(Dizi,ikiyleCarp)
diziIslemleri(Dizi,ikiyeBol)
diziIslemleri(Dizi,ucEkle)
//diziIslemleri icerisinde cagirilan fonksiyonlarda () isareti yok.Cunku cagirilma bu anda degil, diziIslemleri'nde.
//  diziIslemleri icerisinde geri cagirildigi icin bunlara call-back function denir.

 
////////////////////////////////////////////////////////////////////////////
function adimiSoyle(ad,soyad,callback){
    const mesaj='merhaba '+ad.toUpperCase() + ' ' + soyad.toUpperCase()
    callback(mesaj)
}

adimiSoyle('volkan','karakus',mesajGoster)

function mesajGoster(mesaj){
    console.log(mesaj)
}







