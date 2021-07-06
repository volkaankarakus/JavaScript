// Http Response Status Code diye arat, detaylara bak.
// Http Status:
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error


// Ready State :
// Holds the status of the XMLHttpRequest.
// 0: request not initialized                     (herhangi bir istekte bulunulmadi)
// 1: server connection established               (server baglantisi basarili)
// 2: request received                            (request alindi)
// 3: processing request                          (server requesti aldi ve islemeye basladi)
// 4: request finished and response is ready      (response hazir)

// AJAX: Asenkron olarak veri alip-gondermemizi saglayan teknoloji.

//butonu secip, buna bir click eventi atayalim.Daha sonra burada Ajax islemimizi gerceklestiricez
document.getElementById("btn").addEventListener("click", function(){
    // xmlHttpRequest objesinden bir obje olusturursak Ajax islemimizi gerceklestirebiliriz demistik

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    console.log(xhr); 
    /*
    icinde readyState:0 yani herhangi bir server'a baglanmadik
    bir text geldiginde responseText'ten bunu alabiliyoruz.Bu string veriyi JSON.parse ile JSON'a cevirebiliyoruz
    eger veri XML'se responseXML'e gelicek. 

    Bunlara da w3schools'tan XMLHttpObjectProperties'ten bak.
     */


    // xhr icindeki readystate degistikce bu fonksiyon calistirilacak.
    xhr.onreadystatechange = function(){
        
        // console.log(this.readyState); // artik bu "this" window'u degil XMLHttpRequest() objesini gösterecek.
        /*
        butona basilinca console.log'tan 1 2 3 4 seklinde degerler(readyStateler) geldi.
        1- serverla baglantiyi sagladik.
        2- istegimiz isleme alindi.
        3- istegimiz alindi ve islenmeye basladi.
        4- istegimiz bitti ve response'umuz geldi.
        */

        // console.log(this.status);
        /*
          cikti olarak 0 ve uc tane 200 yazdi.
          1 oldugunda baglantiyi sagliyoruz ve herhangi bir request gondermedigimiz icin 0 sonucunu aldik. 
             yani "status" herhangi bir degere sahip olmadi.
        
          diger durumlarda istegimizi gerceklestirdigimiz icin ve oyle bir URL adresimiz oldugu icin 200 yani OK sonucunu almis olduk.

        */

        // artik veri transferini yaptik ve response bize geliyor. peki text'i nasil alicaz??
        //      bunu alabilmek icin bir kontrol yapmam gerekiyor
        if(this.status == 200 && this.readyState == 4){
            // Response Hazir
            console.log(this.responseText); // ile text'i yazdirabiliriz.
        }

    }
    // yukarida yapilan onreadystatechange'e fonksiyon atamak eski bir yontem. 


    //////////////////////////// ONLOAD ////////////////////////////
    // bunun haziri var ( readyState = 4 => onload )
    xhr.onload = function () {
        console.log(this.readyState); // Her zaman 4. onload'a girme sarti bu.
        if ( this.status === 200){
            console.log(this.responseText);
        } 
    }

    //////////////////////////// ONPROGRESS ////////////////////////////
    // readyState = 3 oldugunda calisicak.
    xhr.onprogress = function(){
        console.log("Process Isleniyor..", this.readyState);  // 3
    }
    
    ////////////////////////////////////////////////////////////////////
    // son olarak div'imize aldigimiz text dosyasini yazdirmaya calisalim
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }



    // bir tane xmlHttpRequest olusturduk. Simdi open ile baglanti acicaz(hangi request yapicagimizi soyleyerek) get-post gibi
    xhr.open("GET","example.txt",true); // dosyadan veri alinacagi icin "get". son parametre asenkron:true

    // artik baglantiyi actik. Simdi requesti "send" ile gondermemiz gerekiyor.
    xhr.send();// "get" oldugu icin herhangi bir string deger vermiyoruz."post" olsaydi icinde deger gondermek zorunda kalicaktik.

});
