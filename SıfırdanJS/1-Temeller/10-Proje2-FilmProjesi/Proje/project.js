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

// Tum eventleri yukleme 
eventListeners();

function eventListeners(){
    
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });
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