// function UI(){

// }

// ES6'ya cevirirken static methodlar seklinde yazarsak 
//     obje olusturmaya gerek kalmadan bu methodlari kullanabiliriz.
// class UI diyip herseyi tek bir class'a aldik.
// UI.prototype yazan herseyi silip bunun yerine static yazdik.

class UI {

    //UI.prototype.addFilmToUI = function(newFilm){
    static addFilmToUI(newFilm){

        console.log(newFilm);
    
        // yeni filmimizi arayuze eklemeye calisicaz
        // arayuze eklemek icin table'in tbody'sini secmemiz gerekiyor
        // biz buraya bu yapida birsey eklicez
    
        /*
        <tbody id = "films">
            <tr>
             <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        */
    
        const filmList = document.getElementById("films");
    
        filmList.innerHTML += `
        <tr>
            <td><img src=" ${newFilm.url} " class="img-fluid img-thumbnail"></td> 
            <td> ${newFilm.title} </td>
            <td> ${newFilm.director}</td> 
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;
        // sadece = dersek onceki veriler silinir.
        //    += yaparsak onceki verinin uzerine yazilir.
        
        // newFilm'in URL'sini src'ye vermemiz gerekiyor. 
             // daha sonra title ve director verdik.
    
    }
    
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    
    }
    
    static displayMessages(message,type){
        // alertleri yeni bir div olusturup HTML'de ilk card-body'de hr'nin altina eklememiz gerekiyor
        const cardBody = document.querySelectorAll(".card-body")[0];
    
        // Alert div'i olusturalim 
        const div = document.createElement("div");
        /*
        https://getbootstrap.com/docs/4.0/components/alerts'ten 
    
        <div class="alert alert-primary" role="alert"></div>
        <div class="alert alert-secondary" role="alert"></div>
        <div class="alert alert-danger" role="alert"></div>
        */
    
        // yukarida goruldugu gibi alert rengi class name'in sonuna gore degisiyor
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        //simdi bunu cardbody'mize child olarak ekleyelim
        cardBody.appendChild(div);
    
        //belli bir saniye sonra UI'dan silinsin
        setTimeout(function() {
            div.remove();
        },1000)
    
    }
    
    static loadAllFilms(films){
    
        // film listemiz HTML'deki id'si "films" olan tbody'ydi.
        const filmList = document.getElementById("films");
    
        // forEach ile her filmi alalim
        films.forEach(function(film){
            filmList.innerHTML +=` 
                <tr>
                    <td><img src=" ${film.url} " class="img-fluid img-thumbnail"></td> 
                    <td> ${film.title} </td>
                    <td> ${film.director}</td> 
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
        `; // her seferinde uzerine eklesin diye += yaptik.
    
        });
    }
    
    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove(); // iki kere parent element gidip kaldirdik.
    }
    
    static clearAllFilmsFromUI(){
        // ilk olarak film listesini seciyoruz
        // tbody'mizin id'si films seklinde
        const filmList = document.getElementById("films");
    
        // tbody'mizin icinde child kalmayana kadar silelim
        // bunu filmList.innerHTML = ""; olarak yapabiliyorduk ama bu yavas calisiyordu
    
        while(filmList.firstElementChild !== null){ // child oldugu surece sil
            filmList.firstChild.remove();
        }
    }
    



}





///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// UI.prototype.addFilmToUI = function(newFilm){
//     console.log(newFilm);

//     // yeni filmimizi arayuze eklemeye calisicaz
//     // arayuze eklemek icin table'in tbody'sini secmemiz gerekiyor
//     // biz buraya bu yapida birsey eklicez

//     /*
//     <tbody id = "films">
//         <tr>
//          <td><img src="" class="img-fluid img-thumbnail"></td>
//         <td></td>
//         <td></td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//         </tr>
//     */

//     const filmList = document.getElementById("films");

//     filmList.innerHTML += `
//     <tr>
//         <td><img src=" ${newFilm.url} " class="img-fluid img-thumbnail"></td> 
//         <td> ${newFilm.title} </td>
//         <td> ${newFilm.director}</td> 
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     </tr>
//     `;
//     // sadece = dersek onceki veriler silinir.
//     //    += yaparsak onceki verinin uzerine yazilir.
    
//     // newFilm'in URL'sini src'ye vermemiz gerekiyor. 
//          // daha sonra title ve director verdik.

// }

// UI.prototype.clearInputs = function(element1,element2,element3){
//     element1.value = "";
//     element2.value = "";
//     element3.value = "";

// }

// UI.prototype.displayMessages = function(message,type){
//     // alertleri yeni bir div olusturup HTML'de ilk card-body'de hr'nin altina eklememiz gerekiyor
//     const cardBody = document.querySelectorAll(".card-body")[0];

//     // Alert div'i olusturalim 
//     const div = document.createElement("div");
//     /*
//     https://getbootstrap.com/docs/4.0/components/alerts'ten 

//     <div class="alert alert-primary" role="alert"></div>
//     <div class="alert alert-secondary" role="alert"></div>
//     <div class="alert alert-danger" role="alert"></div>
//     */

//     // yukarida goruldugu gibi alert rengi class name'in sonuna gore degisiyor
//     div.className = `alert alert-${type}`;
//     div.textContent = message;

//     //simdi bunu cardbody'mize child olarak ekleyelim
//     cardBody.appendChild(div);

//     //belli bir saniye sonra UI'dan silinsin
//     setTimeout(function() {
//         div.remove();
//     },1000)

// }

// UI.prototype.loadAllFilms = function(films){

//     // film listemiz HTML'deki id'si "films" olan tbody'ydi.
//     const filmList = document.getElementById("films");

//     // forEach ile her filmi alalim
//     films.forEach(function(film){
//         filmList.innerHTML +=` 
//             <tr>
//                 <td><img src=" ${film.url} " class="img-fluid img-thumbnail"></td> 
//                 <td> ${film.title} </td>
//                 <td> ${film.director}</td> 
//                 <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//             </tr>
//     `; // her seferinde uzerine eklesin diye += yaptik.

//     });
// }

// UI.prototype.deleteFilmFromUI = function(element) {
//     element.parentElement.parentElement.remove(); // iki kere parent element gidip kaldirdik.
// }

// UI.prototype.clearAllFilmsFromUI = function(){
//     // ilk olarak film listesini seciyoruz
//     // tbody'mizin id'si films seklinde
//     const filmList = document.getElementById("films");

//     // tbody'mizin icinde child kalmayana kadar silelim
//     // bunu filmList.innerHTML = ""; olarak yapabiliyorduk ama bu yavas calisiyordu

//     while(filmList.firstElementChild !== null){ // child oldugu surece sil
//         filmList.firstChild.remove();
//     }
// }
