const sayilar=[1,2,3,4,5,7,76,10]

sayilar.push(8) //dersem 8'i dizinin sonuna ekler.

// const olmasina ragmen eklenmesinin sebebi : ilk tanimlanan array icin olan adresle eklenmis halinin adresi ayni.
//  bu yüzden ayni adrese sadece eleman eklemis olduk.
// peki adres nasil degisir ? bir degiskene esitlemede degisir.

// sayilar =[1,2,3] yapamayiz. yeni bir atama yapilamaz.


// MAP METHODU
// (herbir elemani bana dondurur, icinde istedigim gibi degisiklik yapabilirim ve return'unu yazmam gerekiyor)

const sayilar2=[1,2,3,4,5,6]

const yeniSayilar= sayilar.map( function (sayi) {
    return sayi*2
} )

console.log(sayilar)
console.log(yeniSayilar)
console.log(sayilar)

/////////////////////////////////////
// yeni bir map ornegi

const kitaplar =[
    { adi : '1', sayfaSayisi:30 },
    { adi : '2', sayfaSayisi:40 },
    { adi : '3', sayfaSayisi:80 },
]

const sayfaSay = kitaplar.map(function (kitap) {
    return kitap.sayfaSayisi
} )

console.log(sayfaSay)
 
/////////////////////////////////////

const kisiler=[
    {adi :'volkan', soyadi:'karakus'},
    {adi :'emre', soyadi:'aydin'},
    {adi :'idris', soyadi:'kagan'},
]

const tamIsimler = kisiler.map((kisi) => kisi.adi + ' ' + kisi.soyadi)
console.log(tamIsimler)

/////////////////////////////////////////////
///// KENDI MAP YAPIMIZI YAPALIM

function kendiMapYapim(dizi,islem) {
    const yeniDizi=[]
    for(let i=0;i<dizi.length;i++){
        yeniDizi.push(islem(dizi[i]))
    }
    return yeniDizi
}

const yeniOlusanDizi=kendiMapYapim(sayilar, function(sayi){
    return sayi*5
})
console.log(yeniOlusanDizi)
///////////////////////////////////////////

