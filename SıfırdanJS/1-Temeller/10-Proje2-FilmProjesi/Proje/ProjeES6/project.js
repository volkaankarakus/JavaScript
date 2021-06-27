// form'a basildiginda o bolgenin secilmesi gerekiyor.
// index.html'den baktigimizda form id = "film-form"

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title"); //name'i title
                         // getElementById ile id'sini de baz alabilirdik
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// ES6 ile obje uretmemize gerek kalmadi cunku storage ve ui'da static olarak yazdik. 
// asagidaki objeler artik yorum satiri

// // ui.js'de tanimladigimiz UI objesini baslatalim
// const ui = new UI();

// // Storage Objesi Uretme 
// const storage = new Storage();

// Filmi Sil butonu icin 2. card-body'yi secmemiz gerekiyor.
const secondCardBody = document.querySelectorAll(".card-body")[1];

// Butun Filmleri Silmek icin id'si "clear-films" olan butonu secelim
const clear = document.getElementById("clear-films");

//////////////////////////////////////////////////////////////////////////////////////////////////
// YUKARIDA NESNE SATIRLARI YORUMA ALINDI
// ASAGIDADA ui. ya da storage. GİBİ KODLAR ARTIK NESNESİZ CAGIRILDIGI ICIN UI ve Storage oldu.
/////////////////////////////////////////////////////////////////////////////////////////////////

// Tum eventleri yukleme 
eventListeners();

function eventListeners(){
    
    form.addEventListener("submit",addFilm);

    // sayfa yuklendiginde filmler yuklensin
    document.addEventListener("DOMContentLoaded",function(){
        // storage'dan getFilmsFromStorage'i cagirip ui'da loadAllFilms'e gonderelim
        // let films = storage.getFilmsFromStorage();
        let films = Storage.getFilmsFromStorage(); // obje kullanmadigimiz icin Storage'dan cekebiliyoruz

        //ui.loadAllFilms(films); yerine artik objesiz direkt olarak UI uzerinden
        UI.loadAllFilms(films);

    });

    // filmi sil icin 
    secondCardBody.addEventListener("click",deleteFilm);

    // butun filmleri sil icin
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director ==="" ||url ===""){
        // Hata Alerti
        UI.displayMessages("Tum Alanlari doldurun..","danger");
    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url); 

        // Arayuze Film Ekleme
        UI.addFilmToUI(newFilm);

        // Storage'a Film Ekleme
        Storage.addFilmToStorage(newFilm); 

        // Alert Mesaji
        UI.displayMessages("Film Basariyla Eklendi..","success");
    }


    // film ekledikten sonra inputlari bosaltalim ki 
       // yeni input icin bos bir input alani olsun.

    UI.clearInputs(titleElement,urlElement,directorElement);


    e.preventDefault();
}

function deleteFilm(e){
    console.log(e.target); // click'i Filmi Sil butonuna bastigimizda verdigi cikti :
                            // <a href="#" id ="delete-film" class="btn btn-danger"> Filmi Sil </a>

    // bu click'e basildiginda tum tr'yi kaldirmak istiyoruz
    //   bunun icin de tr'den td'ye ; td'den de tr'ye gitmem gerekiyor( 2 kere parent element)

    if(e.target.id ==="delete-film"){
        UI.deleteFilmFromUI(e.target); 
        
        // simdi de filmi storage'dan silelim. Bunu filmTitle'ini baz alarak yapalim
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme islemi basarili...","success");
    }
}

function clearAllFilms() {

    if(confirm("Tum Filmleri Silmek İstediginize Emin misiniz ?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();

    }
    
}