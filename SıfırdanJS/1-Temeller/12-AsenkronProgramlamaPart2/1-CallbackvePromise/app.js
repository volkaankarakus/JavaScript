// bir tane programimiz olsun. Programimizdan bir tane restAPI'sine istekte bulunalim.(veri alma-gonderme gibi)
// istekte bulundugumuz fonksiyon getData seklinde olabilir.
// istekte bulununca biz : PENDING durumundayiz. bu durumda getData kendi icinde bir tane PROMISE objesi olusturuyor.
// PROMISE aslinda objeden baska birsey degil.

// PROMISE icerisindeki onemli 2 deger : 
// 1- state : istegi atip bekledigiz icin suan state PENDING durumunda
// 2- value : pending durumunda herhangi bir deger donmedigi icin ilk basta "undefined"

// daha sonra diyelim ki getData, veriyi aldi. Bu veri bize PROMISE ile donuyor.
// resolve dondugunde artik state:"resolved" ya da "fullfilled",
//                         value : resolve icerisinde gonderilen deger.


// 1. DURUM : PENDING
// 2. DURUM : RESOLVED YA DA FULLFILLED
// 3. DURUM : veri almada bir sikinti cikmis olabilir. Bu sefer fonksiyondan bize donen yol "resolve" yolu degil.
            // "reject" yolu ile doner. reject icerisinde bir tane error mesajimiz olabilir.
            // reject donerken promise icerisindeki 2 deger :    state: rejected, value : reject icerisindeki error mesaji
            

// mesaj geri dondugu zaman programimiz bunu nasil alacak ?
// "resolve" olmussa biz bunu THEN,
// "reject" durumu varsa CATCH ile alicaz.


