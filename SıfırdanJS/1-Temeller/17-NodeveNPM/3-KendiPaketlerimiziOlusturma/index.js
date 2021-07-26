// Package.json dosyasi 
//     bizim js projelerimizin manifesto dosyasidir.
//     olusturdugumuz herbir uygulama kendi icinde bir pakettir ve bu paketin de birden cok pakete ihtiyaci olabilir.
// yani, biz bir uygulama gelistirdigimiz zaman bir tane paket olusturmus oluyoruz.


// package.json da bizim paketimizin ne gibi paketlere ihtiyac duyacagini veya bu uygulamanin ne gibi ozelliklere sahip olacagini tutan json dosyasi.

// npm init diyerek package.json'i npm'in olusturmasini saglayabiliriz.

// terminalden "npm init" dedigimizde karsimiza sorular gelicek.

/*
package name : volkan-karakus
description : Deneme packagei
entry point :  (default olarak ana dosyanin index.js oldugunu soyluyor ama buraya app.js yazarsak ana dosya bu olur.)
test command : (test komutu - bunu daha sonra yapicagimiz icin direkt olarak enterladik)
git repository : (proje kaynak kodlarinin oldugu github repository'si)
keywords : npmjs uzerinden projeyi yayinladigimizda projenin bulunmasini saglayan keywordler (deneme,paket vs)
author : Volkan Karakus
lisence : "ISC"

bunlari enterlayinca package.json dosyamiz olusmus oldu.

*/

// package.json dosyamiz olustu. script bolumune key'e gore atamalar yapabiliriz
  // ornegin script'e "volkan" : "echo Benim adim Volkan." diye birsey ekledik. bunu da terminalde "npm run volkan" diye calistirabiliriz
  
// bir tane index.js olusturup bunu package.json icinde mainini "index.js" yaparak calistirabiliriz.
// script'e "start" : "node index.js" yapip console'a "npm run start" olarak kullanabiliriz.

console.log("Bu index.js dosyasi");

// paket eklemek icin yine terminale "npm install simple-is" yapiyoruz


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// projeye birseyler ekledikce node_modules'umuz degisicek.
//  package-lock.json dosyasi bu degisimleri gosteren dosya.

// sadece gelistirme ortaminda kullanicagimiz bir webpack dosyasi kuralım 
    //  npm install webpack-cli --save-dev yaptigimizda devDependencies olarak gozukur.



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// olusturdugumuz paketi github ve npmjs.com'a yukleyelim

// github.com'dan repository acinca gelen url SSH'ini kopyalayip, package.json'a gelip :
/* 
"repository" : {
  "type" : git,
  "url" : buraya da kopyaladigimiz url'yi yapistiriyoruz.
   
}
 simdi terminal acip, github.com'dan kurdugumuz repository ilk satir kodunu terminale yaziyoruz. (burasi readme.md dosyasi olusturma)
 sonra package.json ve node_modules dosyalarini silebiliriz
 "git init" ile git'imizi baslatiyoruz
 "git add ." ile butun dosyalarimizi eklemis olduk.
 "git commit -m "First Commit"" ile degisiklik yaptigimiz dosyalari belirtiyoruz
 "git remote add origin https://github.com/volkaankarakus/deneme.git"   adresiyle hangi repository'ye aticagimizi soyluyoruz
 "git push -u origin master"  ile master branchine gonderiyoruz.

 YOUTUBE BARIS ASLAN GITHUB DERSLERİ
*/

/////////////////////////////////////////////////////////////////////////
// KENDI PAKETINI NPMDE PAYLASMA 
/*

"npm login" ile login ol
"npm publish" yaparsam butun paketi yayinlamis oluyoruz.

daha sonra bunu VSCode da yeni bir projede terminal acip " npm install projeAdi " seklinde indirebiliriz.

Paket Silmek icin :
"npm login" den sonra "npm unpublish projeAdi --force"

*/

















