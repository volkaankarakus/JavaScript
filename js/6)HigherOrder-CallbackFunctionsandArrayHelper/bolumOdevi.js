// SORU 1
// Sehirler diye bir dizi olusturun. Her dizi elemani sehirler ile ilgili bilgiler icermektedir.
// Bu bilgiler sehrin adi, plaka numarasi ve sehrin komsulari olabilir.

// diziyi olusturduktan sonra sehir adlarina gore z'den a'ya siralayip ekrana yazdirin.

const sehirler =[
    {sehirAdi:'adana',plakaNumarasi: 01,komsular:['Antakya','Mersin']},
    {sehirAdi:'mugla',plakaNumarasi: 48,komsular:['Antalya','Denizli']},
    {sehirAdi:'izmir',plakaNumarasi: 35,komsular:['Manisa','Kutahya']},
    {sehirAdi:'istanbul',plakaNumarasi: 34,komsular:['İzmit','Edirne']},
]

const sehirIsimlerineGoreSirala= sehirler.sort(function (a,b){
    if(a.sehirAdi<b.sehirAdi){
        return -1
    }
    else if(a.sehirAdi>b.sehirAdi){
        return 1
    }
    else 
        return 0
})
console.log(sehirIsimlerineGoreSirala)

// *****************************************************************************************************************
// SORU 2
// Kullanicidan alinan degere kadar olan sayilar dizisini fibonacci seklinde yazdirin.
// fibonacci ornek 0 1 1 2 3 5 8 13 21 ....
// iki sayinin toplami bir sonraki sayiyi olusturuyor.

// reduce ile yapamayiz cunku elimizde bir dizi yok, o yuzden klasik fonksiyon mantigiyla yapicaz.

function fibonacci(sayi){
    let sonucDizi=[0,1]
    for (let i=2;i<sayi;i++){
        const oanHesaplananSayi=sonucDizi[i-1]+sonucDizi[i-2]
        if (oanHesaplananSayi<sayi){
            sonucDizi[i]=oanHesaplananSayi
        }
        else {
            break
        }
    }
    return sonucDizi 
}
console.log(fibonacci(50))

// *****************************************************************************************************************
// SORU 3
// Ogrencileri tutan bir dizi olusturun
// Herbir ogrenci nesnesinde ad,soyad ve ID degerleri olmali.
// ID numarasi cift olan ogrencilerin ad ve soyadini birlestirilmis halde tutan diziyi a'dan z'ye dogru yazdirin.
// Bunlari yaparken map,filter,sort metodlarini kullanin.
// Islem bittikten sonra bu kodlari arrow function ve zincirleme hale donusturun.


const students = [
    {ad :'volkan',soyad :'karakus',ID:1},
    {ad :'hasan',soyad :'nal',ID:2},
    {ad :'veli',soyad :'kazak',ID:3},
    {ad :'firat',soyad :'nehir',ID:4},
    {ad :'hamdi',soyad :'kara',ID:5},
    {ad :'emek',soyad :'koca',ID:6},

]


const ciftID=students.reduce(function (dizininOncekiHali,oankiSayi){
    if (oankiSayi.ID % 2 ===0){
        dizininOncekiHali.push(oankiSayi)
    }
    return dizininOncekiHali 
},[])
console.log(ciftID)

const adSoyad=ciftID.map(function (ad){
    return ad.ad + ' ' + ad.soyad
})
console.log(adSoyad)

const adsoyadAdanZye=adSoyad.sort()
console.log(adsoyadAdanZye)

////////////////////////////////////////////////////////////////////////////////////////////////
// kisa hali
const sonuc =students.filter(ogrenci => ogrenci.ID % 2 ===0)
                    .map(ogrenci => ogrenci.ad + ' '+ ogrenci.soyad)
                    .sort()
console.log(sonuc)

