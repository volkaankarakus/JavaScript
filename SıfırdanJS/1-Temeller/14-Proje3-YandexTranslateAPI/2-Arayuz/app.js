// Prototype, Ajax, Callback


eventListeners();

function eventListeners(){
    // ilk olarak butona basildiginda kelime cevrilsin istiyoruz, bunun icin bu formu secelim : id'si "translate-form"
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    // bir event daha olmasi gerekiyor. Almanca,Ingilizce,Ispanyolca select list'lerinden birine basilinca bayrak resmi ve texti degisicek.
    // Change . addEventListener'la yapinca her browser desteklemiyor, o yuzden .onchange() ile yapiyoruz.
    document.getElementById("language").onchange = function(){ // select list'in id'si : "language"
        
        // Arayuz Islemleri
        console.log("onchange'deyiz");
        ui.changeUI();

    }


}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);

const ui = new UI();

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,getElementById("language").value)
    translate.translateWord(function(err,response){
        if(err){ // null gelmedigi surece string gelse bile true olarak sayilir.
            // Hata
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }
    });


    e.preventDefault(); // sayfanin yenilenmesini engellemek icin
}