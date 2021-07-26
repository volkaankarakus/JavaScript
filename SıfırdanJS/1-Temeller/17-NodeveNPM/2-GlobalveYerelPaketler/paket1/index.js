console.log("Paket1");

// npm install simple-is yaparak npm modulunu indirdik 
  // ama bu local'de calisir yani paket2'yi gormez.

//bunu global hale getirmek icin once global paketlerin nerde oldugunu bulalim : baslat > cmd > npm root -g
    //  C:\Users\VolkanKarakuş\AppData\Roaming\npm\node_modules'teymis.
    
// bu adrese paket kurabiliriz ama program urun kismina cikicagi zaman bu paket bilgisayarda kalacagi icin hata verir.
    // o yuzden paketleri local olarak dosya icinde kurmak daha mantikli.

// C:\Users\VolkanKarakuş\AppData\Roaming\npm\node_modules'teki dosyayi windows'a tanitmak icin yeni bir dosya gezgini aciyoruz.
// bilgisayar'a sag tikla >  ozellikler > gelismis sistem ayarlari > ortam degiskenleri > 
       // windows'un bu global paketleri bulabilmesi icin buraya bir PATH eklememiz gerekiyor. 
       // > Yeni >  Degisken adi : NODE_PATH , Degisken : C:\Users\VolkanKarakuş\AppData\Roaming\npm\node_modules
       //  Simdi komple VS Code'u kapat, gorev yoneticisinden VS Code ile ilgili herseyi kapat.( PATH'in terminale yansimasi icin yaptik )

       // son asama : tekrar VS Code'u acip herhangi bir terminalde " npm install -g simple-is " yapmak.









const is = require("simple-is");


console.log(is.number(48));

