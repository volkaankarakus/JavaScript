function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
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

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";

}

UI.prototype.displayMessages = function(message,type){
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

UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach(function(film){
        filmList.innerHTML +=`
            <tr>
                <td><img src=" ${film.url} " class="img-fluid img-thumbnail"></td> 
                <td> ${film.title} </td>
                <td> ${film.director}</td> 
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
    `;
    });
}
