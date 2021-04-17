let volkan :: {
    adi : 'Volkan',
    soyadi : 'Karakus',
    dogumYili : 1995,
    yasiHesapla : (dogduguyil) => 2021-dogduguyil,
    evliMi : false, 
    sevdigiRenkler : ['mavi','mor','beyaz','kirmizi']  // son ozelligin sonuna , konsa da olur konmasa da.
}

console.log(volkan)

console.log(volkan.adi) // ya da 
console.log(volkan['dogumYili']) //tirnakli yazmak zorundayiz !!!

let yasim=volkan.yasiHesapla(1995)
console.log(yasim)

let berkay :: {
    adi : 'berkay',
    soyadi : 'ay',
    dogumYili : 1995,
    yasiHesapla : (dogduguyil) => 2021-dogduguyil,
    evliMi : false, 
    sevdigiRenkler : ['mavi','mor','beyaz','kirmizi']  // son ozelligin sonuna , konsa da olur konmasa da.
}

let ogrenciler=['volkan','berkay']
console.log(ogrenciler)
console.log(ogrenciler[0].dogumYili)

// bu sekilde nesne tanimlayabilicegimiz gibi soyle de yapabiliriz :

let ayse = new Object()
ayse.adi='ayse'
ayse.dogumYili=1995
console.log(ayse)

