// dizi elemanlarinin siralanmasi

const isimler = ['volkan','gungor','emre','berkay','hasan']

const sayilar=[1,50,2,60,66,89,101,3,20]

const ogrenciler = [
    {id : 12, isim:'volkan',yas: 25},
    {id : 14, isim:'emre',yas : 35},
    {id : 19, isim:'ali',yas : 38},
    {id : 50, isim:'ayse',yas : 19},
    {id : 1, isim:'fatma',yas : 26},
    {id : 24, isim:'huseyin',yas : 21},
    {id : 92, isim:'leyla',yas : 33},
]

// string diziyi a'dan z'ye siralama
const adanzyeSiraliDizi=isimler.sort()
console.log(isimler)
console.log(adanzyeSiraliDizi)

// string diziyi z'dan a'ya siralama
const zdenataSiraliDizi=adanzyeSiraliDizi.reverse()
console.log(zdenataSiraliDizi)

// z'den a'ya siralamayi hizli bir bicimde yaparsak
zdenAyaHizliSort=isimler.sort().reverse()
console.log(zdenAyaHizliSort)

/////// sayilari kucukten buyuge siralama
const kucuktenBuyuge=sayilar.sort()
console.log(kucuktenBuyuge)
//direk sort yapinca [1, 101, 2, 20, 3, 50, 60, 66, 89] boyle verdi. yani 101<2 olarak gordu. bunu duzeltmek icin

const kucuktenBuyugeDogruSekilde=sayilar.sort(function (a,b) {
    return a-b
})
console.log(kucuktenBuyugeDogruSekilde)
// simdi dogru sonucu aldik : [1, 2, 3, 20, 50, 60, 66, 89, 101]


/////// sayilari buyukten kucuge siralama
const buyuktenKucugeDogruSekilde=sayilar.sort(function (a,b) {
    return b-a
})
console.log(buyuktenKucugeDogruSekilde)

/////// nesneleri kucukten buyuge siralama
const ogrencilerKucuktenBuyuge=ogrenciler.sort(function (a,b){
    return a.id-b.id
})
console.log(ogrencilerKucuktenBuyuge)

/// bu sefer ID yerine isimleri siralayalim
// isimleri siralarken fonksiyona string uzerinden a-b veremem 
// sort fonksiyonun dondurdugu sey pozitif,negatif ya da 0'i dondurdugu icin string siralamalari if'le yapabiliriz

const ogrencilerIsmeGoreSirala= ogrenciler.sort(function (a,b){
    if(a.isim<b.isim){
        return -1
    }
    else if(a.isim>b.isim){
        return 1
    }
    else 
        return 0
})
console.log(ogrencilerIsmeGoreSirala)

// yukaridaki ogrencilerIsmeGoreSirala'yi tek satirda yazmak istersek :
// const ogrencilerIsmeGoreSirala= ogrenciler.sort(function (a,b){ return (a.isim<b.isim) ? -1 : (a.isim>b.isim ? 1 : 0)



