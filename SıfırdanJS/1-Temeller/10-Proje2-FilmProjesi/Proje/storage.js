function Storage(){

}
Storage.prototype.addFilmToStorage = function (newFilm){
    //getFilmsFromStorage'dan array donduruyorduk
    // bunu buraya alalim
    let films = this.getFilmsFromStorage();
    // newFilm'i buraya ekleyelim
    films.push(newFilm);

    /*
    daha once array'lere sadece stringlerimizi atiyorduk
    Suanda arraylere filmlerimizi Obje olarak atmaya calisiyoruz.
    [
        {title:"asdasd",director:"asasd",url"dfdfgdfg"},
        {title:"asdasd",director:"asasd",url"dfdfgdfg"},
    ] seklinde
    */
   // bu array'i tekrar localStorage'a array'i stringe cevirerek atmamiz gerekiyor
   localStorage.setItem("films",JSON.stringify((films)));
}

Storage.prototype.getFilmsFromStorage = function () {

    // localStorage'da daha onceden film olabilir
    //       o yuzden ilk olarak bunu kontrol edip onu almamiz gerekir.

    let films;
    if(localStorage.getItem("films") ===  null ) {
        films = [];
    }
    else{
        // localStorage sadece string degerler aliyordu. 
        //     O yuzden stringi array'e cevirelim.
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}