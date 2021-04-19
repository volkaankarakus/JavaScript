const sayilar =[1,2,3,4,5]


// genel sekli itibariyle :

//    sayilar.reduce(function(previousValue,currentValue,currentIndex){


//    },initialValue)

const sonuc = sayilar.reduce(function (toplam,curr,index ){
    return toplam =toplam + curr
},0)
console.log(sonuc)

/////////////////////////////////////////////////////////////////////////////
// daha once map islemiyle dizileri 2 3 4 katina carpmistik. 
// bunu reduce ile yapalim.

// reduce fonksiyonu en genel ve en kullanisli fonksiyondur.

// once map'li halini yapalim. 
const yeniDizi=sayilar.map(function (sayi){
    return sayi*2
})

console.log(yeniDizi)
// simdi map kullanmadan map gorevi goren reduce'u yazalim.
const yeniDiziwithReduce = sayilar.reduce(function (dizininOncekiHali,oankisayi){
    dizininOncekiHali.push(oankisayi*5)
    return dizininOncekiHali
},[])

console.log(yeniDiziwithReduce)