// form'a basildiginda o bolgenin secilmesi gerekiyor.
// index.html'den baktigimizda form id = "film-form"

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title"); //name'i title
                         // getElementById ile id'sini de baz alabilirdik
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// ui.js'de tanimladigimiz UI objesini baslatalim
const ui = new UI();

// Storage Objesi Uretme 
const storage = new Storage();

// Filmi Sil butonu icin 2. card-body'yi secmemiz gerekiyor.
const secondCardBody = document.querySelectorAll(".card-body")[1];

// Butun Filmleri Silmek icin id'si "clear-films" olan butonu secelim
const clear = document.getElementById("clear-films");




// Tum eventleri yukleme 
eventListeners();

function eventListeners(){
    
    form.addEventListener("submit",addFilm);

    // sayfa yuklendiginde filmler yuklensin
    document.addEventListener("DOMContentLoaded",function(){
        // storage'dan getFilmsFromStorage'i cagirip ui'da loadAllFilms'e gonderelim
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

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
        ui.displayMessages("Tum Alanlari doldurun..","danger");
    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url); 

        // Arayuze Film Ekleme
        ui.addFilmToUI(newFilm);

        // Storage'a Film Ekleme
        storage.addFilmToStorage(newFilm); 

        // Alert Mesaji
        ui.displayMessages("Film Basariyla Eklendi..","success");
    }


    // film ekledikten sonra inputlari bosaltalim ki 
       // yeni input icin bos bir input alani olsun.

    ui.clearInputs(titleElement,urlElement,directorElement);


    e.preventDefault();
}

function deleteFilm(e){
    console.log(e.target); // click'i Filmi Sil butonuna bastigimizda verdigi cikti :
                            // <a href="#" id ="delete-film" class="btn btn-danger"> Filmi Sil </a>

    // bu click'e basildiginda tum tr'yi kaldirmak istiyoruz
    //   bunun icin de tr'den td'ye ; td'den de tr'ye gitmem gerekiyor( 2 kere parent element)

    if(e.target.id ==="delete-film"){
        ui.deleteFilmFromUI(e.target); 
        
        // simdi de filmi storage'dan silelim. Bunu filmTitle'ini baz alarak yapalim
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme islemi basarili...","success");
    }
}

function clearAllFilms() {

    if(confirm("Tum Filmleri Silmek İstediginize Emin misiniz ?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }
    
}
