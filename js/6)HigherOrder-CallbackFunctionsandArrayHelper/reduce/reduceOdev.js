const sayilar=[1,2,3,4,5,6,7,8,9,10]

// map,filter,reduce,some,every,find

// sayilar dizisindeki tek elemanlari bulup baska bir diziye aktarin (filter)
// bu yeni dizinin herbir elemaninin karesini alip baska bir diziye aktarin (map)
// bu dizideki 10'dan buyuk olan elemanlarin toplamini ekrana yazdirin (reduce)

// sayilar dizisini parametre olarak alan tek bir fonksiyon olmali ve 
// bu fonksiyon geriye sonucu dondurmelidir.

// for-while donguleri yasak.

function sonucuBul(sayilar) {
    const tekElemanlariIcerenDizi = sayilar.filter(function (sayi) {
        return sayi %2 !== 0
    } )
    console.log('tek elemanli dizi :'+tekElemanlariIcerenDizi)


    const sayilarinKaresi=tekElemanlariIcerenDizi.map(function (sayi){
        return sayi*sayi
    })
    console.log('sayilarin karesi :'+sayilarinKaresi)

    const toplam=sayilarinKaresi.reduce(function (genelToplam,sayi){
        if(sayi>10){
            return genelToplam=genelToplam+sayi
        }
        else{
            return genelToplam
        }
    },0)

    return toplam

}

console.log(sonucuBul(sayilar))


////////////////////////////////////////////////////////////////////////
// BU SORUNUN KISAVERSIYON KODU

function kisaVersion(sayilar){
    return sayilar.filter(sayi => sayi % 2 !==0)
    .map(sayi => sayi * sayi)
    .reduce((genelToplam,sayi) => sayi > 10 ? genelToplam+=sayi :genelToplam,0)
}

console.log(kisaVersion(sayilar))




