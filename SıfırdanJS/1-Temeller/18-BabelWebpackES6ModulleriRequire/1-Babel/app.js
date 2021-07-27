// BABEL
//     babel, projeleri ES5'e cevirerek tercumanlik yapar.(transpiler ya da compiler)

// babel'i terminalden kullanmak icin npmjs'ten "babel cli" i projemize dahil edicez.

// babel cli
// babel core 
// babel polyfill
// babel preset env i eklicez



// npm init
// npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env --save-dev

// artik paketler yuklendi. 
// babel'i kullanmak icin : .\node_modules\.bin\babel   (localde babeli bu sekilde kullanabilicez)

/*
babel'i nasil kullanicagimiza bakmak icin kendi sitesine gidelim > Usage > CLI:
    bizim src dosyamiz varsa, onun altinda da ES6,ES7 veya son surumler icin kodlar varsa 
    ./node_modules/.bin/babel src -d lib   ile lib altindaki ayni isimle ES5 ile cevirmis oluyoruz.

bizim preset'e ES6 ve sonrasini cevir dememiz gerekiyor.ve bu preset icin de configuration file'ini olusturmamiz gerekiyor
    yani bizim ".babelrc" adinda configuration file olusturmamiz gerekiyor.

    > New File > .babelrc 

    Daha onceden preset-env'i indirmistik. yani bizim babel'a bunu soylememiz gerekiyor. Onun icin .babalrc configurasyon dosyasina :
        {
            "presets": ["@babel/preset-env"]
        } 
                                                     i yapistiriyoruz.

*/

// bir tane src dosyasi aciyoruz . bunun icine test1.js, test2.js acip icerisine rastgele kodlar yazdik.
// daha sonra terminalde : .\node_modules\.bin\babel src -d lib (src'nin altindaki dosyalara bak, bunlari -d ile donusturerek lib'in altina gonder)

// artik lib diye bir dosya otomatik olusturuldu, test1.js ve test2.js de icinde donusturulmus sekilde.

// yukaridaki komutu surekli yazmayalim diye bunlari package.json() icine de ekleyebiliriz.
  // "scripts" icerisine "build" acarak icine de : "babel src -d lib" yazarsak babel burada calisir.( terminalde npm run build yaptigimiz zaman)