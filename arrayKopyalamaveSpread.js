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

// ana yapiyi bozmamak icin diziyi kopyalayip islemleri onun uzerinden yapalim
// array kopyalama
let kopya=[]

for (let isim of isimler){
    kopya.push(isim)
}

console.log(kopya)
console.log(isimler)

// for yerine arrayleri kopyalama fonksiyonu Array.from()

kopya2=Array.from(isimler)

// biz eger Array.from() yapmadan direkt olarak esitleseydik, isimleri kopyanin 0. indexinde bir dizi olarak tutacakti.(tensor olarak)
// kopya3=[isimler] dersem butun elemanlar kopya3'un 0. indexinde kalir.( dizi icinde dizi)
// bunun onune gecebilmek icin SPREAD operatoru

kopya3=[...isimler,...sayilar]
console.log(kopya3)

// spread'i bir string ifadenin harf elemanlarini elde etmek icin de kullanabiliriz
const isim='Volkan Karakus'
let harflerDizisi=[...isim]
console.log(harflerDizisi)

////////////////////////////////////////  SORU  ////////////////////////////////////////
// elemanlarin toplamini bulan bir fonksiyon yazalim, ama kac tane eleman girdigini bilmiyor olalim.
// mesela 2 eleman icin s1,s2 yazabilirdik ama bu 4 eleman girilirse patlardi. Bunu spread ile yapabiliriz.

function sayilarToplami(...parametreler){
    let sum=0
    for(let i of parametreler){
        sum+=i
    }
    console.log(sum)
}

sayilarToplami(3,6,20,60,21,555)

////////////////////////////////////////////////////////////////////////////////
