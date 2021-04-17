//primitive tipler( degisiklikler birbirinden etkilenmez )

let yas=32
let yeniYas=yas

yas =40

console.log(yas,yeniYas) //40,32 verdi.

let isim='volkan'
let yeniIsim=isim
isim='veli'

console.log(isim,yeniIsim)//veli volkan

//referans tipli
let renkler = [ 'kirmizi','yesil']
let yeniRenkler=renkler

renkler.push('mavi')
console.log(renkler,yeniRenkler) //ciktida ikisinde de mavi var.Cunku degerler degil, adres tabanli tutuluyor.

// **************************************************************
let ogrenci ={

    ad: 'volkan'
    yas: 25
}
let yeniOgrenci=ogrenci
ogrenci.yas=30
console.log(ogrenci,yeniOgrenci) // her ikisi de 30 oldu.

