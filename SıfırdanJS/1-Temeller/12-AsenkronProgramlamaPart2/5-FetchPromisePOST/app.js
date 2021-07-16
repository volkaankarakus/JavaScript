
class Request {  

    get(url) { // Get Request

        return new Promise((resolve,reject) => {

            fetch(url) 
            .then(response => response.json()) 
            .then(data => resolve(data))  // BURADAKI DATAYI AKTARMAK ISTIYORUM. console.log(data) yerine resolve(data) yaptik. 
            .catch(err => reject(err));   // ayni sekilde burasi da "reject".
        })
    }
    
    post(url,data){

        // response'u almak icin yine Promise dondurelim
        return new Promise((resolve,reject) => {
        // post'un icine url degil bir tane yapi, yani bir tane obje gondermemiz gerekiyor
        // bu objeyi goruntulerken fetchAPI'nin kullanimini unutabiliriz
             // bunun icin jsonplaceholder'dan routes kismindan detaylara bakalim

        /*
        Creating a Resource kisminda url verip bir tane obje olusturmus
        method, 
        body(verinin gonderildigi kisim),
        headers( hangi verinin gonderildigini soyledigimiz kisim). AJAX'ta setRequestHeaders olarak yapmistik.
        */
         
        fetch(url,{
            method:'POST',
            body : JSON.stringify(data),
            headers : {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        // bu fetch sikintisiz bir sekilde calistiginda yine bize Promise icinde bir tane response objesi dondurucek.
        .then(response => response.json()) //  bu response icinden json verimizi "then" ile yakalayabiliriz ve return response.json() ile dondurebiliriz. 
        .then(data => resolve(data))   //  bu json'i almak icin de burasi
        .catch(err => reject(err))  //  hata icin burasi.
        })

       
       

    }
}

const request = new Request();

// GET
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err => console.error(err)); 

// POST
/*
burada bize gelecek json verisi aslinda olusturdugumuz kaynak olucak.   
    artik bu post'u calistirmak istiyoruz, albums icine albums ekleyecegiz.
    jsonplaceholder'dan albums yapisina bakarsak : "userId", "id", ve "title" aliyor. biz userId ve title'i gondericez. 
*/
request.post("https://jsonplaceholder.typicode.com/albums",{userId : 1, title : "Thriller"})
.then(newAlbum => console.log(newAlbum))  // yakalamak icin
.catch(err => console.log(err));
/*
{userId: 1, title: "Thriller", id: 101}
id: 101
title: "Thriller"
userId: 1
__proto__: Object                               100 tane objemiz vardi. id'si 101 olduguna gore basarili bir sekilde ekledik.
*/

