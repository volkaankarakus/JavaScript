// js Browserda yasar ve bunun disina cikamaz.
// Hersey Window objesinin altinda.

// DOM : Document Object Model
// Window'un icinde bulunan document'i kullanabilcegimiz object yapisiyla bize modelleyen yapidir.

// Web sayfamiz bir document ise ordaki butun yapilari(head-body-html tagleri vs) bunlari object seklinde modelleyen yapidir.
// DOM sayesinde js de kullanarak burdaki elemanlari okuyabilir, olusturabilir, degistirebilirim.

let deger
deger =window
console.log(deger)  // bu 3 satiri yazdigimizda window dokuman halinde gelir.

//******************************************************************************** 

deger2=window.document // ya da deger2=document de olur.
console.log(deger2) // boyle yaptigimizda js yapisinin calistigi HTML yapisi gelir.

//******************************************************************************** 

deger3=document.all // all methodu eski bir method. web sayfasinda bulunan butun tag'leri yollar.
console.log(deger3) 

//******************************************************************************** 
deger4=document.all.length
console.log(deger4) // cevap 13 cikti. Bu da HTML sayfamda kac tane eleman var, ona bakar(title,body,h1,h2 vs..)

//******************************************************************************** 
// icerideki butun elemanlari yazdiralim
// deger3=document.all dedigimiz yapi aslinda bir dizi degil. Bu yapilara 'dizi gibi' denir ama dizi degildir, once bunu diziye cevirelim.

let dizi=Array.from(deger3) // diziye cevirme
dizi.forEach(function (item){
    console.log(item)
})
console.log(deger)
//********************************************************************************
// head tag'lerine erismek icin
degerHead=document.head
console.log(degerHead)
//********************************************************************************
// body'ye erismek icin
degerBody=document.body
console.log(degerBody)
//********************************************************************************
// domain'e erismek icin
degerDomain=document.domain
console.log(degerDomain)
//********************************************************************************
// URL icin
degerURL=document.URL
console.log(degerURL)
//********************************************************************************
// contentType
degerType=document.contentType
console.log(degerType) // text/html cikti.
//********************************************************************************
// formlarin ID'lerini bulmak istersem
degerID=document.forms[0].id
console.log(degerID)
//********************************************************************************
// linkler icin
degerLink=document.links
console.log(degerLink)
//********************************************************************************
// resmi ve resmin src'sini istersem
degerImage=document.images[0]
degerSrc=document.images[0].src
console.log(degerImage)
console.log(degerSrc)
